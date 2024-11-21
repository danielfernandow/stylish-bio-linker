import React from 'react';
import VideoSection from '../components/VideoSection';
import LinkCard from '../components/LinkCard';

const links = [
  {
    title: "Acesso ao Hub Genix",
    url: "https://genix.company/hub/?utm_source=youtube&utm_medium=",
    icon: "👉"
  },
  {
    title: "Acesso ao n8n Grátis",
    url: "https://genix.company/ro3c/?utm_source=YouTube&utm_medium=",
    icon: "👉"
  },
  {
    title: "Clube Genix (Acesso ao Sistema de Automação + CRM Whatsapp)",
    url: "https://genix.company/club/?utm_source=youtube&utm_medium=",
    icon: "👉"
  },
  {
    title: "Formação Agentes de IA",
    url: "https://genix.company/formacao/?utm_source=youtube&utm_medium=",
    icon: "👉"
  },
  {
    title: "Procurando um sistema similar para implementar no seu negócio?",
    url: "https://genix.company/call1/?utm_source=youtube&utm_medium=",
    icon: "👉"
  },
  {
    title: "Acesse Grupo de Networking WhatsApp",
    url: "https://genix.company/wp/?utm_source=youtube&utm_medium=",
  },
  {
    title: "Dúvida? Contate-me aqui",
    url: "https://genix.company/0gpn/?utm_source=youtube&utm_medium=",
    icon: "👉"
  },
  {
    title: "Inscreva-se no Canal do Youtube",
    url: "https://genix.company/youtube/?utm_source=youtube&utm_medium=",
    icon: "🔴"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-black to-luxury-charcoal text-luxury-cream p-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-luxury-gold">
            Daniel Silva
          </h1>
        </header>

        <VideoSection />

        <div className="space-y-4">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;