import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', attending: '', guests: '' });
  const { toast } = useToast();

  useEffect(() => {
    const weddingDate = new Date('2026-08-22T12:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Ваш ответ принят",
    });
    setFormData({ name: '', attending: '', guests: '' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <Card className="bg-white shadow-2xl overflow-hidden border-none">
          <div className="p-8 md:p-12 space-y-12">
            
            <section className="text-center space-y-6 animate-fade-in">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                22 августа, 2026 | 12:00
              </div>
              <div className="space-y-2">
                <h1 className="text-6xl md:text-7xl font-serif font-light tracking-wide">
                  Вероника
                </h1>
                <div className="text-4xl font-light">&</div>
                <h1 className="text-6xl md:text-7xl font-serif font-light tracking-wide">
                  Руслан
                </h1>
              </div>
              <div className="pt-4">
                <p className="text-5xl font-script text-accent">I love you</p>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-6 animate-fade-in-up relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <p className="text-9xl font-script whitespace-nowrap">I love you</p>
              </div>
              <h2 className="text-2xl font-serif font-light text-center tracking-wide relative z-10">
                ДОРОГИЕ НАШИ<br />ДРУЗЬЯ И РОДНЫЕ!
              </h2>
              <p className="text-sm text-center leading-relaxed text-muted-foreground relative z-10">
                Этот день в этом году будет самым особенным и счастливым рядом для нас.<br/><br/>
                А потому мы<br/>
                с любовью надеемся увидеть вас!
              </p>
            </section>

            <section className="space-y-6 animate-fade-in-up relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <p className="text-9xl font-script whitespace-nowrap">I love you</p>
              </div>
              <h3 className="text-2xl font-script text-accent text-center relative z-10">Июнь, 2025</h3>
              <div className="relative z-10">
                <div className="flex justify-center gap-3">
                  {[10, 11, 12, 13, 14].map((day) => (
                    <div 
                      key={day}
                      className={`relative ${
                        day === 12 
                          ? 'w-16 h-20' 
                          : 'w-12 h-12 border border-muted rounded-lg flex items-center justify-center'
                      }`}
                    >
                      {day === 12 ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Icon name="Heart" className="w-16 h-16 text-accent fill-accent" />
                          <span className="absolute text-white font-medium text-lg">{day}</span>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">{day}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  22 АВГУСТА, 2026 | 12:00
                </p>
                <h2 className="text-3xl font-script text-accent mb-8">
                  I love you
                </h2>
              </div>

              <div className="space-y-6 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                  <p className="text-9xl font-script whitespace-nowrap">I love you</p>
                </div>
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-serif mb-4">Место проведения</h3>
                  <p className="text-sm font-light mb-2">Панорамное кафе Верталетка</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Как добраться
                  </Button>
                </div>

                <div className="border-t border-muted my-8"></div>

                <div className="space-y-6 relative z-10">
                  <h3 className="text-xl font-serif text-center mb-6">ДЕТАЛИ...</h3>
                  
                  {[
                    { time: '12:00', title: 'СБОР', desc: 'Ожид вас, торт пройт мимо, мы не будем' },
                    { time: '14:30', title: 'ЦЕРЕМОНИЯ', desc: 'Обмен клятвами и поздравления гостей' },
                    { time: '17:00', title: 'БАНКЕТ', desc: 'Ужин, танцы и веселье до утра' },
                    { time: '21:30', title: 'ОКОНЧАНИЕ', desc: 'Бол вам не больна услуга закончился' }
                  ].map((event, i) => (
                    <div key={i} className="text-center space-y-1">
                      <div className="flex justify-center items-center gap-2">
                        <Icon name="Heart" size={14} className="text-accent" />
                      </div>
                      <h4 className="font-serif text-lg tracking-wider">{event.title}</h4>
                      <p className="text-2xl font-light">{event.time}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-6 animate-fade-in-up relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <p className="text-9xl font-script whitespace-nowrap">I love you</p>
              </div>
              <h2 className="text-xl font-script text-accent text-center relative z-10">Дресс-код</h2>
              
              <div className="space-y-6 relative z-10">
                <div className="text-center">
                  <p className="text-sm mb-6">Буду рад, радость в классном свежем корпоратив состояла согреться торжества и уюта у всего 40.</p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm mb-4 font-medium">Мы будем благо, дарьи и ниже и в день дерни запутую темного, сарафана.</p>
                  <div className="flex justify-center gap-2 mt-4">
                    {['#C8C8D0', '#FFB6C1', '#ADD8E6', '#F5DEB3'].map((color, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border border-muted"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm mb-4">Для женщин — пастельные оттенки</p>
                  <div className="flex justify-center gap-2">
                    {['#FFE4E1', '#E6E6FA', '#F0E68C', '#FFE4CC'].map((color, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border border-muted"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm mb-4">Для мужчин — классика</p>
                  <div className="flex justify-center gap-2">
                    {['#000000', '#FFFFFF', '#1E3A8A', '#556B2F'].map((color, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border border-muted"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-script text-accent text-center">Анкета гостя</h2>
              <p className="text-xs text-center text-muted-foreground">
                Пожалуйста, подтвердите ваше<br />присутствие на нашей свадьбе до
              </p>
              <p className="text-center font-medium">10.06.2025</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-xs uppercase tracking-wider">Ваше имя</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0"
                    required
                  />
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider block mb-3">
                    Я буду присутствовать
                  </Label>
                  <div className="space-y-2">
                    {['Да', 'Нет'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <div 
                          onClick={() => setFormData({ ...formData, attending: option })}
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.attending === option ? 'border-accent' : 'border-muted'
                          }`}
                        >
                          {formData.attending === option && (
                            <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                          )}
                        </div>
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider">Количество гостей</Label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white uppercase tracking-wider text-xs py-6"
                >
                  Подтвердить
                </Button>
              </form>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="text-center space-y-6 animate-fade-in-up relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <p className="text-9xl font-script whitespace-nowrap">I love you</p>
              </div>
              <h2 className="text-xl font-serif relative z-10">ЖДЕМ ВАС!</h2>
              <p className="text-sm text-muted-foreground relative z-10">До скорой встречи!</p>
              <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto relative z-10">
                {[
                  { value: countdown.days, label: 'МЕСЯЦЫ' },
                  { value: countdown.hours, label: 'ДНИ' },
                  { value: countdown.minutes, label: 'ЧАСОВ' },
                  { value: countdown.seconds, label: 'МИНУТ' }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-accent text-white rounded-full flex items-center justify-center mb-2">
                      <Icon name="Heart" size={18} />
                    </div>
                    <div className="text-xl font-light mb-1">{item.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <footer className="text-center space-y-4">
              <p className="text-xs text-muted-foreground">До скорой встречи!<br />С любовью,</p>
              <h3 className="text-4xl font-script text-accent">
                Вероника & Руслан
              </h3>
            </footer>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
