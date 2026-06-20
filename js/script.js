document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (Scroll Reveal)
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85; // Dispara quando o elemento está a 85% da tela

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    };

    // Executa uma vez ao carregar para capturar elementos já visíveis no topo
    checkScroll();
    
    // Executa o evento durante o scroll
    window.addEventListener('scroll', checkScroll);


    // 2. INTERATIVIDADE DO FAQ (Sistema de Acordeão com Animação Suave)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');

            // Se o item clicado já está ativo, fecha ele
            if (item.classList.contains('active')) {
                answer.style.maxHeight = null;
                item.classList.remove('active');
            } else {
                // Opcional: Fecha outros itens que estejam abertos no momento
                document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                    activeItem.querySelector('.faq-answer').style.maxHeight = null;
                    activeItem.classList.remove('active');
                });

                // Abre o item atual calculando o tamanho real do conteúdo em pixels
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});