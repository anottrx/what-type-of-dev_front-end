import { ChartFilterType, ChartResultType } from '../../types/chartTypes';

export const statisticsData: ChartResultType = {
  statisticTitle: {
    surveyDate: '04/08',
    responseUserCount: 2000,
    responseCareerCount: 1000,
    responseNewCount: 2000,
    statisticSummary:
      '명의 이용자들이 설문에 참여했습니다. 아래 통계는 답변 내용을 비율별로 정리한 결과입니다. 다른 개발자들은 어떤 마음가짐으로 생활을 하는지 엿보며 비교해 보세요.',
  },
  statisticContents: [
    {
      partId: 1,
      title: '프로필',
      contentsInfo: [
        { questionId: 1, question: '현직에서 개발일을 하고 계신가요?' },
        {
          questionId: 2,
          question:
            '현직 개발자인 경우, 현재 일하고 있는 분야를 선택해주세요. 현직 개발자가 아닌 경우, 어느 분야에서 일하고 싶은지 선택해주세요.',
        },
        { questionId: 3, question: '연령대를 선택해주세요.' },
        { questionId: 4, question: '성별을 선택해주세요.' },
        { questionId: 5, question: '희망 연봉은 얼마인가요?' },
        { questionId: 6, question: '당신의 직업에 얼마나 만족하나요?' },
      ],
    },
    {
      partId: 2,
      title: '생활모습',
      contentsInfo: [
        { questionId: 1, question: '사용하는 모바일 운영체제는 무엇인가요?' },
        {
          questionId: 2,
          question: '선호하는 근무 형태는 무엇인가요?',
        },
        { questionId: 3, question: '일할 때 어떤 음료를 마시나요?' },
        {
          questionId: 4,
          question: '다른 사람을 돕는 것을 중요하게 생각하시나요?',
        },
        {
          questionId: 5,
          question: '항상 올바르게 행동하는 것을 중요하게 생각하나요?',
        },
        {
          questionId: 6,
          question:
            '값 비싼 것을 소유하고, 부자가 되는 것을 중요하게 생각하나요?',
        },
        {
          questionId: 7,
          question:
            '모든 것을 고려했을 때, 요즘 당신의 삶은 얼마나 만족스러운가요?',
        },
        {
          questionId: 8,
          question:
            '어떤 위험 요소도 없는 안전한 삶을 사는 것을 중요하게 생각하나요?',
        },
      ],
    },
  ],
  statisticAnalyze: [
    {
      partId: 1,
      title: '프로필',
      description: 'ㅇㅇ명의 개발자와 ㅇㅇ명의 예비 개발자가 참여했습니다.',
      imgUrl: '/images/chart/self.png',
      statisticsSummary: [
        {
          summaryId: 1,
          summary:
            '참여한 현 개발자의 Top 3는 웹, 모바일, 블록체인 순서였습니다.',
        },
        { summaryId: 2, summary: '희망연봉 1순위는 1억 이상이었습니다.' },
        {
          summaryId: 3,
          summary: '현재 직업에 만족하는 비율은 40%였습니다.',
        },
      ],
      statisticResult: [
        {
          statisticId: 1,
          question: '현직에서 개발일을 하고 계신가요?',
          chartType: 'doughnut',
          chartInfo: {
            content: ['예', '아니오'],
            count: [1300, 700],
          },
        },
        {
          statisticId: 2,
          question:
            '현직 개발자인 경우, 현재 일하고 있는 분야를 선택해주세요. 현직 개발자가 아닌 경우, 어느 분야에서 일하고 싶은지 선택해주세요.',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '웹',
              '금융',
              '응용소프트웨어',
              '시스템소프트웨어',
              '게임',
              '엔터테이먼트',
              '인프라',
              '데이터/머신러닝',
              'DB',
              '프로그래밍툴',
              '기타',
            ],
            count: [500, 400, 300, 200, 100, 80, 70, 60, 50, 40],
          },
        },
        {
          statisticId: 3,
          question: '연령대를 선택해주세요.',
          chartType: 'verticalBar',
          chartInfo: {
            content: [
              '20세 미만',
              '20-24세',
              '25-29세',
              '30-34세',
              '35-39세',
              '40-44세',
              '45-49세',
              '50세 이상',
            ],
            count: [500, 400, 300, 200, 100, 80, 70, 60],
          },
        },
        {
          statisticId: 4,
          question: '성별을 선택해주세요.',
          chartType: 'doughnut',
          chartInfo: {
            content: ['여성', '남성'],
            count: [1300, 700],
          },
        },
        {
          statisticId: 5,
          question: '희망 연봉은 얼마인가요?',
          chartType: 'verticalBar',
          chartInfo: {
            content: [
              '2000-3000만원',
              '3000-4000만원',
              '4000-5000만원',
              '5000-6000만원',
              '6000-7000만원',
              '7000-8000만원',
              '8000-9000만원',
              '1억 이상',
            ],
            count: [500, 400, 300, 200, 100, 80, 70, 60],
          },
        },
        {
          statisticId: 6,
          question: '당신의 직업에 얼마나 만족하나요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '완전히 만족',
              '매우 만족',
              '꽤 만족',
              '보통',
              '꽤 불만족',
              '매우 불만족',
              '완전히 불만족',
              '모르겠다',
            ],
            count: [500, 400, 300, 200, 100, 80, 70, 60],
          },
        },
      ],
    },
    {
      partId: 2,
      title: '생활 모습',
      description: '선호하는 근무 형태 1순위는 원격 근무였습니다.',
      imgUrl: '/images/chart/satisfaction.png',
      statisticsSummary: [
        {
          summaryId: 1,
          summary:
            '사용하는 모바일 운영체제는 iOS가 51%, Android가 49%였습니다.',
        },
        {
          summaryId: 2,
          summary: 'ㅇㅇ%의 응답자가 현재 삶에 만족스럽다고 답변했습니다.',
        },
        {
          summaryId: 3,
          summary:
            '일할 때 즐겨마시는 음료 1순위는 커피, 2순위는 에너지음료, 3순위는 물이었습니다.',
        },
      ],
      statisticResult: [
        {
          statisticId: 1,
          question: '일 할 때 어떤 음료를 마시나요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: ['커피', '차', '물', '에너지음료', '맥주', '청량음료'],
            count: [500, 400, 300, 200, 100, 80],
          },
        },
        {
          statisticId: 2,
          question: '사용하는 모바일 운영체제는 무엇인가요?',
          chartType: 'doughnut',
          chartInfo: {
            content: ['iOS', 'Andriod'],
            count: [1300, 700],
          },
        },
        {
          statisticId: 3,
          question:
            '모든 것을 고려했을 때, 요즘 당신의 삶은 얼마나 만족스러운가요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '매우매우 만족',
              '매우 만족',
              '꽤 만족',
              '만족',
              '약간 만족',
              '약간 불만족',
              '불만족',
              '꽤 불만족',
              '매우 불만족',
              '매우매우 불만족',
              '모르겠다',
            ],
            count: [700, 600, 500, 400, 300, 250, 200, 180, 100, 80, 70, 60],
          },
        },
        {
          statisticId: 4,
          question: '선호하는 근무 형태는 무엇인가요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '재택근무',
              '출퇴근',
              '난 짱이라서 어디든 가능',
              '상관 없음',
            ],
            count: [1300, 700, 400, 300],
          },
        },
        {
          statisticId: 5,
          question:
            '값 비싼 것을 소유하고, 부자가 되는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '매우 그렇다',
              '그렇다',
              '그렇지 않다',
              '매우 그렇지 않다',
              '모르겠다',
            ],
            count: [1300, 700, 400, 300, 200],
          },
        },
        {
          statisticId: 6,
          question:
            '어떤 위험 요소도 없는 안전한 삶을 사는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '매우 그렇다',
              '그렇다',
              '그렇지 않다',
              '매우 그렇지 않다',
              '모르겠다',
            ],
            count: [1300, 700, 400, 300, 200],
          },
        },
        {
          statisticId: 7,
          question: '다른 사람을 돕는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '매우 그렇다',
              '그렇다',
              '그렇지 않다',
              '매우 그렇지 않다',
              '모르겠다',
            ],
            count: [1300, 700, 400, 300, 200],
          },
        },
        {
          statisticId: 8,
          question: '항상 올바르게 행동하는 것을 중요하게 생각하나요?',
          chartType: 'horizontalBar',
          chartInfo: {
            content: [
              '매우 그렇다',
              '그렇다',
              '그렇지 않다',
              '매우 그렇지 않다',
              '모르겠다',
            ],
            count: [1300, 700, 400, 300, 200],
          },
        },
      ],
    },
  ],
};

