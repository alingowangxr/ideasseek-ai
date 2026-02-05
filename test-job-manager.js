// 简单的 JobManager 测试
// 运行: node test-job-manager.js

const { JobManager } = require('./lib/services/job-manager');

// 创建 JobManager 实例
const jobManager = new JobManager();

// 创建测试任务
console.log('创建测试任务...');
const jobId = jobManager.createJob(
  ['测试关键词'],
  10,
  'tikhub',
  false,
  5,
  {
    enableComments: false,
    maxVideos: 5,
    maxCommentsPerVideo: 10,
    enableSubComments: false
  },
  'zh'
);

console.log('任务ID:', jobId);
console.log('所有任务ID:', jobManager.getAllJobIds());
console.log('任务统计:', jobManager.getJobStats());

// 等待一秒后查询任务
setTimeout(() => {
  console.log('\n1秒后查询任务...');
  const job = jobManager.getJob(jobId);
  if (job) {
    console.log('任务存在:', {
      id: job.jobId,
      status: job.status,
      progress: job.progress,
      keywords: job.keywords
    });
  } else {
    console.log('任务不存在!');
  }
}, 1000);
