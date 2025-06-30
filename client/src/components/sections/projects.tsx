import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import tradingDashboardImage from '@assets/화면 캡처 2025-06-27 122553_1751316620410.png';

const projects = [
  {
    title: 'Live Trading Dashboard',
    description: '실시간 시장 데이터 분석과 자동 거래 실행을 위한 통합 대시보드. AI 기반 의사결정 엔진과 리스크 관리 시스템이 통합된 고도화된 트레이딩 플랫폼입니다.',
    image: tradingDashboardImage,
    status: '활성화',
    statusColor: 'bg-green-500',
    metrics: [
      { label: 'ETH P&G', value: '$2,442.49', color: 'text-red-500' },
      { label: '데이터 스트림', value: '실시간', color: 'text-green-500' }
    ],
    tags: ['React', 'WebSocket', 'AI Integration', 'Risk Management'],
    links: {
      demo: '#',
      github: '#'
    }
  },
  {
    title: 'AI 기반 PLC IDE',
    description: '자연어 명령을 PLC 래더 로직으로 자동 변환하는 혁신적인 개발 환경. 산업 자동화의 진입장벽을 낮추고 개발 효율성을 극대화하는 것이 목표입니다.',
    status: '개발 중',
    statusColor: 'bg-amber-500',
    features: [
      { icon: '💬', text: '자연어 → 래더 로직 변환' },
      { icon: '🛡️', text: '실시간 안전성 검증' },
      { icon: '👥', text: '오픈소스 생태계' }
    ],
    tags: ['TypeScript', 'Electron', 'FastAPI', 'AI/ML'],
    links: {
      demo: '#',
      github: '#'
    }
  }
];

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            주요 프로젝트
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            혁신적인 아이디어를 실제 솔루션으로 구현한 프로젝트들
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="group bg-gradient-to-br from-card to-muted/30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-8">
                  {project.image ? (
                    <motion.div 
                      className="mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-4 relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between text-white text-sm">
                            <span className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                              Live Trading Active
                            </span>
                            <span>Real Money at Risk</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary to-green-500 rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4 opacity-80">⚙️</div>
                          <h4 className="text-xl font-bold">{project.title}</h4>
                          <p className="text-sm opacity-80 mt-2">{project.status}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className={`${project.statusColor} text-white font-medium`}>
                        <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                        {project.status}
                      </Badge>
                      <span className="text-muted-foreground text-sm">
                        {project.image ? '실시간 트레이딩 시스템' : '차세대 PLC 개발 환경'}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4 py-4">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.features && (
                      <div className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <span className="text-lg">{feature.icon}</span>
                            <span className="text-muted-foreground">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        데모 보기
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
