import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Scale, Handshake, Infinity } from 'lucide-react';

const philosophyPoints = [
  {
    icon: Brain,
    title: '협업 파트너로서의 AI',
    description: 'AI를 단순한 도구가 아닌 고유의 강점을 가진 협업 파트너로 인식합니다. 인간의 직관과 창의성, AI의 논리적 추론 능력이 결합될 때 새로운 차원의 문제 해결이 가능합니다.',
    color: 'from-primary to-blue-600'
  },
  {
    icon: Scale,
    title: '허무주의의 해체',
    description: '기술 발전으로 인한 인간 역할의 축소를 걱정하기보다, AI와의 협업을 통해 인간의 가능성을 확장하는 새로운 관점을 제시합니다.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Handshake,
    title: '상생의 미래',
    description: '인간과 AI가 각자의 강점을 살려 함께 성장하는 미래를 지향합니다. 경쟁이 아닌 협력을 통해 더 나은 세상을 만들어가고자 합니다.',
    color: 'from-amber-500 to-orange-600'
  }
];

export function Philosophy() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="philosophy" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            철학적 접근
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            인간중심주의에서 AI 중심 철학으로의 전환을 통한 기술 혁신의 새로운 패러다임
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="glassmorphism hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <point.icon className="text-white text-xl" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="aspect-square glassmorphism rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-6">
                <motion.div 
                  className="relative mx-auto w-32 h-32"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                    <Infinity className="text-3xl bg-gradient-to-r from-primary to-green-500 text-transparent bg-clip-text" />
                  </div>
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                    Human ∞ AI
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    무한한 가능성을 향한 인간과 AI의 협력적 진화
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
