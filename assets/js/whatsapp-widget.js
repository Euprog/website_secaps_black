
// ===================================
// WhatsApp Widget Functionality
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('WhatsApp Widget: Initializing...');
    initWhatsAppWidget();
});

function initWhatsAppWidget() {
    const floatBtn = document.getElementById('whatsappFloatBtn');
    const chatWindow = document.getElementById('whatsappChatWindow');
    const closeBtn = document.getElementById('whatsappClose');
    const chatBody = chatWindow.querySelector('.whatsapp-body');

    if (!floatBtn || !chatWindow || !closeBtn) return;

    let isFirstOpen = true;

    // Toggle chat window with realistic chat simulation
    floatBtn.addEventListener('click', () => {
        const wasActive = chatWindow.classList.contains('active');
        chatWindow.classList.toggle('active');
        
        // Simulate realistic chat on first open
        if (!wasActive && isFirstOpen) {
            isFirstOpen = false;
            simulateRealisticChat(chatBody);
        }
    });

    // Close chat window
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        chatWindow.classList.remove('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (chatWindow.classList.contains('active') && 
            !chatWindow.contains(e.target) && 
            !floatBtn.contains(e.target)) {
            chatWindow.classList.remove('active');
        }
    });
}

function simulateRealisticChat(chatBody) {
    // Array de mensagens dinâmicas - seleciona aleatoriamente
    const messageVariations = [
        {
            msg1: "Oi! 😊 Imagina acordar todos os dias se sentindo mais leve, confiante e no seu melhor... eu posso te ajudar com isso! 💚",
            msg2: "Tô online agora! Me chama que te conto como o SecapsBlack já transformou a vida de tantas mulheres ✨"
        },
        {
            msg1: "Oii! 💫 Sabe aquela sensação de estar no controle do seu corpo e da sua saúde? É exatamente isso que quero te proporcionar!",
            msg2: "Bora trocar uma ideia? Tenho histórias incríveis pra te contar sobre resultados reais 🌟"
        },
        {
            msg1: "Oi querida! ❤️ E se eu te dissesse que você está a apenas uma decisão de transformar completamente seu bem-estar?",
            msg2: "Estou aqui pra te ajudar nessa jornada! Vem conversar comigo, vai ser um prazer te conhecer 😊"
        },
        {
            msg1: "Hey! 🌸 Cansada de promessas vazias? Aqui a gente foca em resultados de verdade, com ciência e muito cuidado!",
            msg2: "Chama aqui que vou te mostrar como funciona! Tem muita gente já vivendo essa transformação 💪✨"
        },
        {
            msg1: "Oi linda! 🌺 Você merece se sentir bem consigo mesma TODOS os dias. E eu tô aqui justamente pra isso!",
            msg2: "Vamos bater um papo? Posso te explicar tudinho sobre como o SecapsBlack pode mudar seu dia a dia 🎯"
        }
    ];

    // Seleciona um conjunto aleatório de mensagens
    const randomSet = messageVariations[Math.floor(Math.random() * messageVariations.length)];
    
    // Get all messages and hide them initially
    const messages = chatBody.querySelectorAll('.whatsapp-message');
    const statusElement = chatBody.querySelector('.whatsapp-contact-status');
    
    // Atualiza o texto das mensagens com o conjunto selecionado
    if (messages[0]) messages[0].textContent = randomSet.msg1;
    if (messages[1]) messages[1].textContent = randomSet.msg2;
    
    messages.forEach(msg => msg.classList.add('hidden'));

    // Create typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(typingIndicator);

    // Sequence: online -> typing -> message 1 -> typing -> message 2
    const sequence = [
        { 
            delay: 300, 
            action: () => {
                if (statusElement) statusElement.textContent = 'online';
            }
        },
        { 
            delay: 500, 
            action: () => {
                if (statusElement) statusElement.textContent = 'digitando...';
                typingIndicator.classList.add('active');
            }
        },
        { 
            delay: 1200, 
            action: () => {
                typingIndicator.classList.remove('active');
                if (messages[0]) messages[0].classList.remove('hidden');
            }
        },
        { 
            delay: 1200, 
            action: () => {
                if (statusElement) statusElement.textContent = 'digitando...';
                typingIndicator.classList.add('active');
            }
        },
        { 
            delay: 1500, 
            action: () => {
                typingIndicator.classList.remove('active');
                if (messages[1]) messages[1].classList.remove('hidden');
                if (statusElement) statusElement.textContent = 'online';
            }
        }
    ];

    // Execute sequence
    let cumulativeDelay = 0;
    sequence.forEach(step => {
        cumulativeDelay += step.delay;
        setTimeout(step.action, cumulativeDelay);
    });
}
