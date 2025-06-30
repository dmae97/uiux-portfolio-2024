import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Cog, Code, Bot, Smartphone, Box, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Cog,
    title: '산업 자동화',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: [
      { name: 'PLC Programming', level: 85 },
      { name: 'HMI Design', level: 80 },
      { name: 'CIM Integration', level: 75 }
    ]
  },
  {
    icon: Code,
    title: '웹 기술',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'FastAPI', level: 75 }
    ]
  },
  {
    icon: Bot,
    title: 'AI & 머신러닝',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    skills: [
      { name: 'PyTorch', level: 60 },
      { name: 'Hugging Face', level: 80 },
      { name: 'AI Tools', level: 85 }
    ]
  },
  {
    icon: Smartphone,
    title: '모바일 개발',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    skills: [
      { name: 'Flutter', level: 75 },
      { name: 'Dart', level: 60 },
      { name: 'Cross-Platform', level: 80 }
    ]
  },
  {
    icon: Box,
    title: '3D & 시뮬레이션',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    skills: [
      { name: 'Blender', level: 60 },
      { name: 'Unity', level: 65 },
      { name: 'Digital Twin', level: 75 }
    ]
  },
  {
    icon: Wrench,
    title: '개발 도구',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    skills: [
      { name: 'Cursor AI', level: 85 },
      { name: 'Windsurf', level: 80 },
      { name: 'Aider & Cline', level: 75 }
    ]
  }
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            기술 스택
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            산업 자동화부터 최신 웹 기술까지, 융합적 접근을 통한 혁신적 솔루션 개발
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group glassmorphism hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`text-4xl mb-4 ${category.color}`}>
                    <category.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-muted-foreground text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={isIntersecting ? skill.level : 0} 
                          className="h-2"
                        />
                      </div>
                    ))}
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
