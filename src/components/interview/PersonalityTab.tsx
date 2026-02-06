// src/components/interview/PersonalityTab.tsx

import { InterviewCard } from '@/components/interview/InterviewCard';

export function PersonalityTab() {
  const items = [
    {
      id: 1,
      date: '2026.02.06',
      title: '본인의 장단점은?',
      content:
        '제 장점은 끈기입니다. 에러가 발생하면 해결될 때까지 끝까지 파고드는 성격을 가지고 있습니다. 지난 프로젝트에서도...',
      hasNewBadge: true,
    },
    {
      id: 2,
      date: '2026.02.05',
      title: '갈등 해결 경험',
      content:
        '프로젝트 당시 백엔드 팀원과 API 명세서 문제로 의견 차이가 있었습니다. 저는 먼저 30분 정도 대화 시간을 요청하여...',
      hasNewBadge: true,
    },
  ];

  return (
    <div className="w-full pb-10">
      {items.map((item) => (
        <InterviewCard
          key={item.id}
          date={item.date}
          title={item.title}
          content={item.content}
          hasNewBadge={item.hasNewBadge}
        />
      ))}
    </div>
  );
}
