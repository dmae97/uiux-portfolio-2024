import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Badge } from '@/components/ui/badge';

const timelineData = [
  {
    date: '2024년 4월',
    title: 'J-INNOTECH 입사',
    description: 'PLC 교육을 통한 산업 자동화 기초 다지기. 물리적 세계와 디지털 로직의 상호작용에 대한 근본적 이해 습득.',
    color: 'bg-primary',
    side: 'left'
  },
  {
    date: '2024년 5월 - 11월',
    title: 'A6 8.6G IT SDC SETUP 프로젝트',
    description: '실제 산업 현장에서의 Troubleshooting, HMI 화면 개선, CIM 시스템 연동을 통한 실시간 모니터링 시스템 구축.',
    color: 'bg-green-500',
    side: 'right',
    tags: ['PLC', 'HMI', 'CIM']
  },
  {
    date: '2024년 12월 - 현재',
    title: 'AI 협업 개발 프로젝트',
    description: 'TypeScript, React, FastAPI를 활용한 차세대 PLC 프로젝트. AI 도구들과의 협업을 통한 개발 혁신.',
    color: 'bg-amber-500',
    side: 'left',
    tags: ['TypeScript', 'React', 'FastAPI', 'AI Tools']
  }
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            전문 경험
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            현장에서 쌓은 실무 경험과 AI 기술을 통한 혁신의 여정
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-green-500 rounded-full"
            initial={{ height: 0 }}
            animate={isIntersecting ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {item.side === 'left' ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
                        <div className="text-primary font-semibold mb-2">{item.date}</div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 justify-end">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <motion.div 
                      className={`w-4 h-4 ${item.color} rounded-full border-4 border-background relative z-10`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <motion.div 
                      className={`w-4 h-4 ${item.color} rounded-full border-4 border-background relative z-10`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="w-1/2 pl-8">
                      <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
                        <div className="text-green-500 font-semibold mb-2">{item.date}</div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        {item.tags && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
