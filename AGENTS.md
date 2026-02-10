# AGENTS.md

Guidelines for AI coding agents working in the SeekMoney repository.

## Build/Lint/Test Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Production
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint

# Tests
npm test                 # Run clustering tests (ts-node lib/services/clustering/test-simple.ts)
npm run test:quick       # Run quick clustering tests
```

**Note:** There is no single test runner (like Jest/Vitest). Tests are TypeScript files executed directly with `ts-node`.

## Project Structure

- `src/app/` - Next.js 15 App Router with `[locale]` for i18n
- `src/components/` - React 19 components (client components use "use client")
- `src/i18n/` - next-intl configuration
- `src/messages/` - Translation files (zh.json, en.json, zh-TW.json)
- `lib/services/` - Business logic services
- `lib/services/clustering/` - TypeScript clustering implementation
- `lib/semantic_clustering.py` - Python clustering (legacy/alternative)

## Code Style Guidelines

### Imports
- Use ES modules (`import`/`export`)
- External deps first, then internal (`@/*` aliases)
- React hooks: `import { useState } from "react"`

```typescript
// Good
import { NextRequest, NextResponse } from 'next/server';
import { jobManager } from '../../../../lib/services/job-manager';
import { useTranslations } from 'next-intl';
```

### Formatting
- 2-space indentation
- Single quotes for strings
- Semicolons required
- No trailing commas
- Max line length: ~100 chars (soft)

### Types & Naming
- **Interfaces**: PascalCase (e.g., `RawVideoData`, `TikTokConfig`)
- **Types**: PascalCase with `Type` suffix (e.g., `DataSourceType`)
- **Classes**: PascalCase (e.g., `JobManagerImpl`, `GLMService`)
- **Functions**: camelCase (e.g., `createJob`, `handleSubmit`)
- **Variables**: camelCase (e.g., `jobId`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Files**: kebab-case (e.g., `data-source-factory.ts`, `job-manager.ts`)
- **React Components**: PascalCase filename + function name

### TypeScript
- Strict mode enabled
- Always define return types for public functions
- Use interfaces for object shapes
- Use type for unions/aliases
- Avoid `any` - use `unknown` or proper types

### Error Handling
- Use try/catch in async functions
- Return meaningful error messages (often in Chinese for user-facing)
- Log with `[Component] description` format for debugging

```typescript
try {
  const result = await someAsyncOperation();
  return result;
} catch (error) {
  console.error('[JobManager] Failed to process:', error);
  throw new Error('处理失败，请重试');
}
```

### React Patterns
- Client components: `"use client"` at top
- Server components: default (no directive)
- Props interfaces: `{ComponentName}Props`
- Use `useTranslations()` from next-intl for i18n

### Comments
- Chinese comments for business logic (target audience is Chinese-speaking)
- JSDoc for public APIs
- Section headers: `// ==================== Section Name ====================`

### API Routes
- Use `NextRequest` and `NextResponse`
- Return 202 for async job creation
- Validate inputs explicitly
- Chinese error messages for validation errors

### Services Pattern
- Each service in `lib/services/` is a class or factory
- Factory pattern for data sources: `DataSourceFactory.createDataSource(type)`
- Export interfaces from `data-source-interface.ts`

## Environment Variables

Required in `.env.local`:
```bash
# AI Analysis (Zhipu AI GLM or OpenAI-compatible)
GLM_API_KEY=your_key
GLM_MODEL_NAME=glm-4.7

# Data Collection (TikHub API)
TIKHUB_API_TOKEN=your_token
```

## Key Dependencies

- **Next.js 15** with App Router
- **React 19**
- **TypeScript 5** (strict)
- **Tailwind CSS 4** (no tailwind.config - uses CSS config)
- **next-intl** for i18n
- **SWR** for data fetching
- **axios** for HTTP

## Things to Avoid

- Don't use `any` type
- Don't suppress TypeScript errors with `@ts-ignore`
- Don't use default exports for components (use named exports)
- Don't modify global styles - use Tailwind classes
- Don't hardcode Chinese strings - use i18n

## Python Integration

Python scripts are invoked via subprocess:
- `lib/semantic_clustering.py` - Embedding + DBSCAN clustering
- Requires: `numpy`, `scikit-learn`, `python-dotenv`
- Install: `pip install -r requirements.txt`
