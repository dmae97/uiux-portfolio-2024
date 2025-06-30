import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { copyToClipboard, showNotification } from '@/lib/utils';

const contactMethods = [
  {
    icon: Mail,
    title: '이메일',
    value: 'ingeng2004@gmail.com',
    color: 'from-primary to-blue-600',
    action: () => {
      copyToClipboard('example@email.com').then(() => {
        showNotification('이메일이 클립보드에 복사되었습니다!');
      });
    }
  },
  {
    icon: Phone,
    title: '전화',
    value: '+82-10-8401-0951',
    color: 'from-green-500 to-emerald-600',
    action: () => {
      copyToClipboard('+82-10-1234-5678').then(() => {
        showNotification('전화번호가 클립보드에 복사되었습니다!');
      });
    }
  },
  {
    icon: ExternalLink,
    title: 'LinkedIn',
    value: '전문 경력 보기',
    color: 'from-blue-500 to-blue-600',
    action: () => {
      window.open('https://www.linkedin.com/in/geunbinyu97/', '_blank');
    }
  },
  {
    icon: ExternalLink,
    title: 'GitHub',
    value: '프로젝트 포트폴리오',
    color: 'from-gray-700 to-gray-800',
    action: () => {
      window.open('https://github.com/dmae97?tab=repositories', '_blank');
    }
  }
];

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    showNotification('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            연락하기
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            새로운 도전과 협업 기회를 기다리고 있습니다. 언제든 연락주세요!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card 
                className="glassmorphism text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={method.action}
              >
                <CardContent className="p-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <method.icon className="text-white text-xl" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{method.value}</p>
                  <p className="text-xs text-muted-foreground">
                    {method.title === 'LinkedIn' || method.title === 'GitHub' ? '새 창에서 열기' : '클릭하여 복사'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="glassmorphism">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">메시지 보내기</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">이름</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="성명을 입력하세요"
                      className="rounded-xl transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">이메일</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="이메일을 입력하세요"
                      className="rounded-xl transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2 block">제목</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="제목을 입력하세요"
                    className="rounded-xl transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">메시지</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="메시지를 입력하세요"
                    className="rounded-xl resize-none transition-all duration-300"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full px-8 py-4 gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  메시지 전송
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
