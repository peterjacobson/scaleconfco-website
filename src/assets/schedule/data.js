export default {
  "dayOne": [
    {
      hour: "8:45 AM",
      title: "Registration",
      description: "Come pick up your badge and goodie bag, we have some surprises in store for you."
    },
    {
      hour: "9:30 AM",
      rooms: {
        'mongrelion': {
          title: "Manejar infraestructura en Google Cloud con Terraform",
          description: "Este taller está dirigido para todos aquellos que han oído hablar sobre Terraform pero no han tenido aún la oportunidad de experimentar con la herramienta. En este espacio de una hora y media hablaremos sobre qué es Terraform, para qué casos aplica mejor, casos de uso comunes y pondremos en práctica la teoría básica de Terraform para crear múltiples ambientes en Google Cloud. Es necesario tener experiencia en Unix y entendimiento básico de tecnologías PaaS como AWS, Digital Ocean, Linode y/o Google Cloud."
        }
      }
    },
    {
      hour: "11:15 AM",
      title: "Coffee/Snack Break"
    },
    {
      hour: "11:35 AM",
      rooms: {
        'camiloahm': {
          title: "Deploying microservices to the cloud",
          description: "In this workshop, you will deploy a functional “Cloud native application” based on microservices, using, Docker containers, Azure, AWS, Google App Engine, Kubernetes and DCOS. Containers are easy for someone who spends significant amount of time immersed in operations work. But for most of the people, getting start with this stuff turned out to be hard. Participants will learn about a number of concepts and tools in this workshop to build and deploy containers to the cloud."
        },
        'cgarciae88': {
          title: "Deep Learning Escalable con TensorFlow",
          description: "El Deep Learning es uno de los temas más emocionantes en el mundo de la tecnología hoy en dia ya que le está dando a las máquinas la capacidad de realizar tareas cognitivas avanzadas. Google es una de las compañías que más ha reconocido esto y por ello ha invertido millones para crear TensorFlow, una librería de computación distribuidas capaz de correr tareas complejas de Deep Learning."
        }
      }
    },
    {
      hour: "1:05 PM",
      title: "Lunch"
    },
    {
      hour: "2:30 PM",
      rooms: {
        'caelestisca': {
          title: "Cloud Native: from `git push` to merge to deploy",
        },
        'serargz': {
          title: "Create your first decentralized application with Ethereum",
          description: "We’re going to create a private Ethereum network and build a distributed application (dapp) on top of it. The main goal is to understand what dapps are, how they work on Ethereum and how to use them. Finally we'll publish a fully functional dapp in the Ethereum production network!"
        }
      }
    }
  ],
  "dayTwo": [
    {
      hour: "8:30 AM",
      title: "Registration"
    },
    {
      hour: "9:15 AM",
      title: "Opening words"
    },
    {
      hour: "9:35 AM",
      title: "Building Bridges with Effective Devops",
      speaker: "beerops",
      description: "Devops originally started as a way of enabling both developers and operations engineers to work better together, but over the years since its inception it's become much more than that. The principles of devops can be beneficial to everyone involved in creating software solutions, not just two teams. This talk will discuss practical ideas for how the four pillars of effective devops can be used throughout an organization, and the benefits of spreading operational thinking further than just the ops team."
    },
    {
      hour: "10:10 AM",
      title: "Web scale envy",
      speaker: "ykiriki",
      description: "Many teams run into trouble because they have chosen complex tools/frameworks/architectures because they 'might need to scale'. Companies such as Twitter and Netflix need to be able to support extreme loads and so need these architectures. Does your product really need them?"
    },
    {
      hour: "10:45 AM",
      title: "Data-driven Postmortems",
      speaker: "gitbisect",
      description: "The DevOps movement has changed the way we build applications and infrastructure. It's also allowed us to scale larger than ever before. But along with larger scale comes increased complexity and more risk of failure. It's impossible to avoid failure, but the key to operating successfully at scale comes from how quickly you can detect failure, respond to it, resolve it and ultimately learn from it."
    },
    {
      hour: "11:20 AM",
      title: "Break"
    },
    {
      hour: "11:40 AM",
      title: "Distributed systems in practice, in theory",
      speaker: "aysylu22",
      description: "Modern systems in production rely on decades of computer science research. Over time, new architectural patterns emerge that enable more resilient and robust systems. In this talk, we'll discuss some of these patterns from systems I've worked on at Google and the related work that provide insights into the motivations behind them."
    },
    {
      hour: "12:15 PM",
      title: "Introduccion a los Schedulers",
      speaker: "mongrelion",
      description: "La coordinación manual de recursos computacionales en nuestros datacenters es una actividad bastante compleja. No solo requiere tener un mapa mental del estado actual del sistema, también requiere la coordinación entre distintos equipos para evitar colisiones a la hora de asegurar cierto pedazo de la infraestructura."
    },
    {
      hour: "12:50 PM",
      title: "Conference photo"
    },
    {
      hour: "1:10 PM",
      title: "Lunch"
    },
    {
      hour: "2:25 PM",
      title: "Mastery at Scale",
      speaker: "caelestisca",
      description: "How can we become masters within this rapidly-changing and ever-moving industry? This talk addresses expertness and proficiency at scale by looking at the universal truths of mastery we've seen throughout history. (Notes: The talk's structure will include fundamental truths of Mastery from the micro to the meta, and will flow from 1)mastery of Self, to 2)mastery within our companies and organizations, to finally 3) mastery in industry as Software and Operations Engineers. )"
    },
    {
      hour: "3:00 PM",
      title: "Distributed computing with Ethereum and IPFS",
      speaker: "serargz",
      description: "Internet has evolved in different and sometimes unexpected ways since its inception. Also, we have seen changes in the infrastructure that supports the web and how we use it, from static data centers, to cloud computing and decentralized systems. Distributed computing, on the other hand, is often associated with academy or research projects, with low potential to be used on production. However, the raise of distributed systems like BitTorrent, Git and Bitcoin is opening a new path for *real* distributed computing for everyone. "
    },
    {
      hour: "3:35 PM",
      title: "Break"
    },
    {
      hour: "3:55 PM",
      title: "Configuration Management for Legacy Services at Scale",
      speaker: "sllylhmn",
      description: "In the real world it is a luxury to be able start configuration management of services from scratch. Much more difficult, and unfortunately much more common, is the need to turn existing production environments from 'pets' to 'cattle'. Because 'pets' are by definition harder to predict and cannot be easily duplicated, changing them into cattle can be quite challenging and a resource hog."
    },
    {
      hour: "4:30 PM",
      title: "What is DevOps",
      speaker: "armon",
      description: "Most startups are in a race, either against competitors or burn rates to deliver products. This demands an increased focus on agility of delivery, which is a perfect fit for DevOps. In this talk, we discuss what DevOps is, and how it affects the people, processes, and tools used to deliver an app. Specifically, we discuss DevOps as a process for delivering software, and optimizing for agility instead of risk. DevOps applies to startups as well as Fortune 500's, and we will cover some pragmatic ways to get started and add value without getting caught up with all the shiny new tools."
    },
    {
      hour: "5:40 PM",
      title: "Closing remarks"
    },
    {
      hour: "5:50 PM",
      title: "End"
    },
    {
      hour: "7:00 PM",
      title: "Closing event"
    }
  ]
}