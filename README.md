# SecapsBlack Chá - Landing Page

<div align="center">

![SecapsBlack Logo](./assets/images/produtos/SECAPS%20CHÁ%20_%20LOGO.png)

### Landing Page Profissional para Suplemento Natural de Emagrecimento

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Styled with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📖 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Design System](#-design-system)
- [Instalação e Execução](#-instalação-e-execução)
- [Funcionalidades](#-funcionalidades)
- [Estrutura de Páginas](#-estrutura-de-páginas)
- [Integrações](#-integrações)
- [Performance e SEO](#-performance-e-seo)
- [Informações Comerciais](#-informações-comerciais)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Landing page premium desenvolvida para **SecapsBlack Chá**, um suplemento natural em pó formulado para emagrecimento saudável, detox e bem-estar. O projeto foi concebido com foco em **design moderno**, **alta taxa de conversão** e **experiência do usuário otimizada**.

### Diferenciais

- Interface premium com design system consistente
- Experiência fluida em todos os dispositivos
- Carrosséis interativos com touch support
- Integração direta com sistema de pagamento
- SEO otimizado para mecanismos de busca
- Performance otimizada para carregamento rápido

---

## ✨ Características

### Design e UX

- 🎨 **Design Premium**: Gradientes cyan, animações suaves e efeitos glassmorphism
- 📱 **Totalmente Responsivo**: Adaptação fluida para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Carregamento rápido e transições suaves
- ♿ **Acessibilidade**: Estrutura semântica e navegação por teclado

### Funcionalidades Técnicas

- 🔄 **Carrosséis Interativos**: Suporte a touch, swipe e navegação por indicadores
- 🎭 **Animações Avançadas**: Scroll animations, hover effects e transições fluidas
- 📧 **Widget WhatsApp**: Chat flutuante com mensagens personalizadas
- 🔍 **SEO Completo**: Meta tags, Open Graph e estrutura otimizada

---

## 🛠️ Stack Tecnológico

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Design system com variáveis CSS e animações |
| **JavaScript (Vanilla)** | Interações dinâmicas e carrosséis |
| **Google Fonts** | Tipografia premium (Playfair Display + Inter) |
| **Git** | Controle de versão |

### Dependências Externas

- Nenhuma! O projeto é 100% puro (Vanilla JS/CSS)
- Total controle e zero overhead de bibliotecas

---

## 📂 Estrutura do Projeto

```
secapsblack_site/
├── index.html                 # Página principal (landing page)
├── ingredientes.html          # Detalhes dos ingredientes
├── faq.html                   # Perguntas frequentes
├── informacoes.html           # Contraindicações e avisos legais
├── contato.html               # Formulário de contato
├── assets/
│   ├── css/
│   │   ├── style.css          # Estilos globais e design system
│   │   └── whatsapp-widget.css # Estilos do widget WhatsApp
│   ├── js/
│   │   ├── script.js          # Funcionalidades principais
│   │   └── whatsapp-widget.js # Widget de chat
│   └── images/
│       ├── produtos/          # Imagens dos produtos e logo
│       ├── resultados/        # Fotos antes/depois
│       ├── ebooks/            # Capas dos e-books bônus
│       ├── especialista/      # Foto da representante
│       └── icons/             # Ícones SVG
├── .git/                      # Controle de versão
└── README.md                  # Documentação (você está aqui)
```

---

## 🎨 Design System

### Paleta de Cores

```css
--color-cyan-primary: #00F2E6;    /* Cor principal da marca */
--color-cyan-light: #33F5EB;      /* Variação clara */
--color-cyan-dark: #00C2B8;       /* Variação escura */
--color-black-deep: #000000;      /* Fundo principal */
--color-black-rich: #0B0B0B;      /* Fundo alternativo */
--color-gold-accent: #C6A664;     /* Destaques premium */
--color-white-pure: #FFFFFF;      /* Texto destacado */
--color-gray-light: #E5E7EB;      /* Texto secundário */
```

### Tipografia

- **Display/Headings**: `Playfair Display` (serif) - Elegante e premium
- **Body/UI**: `Inter` (sans-serif) - Moderna e legível

### Gradientes

```css
--gradient-cyan: linear-gradient(135deg, #00F2E6 0%, #00C2B8 100%);
--gradient-dark: linear-gradient(180deg, #000000 0%, #0B0B0B 100%);
```

---

## 🚀 Instalação e Execução

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (opcional, para melhor experiência)

### Execução Local

**Opção 1: Abertura Direta**
```bash
# Clone o repositório
git clone https://github.com/Euprog/website_secaps_black.git

# Navegue até a pasta
cd website_secaps_black

# Abra index.html no navegador
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Opção 2: Servidor Local (Recomendado)**
```bash
# Python 3
python -m http.server 8000

# Node.js (com npx http-server)
npx http-server -p 8000

# Acesse: http://localhost:8000
```

### Deploy

O projeto é **100% estático** e pode ser hospedado em:

- **GitHub Pages** (gratuito)
- **Netlify** (gratuito com CI/CD)
- **Vercel** (gratuito com preview automático)
- Qualquer servidor web tradicional (Apache, Nginx)

---

## 🌟 Funcionalidades

### Carrosséis Interativos

#### Carrossel de Resultados
- ✅ Navegação por setas (Previous/Next)
- ✅ Indicadores clicáveis (dots)
- ✅ Autoplay automático (3s)
- ✅ Suporte a touch/swipe em mobile
- ✅ Loop infinito seamless
- ✅ Pause ao hover

#### Carrossel de E-books (11 e-books bônus)
- ✅ Navegação apenas por indicadores
- ✅ Autoplay automático
- ✅ Suporte a touch/swipe
- ✅ Loop infinito com sincronização perfeita

### Widget WhatsApp Flutuante

- Chat simulado com mensagens personalizadas
- Animação de "digitando..."
- Foto e nome da especialista
- Link direto para WhatsApp oficial
- Responsivo e não intrusivo

### Animações e Interações

- **Scroll Animations**: Fade-in progressivo ao rolar a página
- **Hover Effects**: Cards com elevação e brilho
- **Smooth Scrolling**: Navegação suave entre seções
- **Ticker Infinito**: Banner promocional com scroll contínuo

---

## 📄 Estrutura de Páginas

### `index.html` - Página Principal

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação do produto com CTA principal |
| **Ticker Promocional** | Banner infinito com ofertas limitadas |
| **Especialista** | Apresentação da representante Marina |
| **Benefícios** | 6 principais benefícios do SecapsBlack Chá |
| **E-books** | Carrossel com 11 e-books bônus grátis |
| **Produtos** | Showcase com 4 opções de tratamento |
| **Resultados** | Carrossel com fotos antes/depois |
| **Garantia** | Política de 90 dias de satisfação |
| **Links Úteis** | Acesso rápido a ingredientes, FAQ e contato |
| **Footer** | Informações comerciais e links |

### Páginas Secundárias

- **`ingredientes.html`**: Detalhes dos 6 ingredientes funcionais + modo de preparo
- **`faq.html`**: Perguntas frequentes sobre uso, resultados e entrega
- **`informacoes.html`**: Contraindicações, avisos e informações legais
- **`contato.html`**: Informações de contato e WhatsApp

---

## 🔗 Integrações

### Sistema de Pagamento (Hest)

Integração direta com processador de pagamentos **Hest**:

```javascript
// Links únicos por produto
1 Pote:  https://pay.hest.com.br/c01ed943-230d-4196-b488-06069c073954
3 Potes: https://pay.hest.com.br/5d10b320-4817-44de-a633-0825561d60f8
5 Potes: https://pay.hest.com.br/a87fa0af-3ecf-4610-8d55-7a7746326d52
12 Potes: https://pay.hest.com.br/5b4210b3-165b-4e36-8c14-87ee675e7b54
```

### WhatsApp Business

- **Número oficial**: +55 61 9513-7444
- Widget flutuante integrado
- Links diretos nos CTAs

---

## 📈 Performance e SEO

### Otimizações de Performance

- CSS minificado e modular
- JavaScript vanilla (zero overhead)
- Imagens otimizadas
- Lazy loading de recursos não críticos
- Transições aceleradas por GPU

### SEO

```html
<!-- Meta Tags Essenciais -->
<title>SecapsBlack - Suplemento Premium para Performance</title>
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- Open Graph (Redes Sociais) -->
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

### Acessibilidade

- Estrutura HTML semântica
- Atributos ARIA onde necessário
- Navegação por teclado
- Contraste adequado de cores
- Textos alternativos em imagens

---

## 💼 Informações Comerciais

### Produto

**Nome**: SecapsBlack Chá  
**Categoria**: Suplemento Natural para Emagrecimento  
**Apresentação**: Pó solúvel (sachê)

### Opções de Tratamento

| Plano | Quantidade | Preço à Vista | Parcelamento |
|-------|-----------|---------------|--------------|
| 1 Mês | 1 pote | R$ 188,91 | 12x R$ 22,52 |
| 3 Meses | 3 potes (2+1) | R$ 335,70 | 12x R$ 34,45 |
| 5 Meses | 5 potes (3+2) | R$ 369,20 | 12x R$ 40,92 |
| 12 Meses | 12 potes (8+4) | R$ 851,80 | 12x R$ 87,11 |

### Empresa

**Fabricação e Logística**:  
Capsul Brasil Indústria e Comércio S.A.  
Av. Progresso, 1397 - São Bento, Arcos - MG  
CEP: 35588-000  
CNPJ: 29.822.523/0002-86

**Representante**: Marina  
**WhatsApp**: +55 61 9513-7444  
**Horário**: 09:00 às 18:00 hrs

**Nota**: Produto isento de registro de acordo com RDC 240/2018

---

## 📝 Licença

© 2025 SecapsBlack. Todos os direitos reservados.

Este projeto é propriedade de SecapsBlack e destina-se exclusivamente para fins comerciais autorizados.

---

<div align="center">

**Desenvolvido com ❤️ e ☕ por Euprog**

[🌐 Website](#) • [📧 Contato](mailto:contato@secapsblack.com) • [💬 WhatsApp](https://wa.me/556195137444)

</div>
