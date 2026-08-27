/**
 * Source unique de vérité pour tout le contenu du site.
 * Pour mettre à jour le portfolio, on modifie CE fichier — jamais le markup.
 */

export interface LigneStack {
  categorie: string;
  outils: string[];
  /** Outils à mettre en avant : ils prennent la couleur d'accent. */
  cles?: string[];
  /** Niveau sur 5, rendu en pips. */
  niveau: number;
}

export interface Commit {
  /** Hash décoratif — sept caractères, comme un vrai git log court. */
  hash: string;
  badge: 'active' | 'done' | 'perso';
  badgeLabel: string;
  message: string;
  date: string;
  organisation: string;
  points: string[];
  /** Une seule entrée dépliée au chargement : la mission en cours. */
  ouvertParDefaut?: boolean;
}

export interface EtapeFormation {
  annee: string;
  type: string;
  intitule: string;
  ecole: string;
  badge?: { texte: string; variante: 'verified' | 'cert' };
}

export interface ContactRow {
  icone: string;
  label: string;
  valeur: string;
  href?: string;
  externe?: boolean;
}

export const identite = {
  prenom: 'Clément',
  nom: 'Métois',
  alias: 'niluxi',
  metier: 'Ingénieur DevOps',
  employeur: 'Airbus Defence & Space',
  base: 'Toulouse, FR',
  statut: 'Disponible',
  email: 'clem.met@hotmail.fr',
  telephone: '06 51 15 44 60',
  telephoneHref: '0651154460',
  linkedin: 'https://linkedin.com/in/clement-metois',
  linkedinLabel: 'clement-metois',
  github: 'https://github.com/niluxi',
  githubLabel: 'github.com/niluxi',
  delaiReponse: '< 48h',
};

export const seo = {
  titre: `${identite.prenom} ${identite.nom} — ${identite.metier}`,
  description:
    "Ingénieur DevOps à Toulouse, spécialisé en sécurisation d'infrastructures, DevSecOps et infrastructure as code. Terraform, Ansible, Kubernetes, Fortinet.",
  /** Image Open Graph à déposer dans public/ (1200×630). */
  ogImage: '/og.png',
};

export const hero = {
  eyebrow: 'DevOps · DevSecOps · IaC',
  titreLigne1: 'Ingénieur',
  titreLigne2: 'DevOps',
  certifications: [
    'Terraform Associate (HashiCorp)',
    'CyberOps Associate (Cisco)',
    'Master Cyber Security',
  ],
};

export const stack: LigneStack[] = [
  {
    categorie: 'Infra as Code',
    outils: ['Terraform', 'Ansible', 'Kubernetes', 'Docker', 'Helm'],
    cles: ['Terraform', 'Ansible'],
    niveau: 5,
  },
  {
    categorie: 'Sécurité réseau',
    outils: ['Fortinet', 'Sophos', 'SIEM', 'Wireshark', 'VLAN'],
    cles: ['Fortinet'],
    niveau: 4,
  },
  {
    categorie: 'Cloud & Virt.',
    outils: ['VMware vSphere', 'vCenter', 'Cloud Computing', 'Artifactory'],
    niveau: 4,
  },
  {
    categorie: 'Observabilité',
    outils: ['Grafana', 'InfluxDB', 'TimescaleDB', 'Clickhouse'],
    niveau: 3,
  },
  {
    categorie: 'Dev & CI/CD',
    outils: ['Python', 'CI/CD', 'Scrum', 'Symfony', 'Selenium'],
    cles: ['Python'],
    niveau: 4,
  },
  {
    categorie: 'IoT & Industriel',
    outils: ['Modbus', 'MQTT', 'OPC UA', 'Embarqué'],
    niveau: 3,
  },
];

