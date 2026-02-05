import { NextResponse } from 'next/server';
import { jobManager } from '../../../../lib/services/job-manager';

export async function GET() {
  const jobStats = jobManager.getJobStats();
  const jobIds = jobManager.getAllJobIds();

  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      jobs: {
        stats: jobStats,
        recentJobs: jobIds.slice(-10) // 最近10个任务ID
      }
    },
    { status: 200 }
  );
}
