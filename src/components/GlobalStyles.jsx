export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
      
      :root {
        --gradient-royal-indigo: linear-gradient(135deg, #0054B5 0%, #4A46C9 100%);
        --gradient-purple-indigo: linear-gradient(135deg, #6253D8 0%, #2E2B73 100%);
        --gradient-cyan-blue: linear-gradient(135deg, #0085CE 0%, #004E93 100%);
        --gradient-gunmetal-midnight: linear-gradient(135deg, #222222 0%, #000000 100%);
        --gradient-emerald: linear-gradient(135deg, #10B981 0%, #059669 100%);
        --gradient-amber: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
        --gradient-rose: linear-gradient(135deg, #F43F5E 0%, #E11D48 100%);
      }
      
      * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      body {
        user-select: none;
      }
      
      .font-barlow {
        font-family: 'Barlow', sans-serif;
      }
      
      .font-inter {
        font-family: 'Inter', sans-serif;
      }
      
      .gradient-royal-indigo {
        background: var(--gradient-royal-indigo);
      }
      
      .gradient-purple-indigo {
        background: var(--gradient-purple-indigo);
      }
      
      .gradient-cyan-blue {
        background: var(--gradient-cyan-blue);
      }
      
      .gradient-gunmetal-midnight {
        background: var(--gradient-gunmetal-midnight);
      }
      
      .gradient-emerald {
        background: var(--gradient-emerald);
      }
      
      .gradient-amber {
        background: var(--gradient-amber);
      }
      
      .gradient-rose {
        background: var(--gradient-rose);
      }
      
      .hover-lift {
        transition: all 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      }
      
      .floating {
        animation: floating 3s ease-in-out infinite;
      }
      
      @keyframes floating {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      .fade-in {
        animation: fadeIn 0.6s ease-in-out;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .pulse-glow {
        animation: pulseGlow 2s ease-in-out infinite;
      }
      
      @keyframes pulseGlow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(74, 70, 201, 0.4);
        }
        50% {
          box-shadow: 0 0 40px rgba(74, 70, 201, 0.8);
        }
      }
    `}</style>
  );
}
