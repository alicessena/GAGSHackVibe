<div align="center">
<img src="https://i.imgur.com/abKuZ6u.png" alt="Logo GAG" width="300" />
</div>

<div align="center">

# GAG - Gestão de Acolhimento e Governança de Saúde
**Projeto Vencedor do Hackathon HackaVibe Queer 2026**

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=0B1220" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="TanStack Start" src="https://img.shields.io/badge/TanStack%20Start-1.168-FF4154?style=for-the-badge&logo=reactrouter&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Radix UI" src="https://img.shields.io/badge/Radix%20UI-Components-161618?style=for-the-badge&logo=radixui&logoColor=white" />
  <img alt="Nitro" src="https://img.shields.io/badge/Nitro-SSR-00DC82?style=for-the-badge&logo=nuxt&logoColor=white" />
</p>

</div>

O **GAG** nasce para reduzir uma barreira crítica de acesso à saúde: muitas pessoas LGBTQIAPN+ deixam de procurar atendimento não por ausência de serviços, mas por medo de discriminação, despreparo profissional ou exposição indevida de dados sensíveis. A plataforma conecta pacientes a profissionais, clínicas, serviços e conteúdos preparados para um atendimento **respeitoso, humanizado, seguro e afirmativo**, facilitando a jornada desde a descoberta até o agendamento.


---

