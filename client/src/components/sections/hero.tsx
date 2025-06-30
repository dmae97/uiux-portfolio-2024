import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from '@/components/ui/typing-animation';

const typingTexts = [
  '산업 자동화 엔지니어',
  'AI 기반 솔루션 개발자',
  'PLC & HMI 전문가',
  '기술 민주화 혁신가'
];

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-primary via-green-500 to-amber-500 bg-clip-text text-transparent">
              유근빈
            </span>
          </motion.h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 h-20 flex items-center justify-center">
            <TypingAnimation texts={typingTexts} className="min-h-[1.2em]" />
          </div>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            PLC와 AI 기술을 융합하여 산업 자동화의 미래를 만들어가는 개발자입니다. 
            복잡한 제조 공정을 직관적인 인터페이스로 제어하고, 
            AI를 활용하여 기술의 진입장벽을 낮추는 것이 저의 목표입니다.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="px-8 py-4 gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              이력서 다운로드
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              연락하기
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
