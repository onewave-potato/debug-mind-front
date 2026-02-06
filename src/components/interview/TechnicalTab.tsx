// src/components/interview/TechnicalTab.tsx
import { InterviewCard } from './InterviewCard';

export function TechnicalTab() {
  const items = [
    {
      id: 1,
      date: '2026.02.04',
      title: '브라우저 렌더링 과정',
      content:
        '브라우저가 HTML을 파싱하여 DOM 트리를 만들고, CSS를 파싱하여 CSSOM 트리를 만듭니다. 이 두 트리를 결합하여...',
      hasNewBadge: false,
    },
    {
      id: 2,
      date: '2026.02.03',
      title: 'React의 Virtual DOM이란?',
      content:
        'Virtual DOM은 실제 DOM의 가벼운 사본입니다. 상태가 변경되면 새로운 Virtual DOM을 생성하고 이전 것과 비교하여...',
      hasNewBadge: false,
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