##  <img src="https://i.imgur.com/KND6Rsq.png" alt="Logo GAG" width="20" /> O Protótipo (MVP) 
[![Teste Agora](https://i.imgur.com/NjMHH9O.png)](https://gag-hackavibe.vercel.app/)

O protótipo atual valida a experiência central da plataforma: **descobrir profissionais e serviços de saúde preparados para atender a comunidade LGBTQIAPN+**, explorar informações confiáveis e simular uma jornada de agendamento simples.

### Funcionalidades implementadas 

- **Landing page institucional e funcional** com proposta de valor, busca, especialidades, ações rápidas e profissionais recomendados.
- **Busca de profissionais** com filtros por modalidade, pagamento, especialidade e experiência inclusiva.
- **Cards de profissionais** com especialidade, pronomes, avaliações, modalidades, tags de inclusão e chamada para agendamento.
- **Página de perfil profissional** com detalhes, formação, idiomas, avaliações e opção de agendar.
- **Fluxo de agendamento simulado** em etapas: data/horário, resumo e confirmação.
- **Mapa de serviços mockado** com clínicas, hospitais, farmácias e laboratórios inclusivos.
- **Biblioteca de saúde LGBTQIAPN+** com categorias, artigos simulados e temas como PrEP, PEP, hormonioterapia, ISTs, saúde mental e direitos.
- **Dashboard do usuário** com visão simulada de consultas, atalhos e próximos atendimentos.
- **Identidade visual GAG** com linguagem afirmativa, elementos de orgulho LGBTQIAPN+ e comunicação focada em segurança e acolhimento.

### Fora do escopo nesta fase

- **Autenticação real**, gestão de sessão e autorização por perfis.
- **Banco de dados persistente** para pacientes, profissionais, clínicas, agendamentos e avaliações.
- **Integrações reais** com agendas médicas, prontuários, laboratórios, pagamentos, planos ou SUS.
- **Backoffice administrativo** para curadoria, aprovação e governança de profissionais.
- **Mecanismos reais de compliance**, auditoria, consentimento LGPD e criptografia de dados sensíveis.
- **Testes automatizados abrangentes**, observabilidade, monitoramento e pipeline de deploy.
- **Motor de recomendação ou ranking real** baseado em qualidade, disponibilidade, localização e aderência ao perfil do paciente.

---

## 🏗️ Arquitetura e Desenho Técnico 

O MVP utiliza uma arquitetura **monolítica frontend-first com SSR**, baseada em **TanStack Start**, **React** e **Vite**. Essa escolha favorece **velocidade de entrega**, **baixo custo operacional**, **boa experiência de navegação** e uma base simples para evolução gradual.

Nesta fase, os dados são consumidos a partir de mocks locais em `src/lib/mock-data.ts`. Isso permite validar UX, narrativa de produto, rotas, componentes e jornada do usuário antes de investir em persistência, autenticação e integrações externas.

### Modelo arquitetural atual

```text
Cliente Web
  -> TanStack Router
  -> Rotas React em src/routes
  -> Componentes reutilizáveis em src/components
  -> Dados mockados em src/lib/mock-data.ts
  -> Renderização via TanStack Start/Vite/Nitro
```

### Fluxo da Informação

1. **Usuário acessa a aplicação** pelo navegador.
2. **TanStack Start** resolve a rota solicitada usando roteamento baseado em arquivos.
3. A rota renderiza a página correspondente, como `/`, `/buscar`, `/mapa`, `/biblioteca`, `/agendamento` ou `/profissional/:id`.
4. Os componentes consultam dados mockados locais para exibir profissionais, artigos, serviços e estados de agenda.
5. Interações como filtros, busca e seleção de horário acontecem no cliente, com estado local em React.
6. No modelo futuro, essas interações deverão trafegar por uma API backend, persistindo e lendo dados em banco transacional.

### Evolução arquitetural prevista

```text
Cliente Web
  -> BFF/API Gateway
  -> Serviços de Domínio
      -> Usuários e Autenticação
      -> Profissionais e Clínicas
      -> Agendamentos
      -> Conteúdo e Biblioteca
      -> Governança e Auditoria
  -> Banco de Dados
  -> Integrações Externas
      -> Agenda
      -> Pagamentos
      -> Notificações
      -> Serviços de Saúde
```

### Stack Tecnológica

| Tecnologia | Camada | Justificativa do Uso |
| --- | --- | --- |
| **React 19** | Frontend | Base para construção de interfaces declarativas, componentizadas e responsivas. |
| **TanStack Start** | Frontend/Backend | Framework full-stack/SSR para rotas, shell da aplicação e evolução futura para server functions. |
| **TanStack Router** | Frontend | Roteamento tipado baseado em arquivos, facilitando manutenção e navegação estruturada. |
| **TanStack React Query** | Frontend/Data | Preparado para cache, sincronização e orquestração de dados quando a API real for adicionada. |
| **TypeScript** | Base | Reduz erros em tempo de desenvolvimento e melhora legibilidade, contratos e refatoração. |
| **Vite** | Base | Build tool rápido para desenvolvimento local, bundling e otimização da aplicação. |
| **Tailwind CSS v4** | Frontend | Sistema de estilos utilitário para construir UI consistente, responsiva e fácil de evoluir. |
| **Radix UI** | Frontend | Primitivas acessíveis para componentes de interface robustos e inclusivos. |
| **Lucide React** | Frontend | Biblioteca de ícones leve e consistente para navegação, ações e sinalização visual. |
| **Nitro** | Backend/Deploy | Camada de empacotamento server-side usada pelo build, com preset atual voltado a Cloudflare. |
| **ESLint + Prettier** | Base | Padronização de qualidade, estilo e consistência do código. |
| **Mock data local** | Base | Permite validar rapidamente jornada e produto sem dependência de infraestrutura externa. |

---

## ⚡ Como Executar o Protótipo 

### Pré-requisitos

- **Node.js 22+** recomendado.
- **npm** instalado.
- Ambiente com suporte a dependências nativas do Tailwind/Vite.

### Instalação

```bash
npm install
```

### Variáveis de ambiente

O protótipo atual **não exige variáveis de ambiente obrigatórias**. Quando integrações reais forem adicionadas, recomenda-se criar um arquivo `.env.local` com chaves de API, URLs de backend e parâmetros de autenticação.

Exemplo futuro:

```bash
VITE_API_URL=http://localhost:3000
VITE_APP_ENV=local
```

### Rodar em desenvolvimento

```bash
npm run dev
```

Por padrão, o Vite abrirá uma URL local. Caso a porta padrão esteja ocupada, ele tentará a próxima porta disponível.

### Build de produção

```bash
npm run build
```

### Pré-visualizar build

```bash
npm run preview
```

### Qualidade de código

```bash
npm run lint
npm run format
```

---

## Visão de Produto 

O GAG não é apenas uma ferramenta de agenda. É uma camada de confiança entre pessoas LGBTQIAPN+ e o sistema de saúde. A evolução do produto deve preservar três princípios:

- **Segurança primeiro:** privacidade, consentimento e proteção de dados sensíveis não são opcionais.
- **Cuidado afirmativo:** a experiência precisa refletir respeito à identidade, ao corpo, à história e aos pronomes de cada pessoa.
- **Governança de qualidade:** profissionais, clínicas e conteúdos devem passar por curadoria clara, rastreável e confiável.

## 🌈 Hackathon HackaVibe Queer 2026

O [Centro de Informática (CIn)](https://portal.cin.ufpe.br/) da UFPE promoveu uma nova edição do Vibe Hack, o hackathon de vibe coding da instituição. Esta edição, intitulada [“Vibe Hack Queer”](https://vibehack.cin.ufpe.br/queer/), comemora o Mês do Orgulho e tem como público-alvo pessoas LGBTQIAPN+ e aliadas, tanto da UFPE quanto de outras instituições. O evento aconteceu em junho, nos dias 20 (bootcamp) e 27 (hackathon). 

O conceito central do hackathon é o vibe coding, uma abordagem emergente de desenvolvimento com apoio de inteligência artificial (IA), na qual a pessoa descreve suas ideias em linguagem natural e utiliza a IA como parceira na construção de soluções. O termo  reflete uma mudança no papel de quem desenvolve software, com menos foco na escrita manual de código e mais ênfase na criatividade, experimentação e colaboração com sistemas inteligentes.

Prof. Kiev Gama, criador e coordenador do Vibe Hack, é pesquisador em diversidade e inclusão na Engenharia de Software e explica a importância da iniciativa: “Um hackathon focado na comunidade LGBTQIAPN+ serve como um espaço seguro para a integração e o desenvolvimento de pessoas historicamente sub-representadas na área de tecnologia. Isso fomenta o sentimento de pertencimento, a diversidade e, consequentemente, a inovação. Além disso, posiciona o CIn-UFPE como liderança no contexto das iniciativas sociais inclusivas”. Esta edição é uma sequência do Vibe Hack GRRRL (2026), realizado em abril com foco no público feminino.

A ideia surgiu com a realização da primeira edição do Vibe Hack (2025). Nela, uma das equipes vencedoras (composta apenas de pessoas LGBTQIAPN+) se destacou justamente por propor uma solução para a comunidade. “Queremos consagrar o Vibe Hack como uma Extensão conectada à pauta de diversidade e inclusão”, explica Rafael Samico, estudante de Sistemas de Informação, campeão da primeira edição e responsável pela organização do Vibe Hack Queer.

### Organização do Hackathon 
<img width="120" src="https://i.imgur.com/6lOsX3N.png" alt="Logo do Centro de Informática da UFPE" />
<img width="80" src="https://i.imgur.com/SOYyhH5.png" alt="Brasão da UFPE" />
<img width="120" src="https://i.imgur.com/hsK7C3M.png" alt="Logo da Ines.ia" />


### Patrocinadores e apoiadores 
<img width="120" src="https://i.imgur.com/v2WswIf.png" alt="Logo da LOOMI" />
<br>
<img width="120" src="https://i.imgur.com/8QRoHvv.png" alt="Logo da Cesar" />
<img width="120" src="https://i.imgur.com/Qm3DI8m.png" alt="Logo da Cesar SCHOOL" />




## Desenvolvido por

| <img width="120" src="https://github.com/alicessena.png"> |
|:----------------------------------------------------------:|
| **Alice Sena** |
| **Desenvolvedora Full Stack** |
| 🔗 [LinkedIn](https://www.linkedin.com/in/alicessenapereira/) • [GitHub](https://github.com/alicessena) |
