import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Lightbulb, Share2, Rocket, Globe, Heart } from 'lucide-react';

const visionSteps = [
  {
    icon: AlertTriangle,
    title: '현재의 문제',
    description: '특정 기업의 기술 독점, 높은 도입 비용, 복잡한 전문 지식 요구로 인한 높은 진입장벽',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Lightbulb,
    title: 'AI 솔루션',
    description: '자연어 기반 PLC 개발 환경을 통해 전문 지식 없이도 산업 자동화 시스템 구축 가능',
    color: 'from-primary to-blue-600'
  },
  {
    icon: Share2,
    title: '오픈소스',
    description: '기술 공유와 협력을 통한 개방형 혁신으로 더 빠른 발전과 확산 추진',
    color: 'from-green-500 to-emerald-600'
  }
];

const impactAreas = [
  {
    icon: Rocket,
    title: '혁신 가속화',
    color: 'text-primary'
  },
  {
    icon: Globe,
    title: '글로벌 접근성',
    color: 'text-green-500'
  },
  {
    icon: Heart,
    title: '인간 중심',
    color: 'text-red-500'
  }
];

export function Vision() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            비전: 산업 자동화의 민주화
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            기술의 혜택을 더 많은 사람이 누릴 수 있도록, 진입장벽을 낮추고 개방형 혁신을 추진합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <step.icon className="text-white text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-green-500/10 border border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  "기술 민주화를 통한 혁신의 가속화"
                </h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                  저의 궁극적인 목표는 복잡한 산업 자동화 기술을 누구나 쉽게 접근할 수 있도록 만드는 것입니다. 
                  AI의 힘을 빌려 "컨베이어 벨트 위 제품을 센서가 감지하면, 3초간 정지시킨 후 다음 공정으로 이동시켜라"와 같은 
                  자연어 명령만으로도 복잡한 PLC 로직을 구현할 수 있는 세상을 만들고자 합니다.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {impactAreas.map((area, index) => (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3 bg-card px-6 py-3 rounded-xl border"
                    >
                      <area.icon className={`${area.color} w-5 h-5`} />
                      <span className="font-medium">{area.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
