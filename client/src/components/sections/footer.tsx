import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent mb-2">
              유근빈
            </h3>
            <p className="text-muted-foreground">
              산업 자동화 & AI 개발자
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 유근빈. All rights reserved. | 
            <span className="text-primary ml-1">
              AI와 인간의 협력적 미래를 만들어갑니다
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