export const ChartSearchData: ChartFilterType[] = [
  {
    gender: 'all',
    age: 'all',
    statisticFilterData: {
      JobRankData: {
        content: [
          '인프라',
          '웹',
          '금융',
          '응용소프트웨어',
          '시스템소프트웨어',
          '게임',
          '엔터테이먼트',

          '데이터/머신러닝',
          'DB',
          '프로그래밍툴',
          '기타',
        ],
        count: [500, 400, 300, 200, 100, 80, 70, 60, 50, 40],
      },
    },
  },
  {
    gender: 'female',
    age: 'all',
    statisticFilterData: {
      JobRankData: {
        content: [
          '게임',
          '웹',
          '금융',
          '응용소프트웨어',
          '시스템소프트웨어',

          '엔터테이먼트',
          '인프라',
          '데이터/머신러닝',
          'DB',
          '프로그래밍툴',
          '기타',
        ],
        count: [500, 400, 300, 200, 100, 80, 70, 60, 50, 40],
      },
    },
  },
  {
    gender: 'male',
    age: 'all',
    statisticFilterData: {
      JobRankData: {
        content: [
          '응용소프트웨어',
          '웹',
          '금융',

          '시스템소프트웨어',
          '게임',
          '엔터테이먼트',
          '인프라',
          '데이터/머신러닝',
          'DB',
          '프로그래밍툴',
          '기타',
        ],
        count: [500, 400, 300, 200, 100, 80, 70, 60, 50, 40],
      },
    },
  },
  {
    gender: 'male',
    age: '2529',
    statisticFilterData: {
      JobRankData: {
        content: [
          '금융',
          '웹',

          '응용소프트웨어',
          '시스템소프트웨어',
          '게임',
          '엔터테이먼트',
          '인프라',
          '데이터/머신러닝',
          'DB',
          '프로그래밍툴',
          '기타',
        ],
        count: [500, 400, 300, 200, 100, 80, 70, 60, 50, 40],
      },
    },
  },
];