export const commits: Commit[] = [
  {
    hash: 'a3f9c2e',
    badge: 'active',
    badgeLabel: 'Active',
    message: 'Ingénieur DevOps — Airbus D&S',
    date: 'nov. 2025 → now',
    organisation: 'via Les Filles et les Garçons de la Tech — Toulouse',
    ouvertParDefaut: true,
    points: [
      "Déploiement et gestion d'infrastructures critiques — environnement défense & aérospatial",
      'Automatisation et sécurisation des pipelines CI/CD',
      'DevSecOps appliqué à grande échelle',
    ],
  },
  {
    hash: '7d1e840',
    badge: 'done',
    badgeLabel: 'Terminée',
    message: 'Admin réseaux & cybersec — Selection-EnR',
    date: 'oct. 2024 → juin 2025',
    organisation: 'Selection-EnR — Tarbes',
    points: [
      'VLAN, segmentation flux industriels, durcissement Fortinet & Sophos',
      'Déploiement Kubernetes embarqué — intégration DevSecOps',
      'Automatisation Terraform & Ansible, configurations sécurisées',
      "Supervision avancée — SIEM, Wireshark, détection d'anomalies",
      'Scripts Python pour métriques industrielles → InfluxDB, TimescaleDB, Clickhouse',
    ],
  },
  {
    hash: '2b8fa31',
    badge: 'done',
    badgeLabel: 'Terminée',
    message: "Technicien bureau d'études — Selection-EnR",
    date: 'nov. 2021 → sept. 2024',
    organisation: 'Selection-EnR — Tarbes',
    points: [
      'Monitoring photovoltaïque — Grafana, InfluxDB, TimescaleDB',
      'Développement Python pour IoT et automates embarqués',
      'Segmentation VLAN, Modbus/MQTT/OPC UA, Fortinet',
      'Cluster Kubernetes, VMware vSphere/vCenter',
    ],
  },
  {
    hash: 'c04d719',
    badge: 'done',
    badgeLabel: 'Terminée',
    message: 'Stagiaire dev web — Médialliance',
    date: 'mai → juin 2020',
    organisation: 'Médialliance — Toulouse',
    points: ['Symfony, tests automatisés Codeception & Selenium/WebDriver'],
  },
  {
    hash: 'f00d4b3',
    badge: 'perso',
    badgeLabel: 'perso',
    message: 'feat(life): maintain gainz, consume manga, speedrun existence',
    date: 'ongoing',
    organisation: 'branch: personal/off-hours',
    points: [
      'Musculation — discipline, progression, pas de jours de repos non planifiés',
      'Manga — lecture active, bon ratio pages/heure',
      'Jeux vidéo — finisher compulsif, 100% completion quand le temps le permet',
    ],
  },
];

export const formations: EtapeFormation[] = [
  {
    annee: '2025',
    type: 'Certification',
    intitule: 'Terraform Associate (004)',
    ecole: 'HashiCorp',
    badge: { texte: '✔ Verified', variante: 'verified' },
  },
  {
    annee: '2022–2024',
    type: 'Master',
    intitule: 'Cyber Security, Cloud, Systems & Networks',
    ecole: 'ESTIAM — Tarbes',
  },
  {
    annee: '2021–2022',
    type: 'Licence professionnelle',
    intitule: 'Cyber Security, Cloud, Systems & Networks',
    ecole: 'ESTIAM — Tarbes',
    badge: { texte: 'CyberOps Associate — Cisco', variante: 'cert' },
  },
  {
    annee: '2019–2021',
    type: 'BTS',
    intitule: 'Systèmes Numériques — Informatique et Réseaux',
    ecole: 'Lycée Saint Pierre, Tarbes',
  },
  {
    annee: '2016–2019',
    type: 'Baccalauréat',
    intitule: 'Systèmes Numériques — Réseaux & Systèmes Communicants',
    ecole: 'Lycée Saint Pierre, Tarbes',
  },
];

export const contactRows: ContactRow[] = [
  { icone: '✉', label: 'Email', valeur: identite.email, href: `mailto:${identite.email}` },
  { icone: '✆', label: 'Téléphone', valeur: identite.telephone, href: `tel:${identite.telephoneHref}` },
  { icone: '◈', label: 'Localisation', valeur: 'Toulouse & périphérie' },
  { icone: 'in', label: 'LinkedIn', valeur: identite.linkedinLabel, href: identite.linkedin, externe: true },
  { icone: '▲', label: 'GitHub', valeur: identite.githubLabel, href: identite.github, externe: true },
];

/** Easter egg : le bouton du footer affiche le hex de "clem". */
export const flag = {
  bouton: '0x636c656d',
  preambule: '// target compromised //',
  code: 'flag{n1lux1_w4s_h3r3_all_4l0ng}',
  indice: 'Le footer cachait 0x636c656d — hex de « clem ».',
  signature: 'Ce site a été conçu pour toi. Si tu veux le vrai, parlons-en.',
};

export const navItems = [
  { href: '#stack', label: 'Stack' },
  { href: '#missions', label: 'Missions' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];
