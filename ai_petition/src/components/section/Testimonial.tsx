import ScrollReveal from '@/components/ui/ScrollReveal';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    content: "AI Petition Manager has revolutionized how we handle our advocacy campaigns. The time saved on manual processing alone has been worth the investment.",
    author: "Sarah Johnson",
    position: "Campaign Director, Environmental Justice Now",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The analytics features have given us insights we never had before. We can see exactly what's working and adjust our strategy in real-time.",
    author: "Michael Chen",
    position: "Policy Advocate, Citizens United",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "We've increased our petition processing speed by 300% while reducing errors to practically zero. The ROI has been incredible.",
    author: "Aisha Williams",
    position: "Operations Manager, Human Rights Watch",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white dark:bg-background-100">
      <div className="blurry-gradient top-1/4 left-1/4"></div>
      
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs rounded-full bg-primary-300 text-primary-100 dark:bg-background-300 dark:text-accent-100 font-medium uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-text-100">
              Trusted by leading organizations
            </h2>
            <p className="text-gray-600 dark:text-text-200 text-lg">
              Hear what our customers have to say about how AI Petition Manager has transformed their workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className="glass-card h-full rounded-xl p-8 relative card-hover bg-white dark:bg-background-200 shadow-sm dark:shadow-none">
                <QuoteIcon className="w-10 h-10 text-primary-200 dark:text-accent-100 absolute top-6 right-6" />
                <p className="text-gray-700 dark:text-text-200 mb-8 relative z-10">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-black dark:text-text-100">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-text-200">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;