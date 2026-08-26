import { useEffect, useState, type ReactNode } from "react";
import {
  AtSign,
  Facebook,
  FlaskConical,
  Headphones,
  Home,
  Info,
  Linkedin,
  Instagram,
  Mail,
  Newspaper,
  PanelLeftClose,
  PanelLeftOpen,
  Play,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Users,
  Video,
} from "lucide-react";

// ── Images ───────────────────────────────────────────────────────────────────
const IMG_HERO = "/home-hero.jpg";
const IMG_EXP_1 = "/home-experience-01.jpg";
const IMG_EXP_2 = "/home-experience-02.jpg";
const IMG_EXP_3 = "/home-experience-03.jpeg";
const IMG_TALK_1 = "/home-critique-01.jpg";
const IMG_TALK_2 = "/home-critique-02.jpg";
const IMG_TALK_3 = "/home-critique-03.png";
const IMG_POD_1 = "/home-podcast-01.jpg";
const IMG_POD_2 = "/home-podcast-02.jpg";
const IMG_POD_3 = "/home-podcast-03.jpg";
const IMG_ABOUT = "/home-apropos.jpeg";
const IMG_LOGO = "/logo.png";
const IMG_PERFORMER_COVER = "/performer-cover.jpeg";
const IMG_PERFORMER_VIDEO = "/performer-video-cover.jpeg";
const IMG_PERFORMER_PERSON = "/performer-person.jpeg";
const CURRENT_YEAR = new Date().getFullYear();
const FEATURED_VIDEO_EMBED =
  "https://www.youtube.com/embed/VrFRINu8QG0?autoplay=1&rel=0";

// ── Nav ───────────────────────────────────────────────────────────────────────
const NAV = [
  { label: "ACCUEIL", icon: Home },
  { label: "EXPÉRIMENTATIONS", icon: FlaskConical },
  { label: "RENCONTRES", icon: Users, sub: ["Conférences", "Débats", "Ateliers"] },
  { label: "MÉDIAS", icon: Video, sub: ["Vidéos", "Photos", "Archives"] },
  { label: "KRITHIKA PODCASTS", icon: Headphones },
  { label: "À PROPOS DE NOUS", icon: Info },
  { label: "ÉQUIPE", icon: Newspaper },
  { label: "CONTACTEZ-NOUS", icon: Mail },
];

const SOCIAL_LINKS = [
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://web.facebook.com/krithika.artprojects",
    hoverClass: "hover:text-[#1877F2]",
  },
  { Icon: Linkedin, label: "LinkedIn", hoverClass: "hover:text-[#0A66C2]" },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/krithikaartprojects/",
    hoverClass: "hover:text-[#E4405F]",
  },
  { Icon: AtSign, label: "Threads", hoverClass: "hover:text-[#000000]" },
  {
    Icon: YoutubeMark,
    label: "YouTube",
    href: "https://www.youtube.com/@artprojectskrithika",
    hoverClass: "hover:text-[#FF0000]",
  },
];

function YoutubeMark({ size = 19 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className="block"
    >
      <rect x="2" y="5.5" width="20" height="13" rx="3.2" fill="currentColor" />
      <path d="M10 9.2v5.6l5-2.8-5-2.8Z" fill="#fff" />
    </svg>
  );
}

const TEAM_MEMBERS = [
  {
    name: "DAFROSE BACHU KAJURU NYENYEZI",
    role: "Chargée de projet et relation publique",
    img: "/team/img-01.jpg",
    bio:
      "Dafrose Bachu, née à Kinshasa le 31 janvier 1998, est détentrice d’un diplôme de graduat (bac+3) depuis 2021 en Animation culturelle et d’un diplôme de licence (bac+5) en Administration et gestion des entreprises culturelles touristiques et loisirs, à l’Institut National de arts (INA) de Kinshasa, depuis 2024. Bachu a également effectué plusieurs stages et formations, notamment au Musée National de la RDC, dans le cadre de la fin de son cycle de graduat en 2021. En 2022, elle a été assistante à la création pour la structure.",
  },
  {
    name: "ECKA KWETU ART",
    role: "Recherche critique et rencontres artistiques",
    img: "/team/img-03.jpg",
    bio:
      "De Bukavu, en 2025 après sa participation à l’atelier de recherche sur la critique (CORPUS), elle assiste à la 11eme édition de la Rencontre internationale d'art contemporain (RIAC) à Brazzaville. Actuellement chargée de projets et des relations publiques au sein de Krithika Art Projects, structure de la pensée critique dans l’art en RD Congo à Kinshasa.",
  },
  {
    name: "JEAN KAMBA",
    role: "Directeur Artistique",
    img: "/team/img-02.jpg",
    bio:
      "Jean Kamba vit et travaille à Kinshasa. Titulaire d’une licence en Lettres et Sciences humaines / Sciences de l’Information et de la Communication de l’Université Pédagogique Nationale de Kinshasa, il est poète, critique d’art et curateur. Kamba dirige KRITHIKA ARTPROJECTS, plateforme de recherche et d’expérimentations, basée à Kinshasa. Depuis plusieurs années, il mène un travail de suivi, de médiation et d’évaluation auprès des artistes, en organisant des ateliers et des expositions. Cette démarche a contribué à l’émergence de plusieurs artistes et théoriciens. Ses articles ont été publiés chez OBSIDIAN : Literature & Arts in the African Diaspora ; 59th Carnegie International ; Afterall Journal ; OnCurating ; Contemporary And ; Revue d’histoire contemporaine de l’Afrique, etc. Kamba a pris part à « 99 QUESTIONS : On the Poetics of Loose Ends » au Humboldt Forum ; STARTS Afropean Intelligence ; Documenta 14 via un programme du Goethe-Institut. Membre de Another Roadmap School Africa Cluster (ARAC), il y a également pris part en 2022. Il a été invité à l’Institut National d’Histoire de l’Art (INHA) à Paris, en 2023, pour l’atelier de recherche « Repenser les récits de l’art depuis l’Afrique : usages situés de la modernité (c. 1920-1980) », etc.",
  },
  {
    name: "AZGARD ITAMBO",
    role: "Chargé de production",
    img: "/team/img-04.jpg",
    bio:
      "Azgard Itambo est un artiste visuel né en 1990 à Kinshasa, ville où il vit et crée. Il est diplômé d'État (baccalauréat), en Pédagogie. Itambo poursuit actuellement ses études universitaires à l’Université Pédagogique Nationale, en Sociologie & Anthropologie. Il a à son actif plusieurs expositions au pays et à l’étranger et participe dans plusieurs projets artistiques en tant que producteur visuel, notamment la Biennale Yango, Kinshasa Design Week et autres. Membre de l’ASBL « collectif Farata » et co-fondateur de « Krithika artprojects », il dirige depuis 2020 le festival d’art performance de Kinshasa dénommé « Kin-Etelemi-Telemi », mis en place par le collectif Farata. Azgard aborde un travail complexe liant la photographie, le graphisme et la vidéo expérimentale. Il considère que le travail d’un artiste de plusieurs casquettes est comme une toile d’araignée où tout est réuni pour se servir au bout du compte des passerelles les unes aux autres. L’approche photographique d’Azgard porte un regard poétique et artistique sur le geste du quotidien kinois et ouvre le champ de l’observation profonde sur les espaces visibles et non visibles de la ville de Kinshasa. Il ouvre, en outre, la voie de penser la ville et sa configuration et questionne la notion urbanistique ou architecturale, mettant surtout un point focal sur ses transformations. Il traite aussi, au-delà de cet aspect, des sujets liés aux questionnements personnels autour des problématiques touchant la notion de la définition de soi.",
  },
  {
    name: "MAGLOIRE MPAKA",
    role: "Community manager",
    img: "/team/img-05.jpg",
    bio:
      "Né le 28 novembre 1990 à Kinshasa, Magloire Mpaka est un artiste visuel issu de l’Académie des Beaux-arts de Kinshasa. Licencié en Communication visuelle, de l’institution précitée, en 2015, il détient un diplôme d’Etat (Baccalauréat) en Biologie-Chimie. Actif dans le secteur de la communication audiovisuelle et artistique, il participe dans des projets des agences conseils, axés sur des réalisations de films, spots publicitaires, magazines, documentaires, etc. Magloire Mpaka fait un travail de fouille, d’observation et d’arrangement, orchestré souvent par le maniement d’un appareil photographique pour capter un discours niché derrière tous aspects. Cela, surtout, sur ceux chargés et constituant un fond archivistique pouvant témoigner de l’influence du temps sur les choses. Ici, l’artiste s’offre le privilège d’arborer le profil d’un muséologue autant que celui d’un partisan de l’idéologie de la restitution des artefacts africains qui peuplent les institutions muséales partout ailleurs. Il se pose, en même temps, des questions sur la survie de ces objets une fois rapatriés.",
  },
  {
    name: "SAMUEL MWANI",
    role: "Assistant artistique et technique",
    img: "/team/img-06.jpg",
    bio:
      "Artiste visuel, Samuel Mwani vit et travaille à Kinshasa, sa ville natale. Né en 1999, il est diplômé du deuxième cycle (Bac+5) d’Arts graphiques, option communication visuelle à l’Académie des Beaux-Arts de Kinshasa. Il s’est spécialisé dans la photographie urbaine. Il documente performance artistique et autres actions ou évènements quotidiens de l’espace public, notamment des constructions diverses participant à l’urbanisation de sa ville, différentes scènes culturelles et activités de mouvements de jeunesse. Ses images sont généralement le fruit d’un travail collaboratif entre le photographe et les personnes représentées manifestant la tension entre l’action et l’image statique. Le travail de Samuel Mwani a été présenté, entre autres, lors de l’exposition virtuelle Confinement 2.0 (2020), aux 1ère et 2ème édition du Festival Kin Etelemi-telemi (2021, 2024), ainsi qu’au projet Congo Connecting de la Punning Foundation (2022). Son œuvre a également été exposée à la Galerie du Port de La Ciotat (2022) et au centre culturel Mokili Na Poche, dans le cadre des résidences pour jeunes artistes organisées par le Laboratoire Kontempo (2023). Plus récemment, il a participé au Kinshasa Urban Art Fest (2023, 2024) et au Festival du Film Africain de New York (2025), au sein d'une exposition de photographie numérique curatée par Cecilia A. Zoppelletto pour Congo RE-Vue.",
  },
];

// ── Official logo ─────────────────────────────────────────────────────────────
function KAPLogo({ className = "w-[145px]" }: { className?: string }) {
  return (
    <img
      src={IMG_LOGO}
      alt="Krithika Art Projects"
      className={`${className} h-auto object-contain`}
    />
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-[13px] font-normal tracking-[0.22em] uppercase text-foreground mb-10">
      {children}
    </h2>
  );
}

function PerformerPage() {
  return (
    <>
      <section
        className="relative w-full bg-neutral-900 overflow-hidden"
        style={{ height: "min(56vh, 560px)" }}
      >
        <img
          src={IMG_HERO}
          alt="Performeur de Mémoire"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 52%, transparent 76%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 px-6 lg:px-12 pb-10 lg:pb-14">
          <p className="text-white/70 text-[10px] tracking-[0.28em] uppercase mb-4">
            Projet artistique
          </p>
          <h1 className="text-white uppercase leading-none max-w-4xl font-extrabold whitespace-nowrap text-[clamp(1.7rem,5.2vw,4.8rem)]">
            Performeur de Mémoire
          </h1>
          <p className="text-white/80 text-[13px] tracking-[0.22em] uppercase mt-5">
            Mahoutondji Kinmagbo
          </p>
        </div>
      </section>

      <article className="px-6 lg:px-12 py-14 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[13.5px] leading-relaxed text-foreground/75 max-w-3xl mb-10">
            Un projet financé par l&rsquo;Union européenne dans le cadre de
            l&rsquo;initiative S+T+ARTS, en collaboration avec plusieurs institutions
            culturelles et de recherche. Cette proposition interroge la mémoire,
            l&rsquo;oralité et les formes contemporaines de transmission.
          </p>

          <div className="overflow-hidden bg-neutral-100 mb-12" style={{ aspectRatio: "16/9" }}>
            <img
              src={IMG_PERFORMER_COVER}
              alt="Installation Performeur de Mémoire"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.1fr] gap-10 lg:gap-14">
            <aside>
              <p className="text-[10px] tracking-[0.26em] uppercase text-muted-foreground mb-3">
                Performance · Archive · Technologie
              </p>
              <h2 className="text-3xl lg:text-5xl uppercase leading-none font-extrabold">
                Performeur de Mémoire
              </h2>
            </aside>

            <div className="space-y-5 text-[14px] leading-[1.85] text-foreground/78">
              <p>
                Le Performeur de Mémoire est un projet artistique qui réinvente la tablette
                de mémoire traditionnelle Lukasa sous forme d&rsquo;un dispositif numérique.
                Il relie la mémoire communautaire aux pratiques contemporaines, avec une
                attention particulière aux gestes, aux récits et aux traces.
              </p>
              <p>
                Le projet situe la technologie au croisement de l&rsquo;intelligence ancestrale,
                de la préservation culturelle et de la transformation des patrimoines
                immatériels. Il propose un espace sensible où la mémoire devient active,
                consultable et partagée.
              </p>
              <p>
                Dans les collections occidentales, la Lukasa repose souvent immobile,
                figée dans une lecture muséale. Ici, elle retrouve sa capacité d&rsquo;usage :
                elle se manipule, se raconte et permet d&rsquo;ouvrir une conversation entre
                le passé, le présent et les futurs possibles.
              </p>
              <p>
                La performance déplace ainsi l&rsquo;objet d&rsquo;archive vers une expérience
                vivante. Le corps, la voix et l&rsquo;image recomposent une mémoire située,
                où la technologie critique la technologie et remet au centre la puissance
                des savoirs transmis.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto my-16 lg:my-20">
            <div
              className="relative overflow-hidden bg-[#1a1a1a] group cursor-pointer"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={IMG_PERFORMER_VIDEO}
                alt="Vidéo Performeur de Mémoire"
                className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-10 bg-[#FF0000] flex items-center justify-center rounded-[3px] shadow-lg transition-transform group-hover:scale-105">
                  <Play size={18} fill="white" className="text-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          <section className="border-t border-border pt-12 lg:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start">
              <div className="overflow-hidden bg-neutral-100" style={{ aspectRatio: "4/5" }}>
                <img
                  src={IMG_PERFORMER_PERSON}
                  alt="Mahoutondji Kinmagbo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.26em] uppercase text-muted-foreground mb-4">
                  Artiste
                </p>
                <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-6">
                  Mahoutondji Kinmagbo
                </h2>
                <div className="space-y-4 text-[14px] leading-[1.85] text-foreground/78 max-w-2xl">
                  <p>
                    Mahoutondji Kinmagbo est un artiste en art visuel, médias explorant
                    l&rsquo;intersection entre l&rsquo;héritage africain et la technologie.
                    À travers la narration immersive et des projets spéculatifs, son
                    travail réinvente les traditions et remet en question les récits
                    coloniaux.
                  </p>
                  <p>
                    Préservant les histoires culturelles tout en suscitant une réflexion
                    sur l&rsquo;identité, la mémoire et l&rsquo;évolution culturelle à l&rsquo;ère du
                    numérique, sa démarche ouvre un dialogue entre recherche, archive et
                    création contemporaine.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

function TeamPage() {
  return (
    <>
      <section className="px-6 lg:px-12 pt-14 lg:pt-20 pb-12 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
            Krithika Art Projects
          </p>
          <h1 className="text-4xl lg:text-6xl uppercase leading-none mb-6 font-extrabold">
            Équipe
          </h1>
          <p className="text-[14px] leading-[1.85] text-foreground/70 max-w-2xl">
            Une équipe pluridisciplinaire réunissant direction artistique, production,
            recherche, médiation, communication et accompagnement technique autour des
            pratiques artistiques contemporaines.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-14 lg:py-20">
        <div className="max-w-5xl mx-auto space-y-14 lg:space-y-16">
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={member.name}
              className="group grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7 lg:gap-12 items-start border-b border-border pb-14 lg:pb-16 last:border-b-0 last:pb-0"
            >
              <div
                className="overflow-hidden bg-neutral-100 md:sticky md:top-8"
                style={{ aspectRatio: index === 0 ? "4/5" : "1/1" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-3">
                  {member.role}
                </p>
                <h2 className="text-2xl lg:text-4xl leading-tight mb-6 font-medium">
                  {member.name}
                </h2>
                <p className="text-[14px] leading-[1.9] text-foreground/76">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [featuredVideoOpen, setFeaturedVideoOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [route, setRoute] = useState(
    typeof window === "undefined" ? "" : window.location.hash
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      setMobileOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isPerformerPage = route === "#performeur-de-memoire";
  const isTeamPage = route === "#equipe";
  const contentOffset = sidebarCollapsed ? "lg:ml-[82px]" : "lg:ml-[240px]";

  const getNavTarget = (label: string) => {
    if (label === "ACCUEIL") return "";
    if (label === "ÉQUIPE") return "equipe";
    return null;
  };

  const isNavActive = (label: string) => {
    if (label === "ACCUEIL") return !route || route === "#";
    if (label === "ÉQUIPE") return isTeamPage;
    return false;
  };

  return (
    <div
      className="flex bg-background text-foreground min-h-screen"
    >
      {/* ══════════════════ FIXED SIDEBAR (desktop) ══════════════════ */}
      <aside
        className={`hidden lg:flex flex-col fixed top-0 left-0 h-screen border-r border-border z-40 bg-background shrink-0 transition-[width] duration-300 ease-out ${
          sidebarCollapsed ? "w-[82px]" : "w-[240px]"
        }`}
      >
        <button
          type="button"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          aria-label={sidebarCollapsed ? "Agrandir la sidebar" : "Réduire la sidebar"}
          className="absolute -right-4 top-6 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground/70 shadow-sm hover:text-[#c0392b] hover:border-[#c0392b] transition-colors cursor-pointer"
        >
          {sidebarCollapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>

        {/* Logo */}
        <div className={`flex justify-center pt-12 ${sidebarCollapsed ? "px-4" : "px-8"}`}>
          <KAPLogo className={sidebarCollapsed ? "w-[46px]" : "w-[145px]"} />
        </div>

        {/* Nav */}
        <nav className={`flex flex-1 items-center py-8 overflow-y-auto ${sidebarCollapsed ? "px-3" : "px-5"}`}>
          <ul className={`flex w-full flex-col items-center text-center ${sidebarCollapsed ? "gap-5" : "gap-7"}`}>
            {NAV.map((item) => {
              const Icon = item.icon;
              const target = getNavTarget(item.label);
              const active = isNavActive(item.label);

              return (
              <li key={item.label} className="w-full">
                <button
                  title={sidebarCollapsed ? item.label : undefined}
                  onClick={() => {
                    if (item.sub && !sidebarCollapsed) {
                      setOpenSub(openSub === item.label ? null : item.label);
                      return;
                    }
                    if (target !== null) {
                      window.location.hash = target;
                    }
                  }}
                  className={`w-full flex items-center justify-center gap-2 group transition-colors cursor-pointer ${
                    active ? "text-[#c0392b]" : "text-foreground hover:text-[#c0392b]"
                  }`}
                >
                  {sidebarCollapsed && (
                    <Icon size={21} strokeWidth={2.4} className="shrink-0" />
                  )}
                  {!sidebarCollapsed && (
                    <span className="text-[14px] font-bold tracking-normal uppercase transition-colors leading-snug text-center">
                      {item.label}
                    </span>
                  )}
                  {item.sub && !sidebarCollapsed && (
                    <ChevronDown
                      size={18}
                      strokeWidth={3}
                      className={`flex-shrink-0 transition-transform ${
                        openSub === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.sub && !sidebarCollapsed && openSub === item.label && (
                  <ul className="pt-3 space-y-2 text-center">
                    {item.sub.map((s) => (
                      <li key={s}>
                        <a
                          href="#"
                          className="block text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-[#c0392b] transition-colors cursor-pointer"
                        >
                          {s}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              );
            })}
          </ul>
        </nav>

        {/* Social + copyright */}
        <div className={`pb-10 ${sidebarCollapsed ? "px-3" : "px-5"}`}>
          <div className={`flex items-center justify-center mb-10 ${sidebarCollapsed ? "flex-col gap-4" : "gap-5"}`}>
            {SOCIAL_LINKS.map(({ Icon, label, href, hoverClass }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`text-foreground/70 transition-colors cursor-pointer ${hoverClass}`}
                >
                  <Icon size={19} strokeWidth={2.5} />
                </a>
              ) : (
                <span
                  key={label}
                  aria-label={`${label} - lien à venir`}
                  className={`text-foreground/70 transition-colors ${hoverClass}`}
                  role="img"
                >
                  <Icon size={19} strokeWidth={2.5} />
                </span>
              )
            )}
          </div>
          <p className={`text-center text-[13px] text-foreground/85 leading-[1.9] ${sidebarCollapsed ? "hidden" : ""}`}>
            © {CURRENT_YEAR} Krithika Art Projects.
            <br />
            Tous droits réservés.
          </p>
        </div>
      </aside>

      {/* ══════════════════ MOBILE HEADER ══════════════════ */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-background border-b border-border h-16 flex items-center justify-between px-4">
        <div className="flex items-center">
          <KAPLogo className="w-[52px]" />
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer" : "Menu"}
          className="p-2"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background flex flex-col pt-14 overflow-y-auto">
          <nav className="flex-1 px-6 pt-6">
            <ul className="text-center">
              {NAV.map((item) => (
                <li key={item.label}>
                  <button
                    className="w-full flex items-center justify-center gap-2 py-4"
                    onClick={() =>
                      item.sub
                        ? setOpenSub(openSub === item.label ? null : item.label)
                        : item.label === "ACCUEIL"
                          ? (window.location.hash = "")
                          : item.label === "ÉQUIPE"
                            ? (window.location.hash = "equipe")
                          : setMobileOpen(false)
                    }
                  >
                    <span className="text-[14px] uppercase font-bold">{item.label}</span>
                    {item.sub && (
                      <ChevronDown
                        size={18}
                        strokeWidth={3}
                        className={`transition-transform text-foreground ${
                          openSub === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.sub && openSub === item.label && (
                    <ul className="pb-3 space-y-2">
                      {item.sub.map((s) => (
                        <li key={s}>
                          <a
                            href="#"
                            className="block text-[11px] text-muted-foreground tracking-wide py-1"
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-6 py-8 text-center">
            <div className="flex justify-center gap-5 mb-6">
              {SOCIAL_LINKS.map(({ Icon, label, href, hoverClass }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`text-foreground/70 transition-colors cursor-pointer ${hoverClass}`}
                  >
                    <Icon size={19} strokeWidth={2.5} />
                  </a>
                ) : (
                  <span
                    key={label}
                    aria-label={`${label} - lien à venir`}
                    className={`text-foreground/70 transition-colors ${hoverClass}`}
                    role="img"
                  >
                    <Icon size={19} strokeWidth={2.5} />
                  </span>
                )
              )}
            </div>
            <p className="text-[10px] text-muted-foreground">
              © {CURRENT_YEAR} Krithika Art Projects. Tous droits réservés.
            </p>
          </div>
        </div>
      )}

      {/* ══════════════════ MAIN SCROLLABLE CONTENT ══════════════════ */}
      <main className={`flex-1 ${contentOffset} pt-16 lg:pt-0 flex flex-col transition-[margin] duration-300 ease-out`}>
        <div key={route || "home"} className="page-transition">
          {isPerformerPage ? (
            <PerformerPage />
          ) : isTeamPage ? (
            <TeamPage />
          ) : (
            <>
        {/* ─── 1. HERO ──────────────────────────────────────────────── */}
        <section className="relative w-full h-[calc(100vh-4rem)] lg:h-screen bg-neutral-900 overflow-hidden">
          <img
            src={IMG_HERO}
            alt="Performeur de Mémoire — performance scénique immersive"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
          />
          {/* bottom-up gradient only */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 45%, transparent 70%)",
            }}
          />

          {/* Centered copy */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-white uppercase leading-none tracking-tight mb-4 font-extrabold whitespace-nowrap text-[clamp(1.7rem,5.2vw,4.4rem)]">
              Performeur de Mémoire
            </h1>
            <p className="text-white/82 text-[12px] sm:text-[13px] tracking-[0.22em] uppercase mb-8">
              Mahoutondji Kinmagbo
            </p>
            <a
              href="#performeur-de-memoire"
              className="inline-block text-white border border-white/70 hover:bg-white hover:text-black transition-colors text-[10.5px] tracking-[0.22em] uppercase px-7 py-2.5"
              style={{ borderRadius: "999px" }}
            >
              Lire plus
            </a>
          </div>
        </section>

        {/* ─── NEWS BAR ─────────────────────────────────────────────── */}
        <button
          type="button"
          onClick={() => setFeaturedVideoOpen(true)}
          className="flex w-full items-center gap-4 px-6 lg:px-10 py-4 border-b border-border text-left hover:bg-muted/60 transition-colors group"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-[#FF0000] flex items-center justify-center">
            <Play size={13} fill="white" className="text-white ml-0.5" />
          </div>
          <p className="text-[11.5px] text-foreground/70">
            <span className="font-medium text-foreground">Nouveauté&nbsp;: </span>
            <span className="group-hover:text-foreground transition-colors">
              Photo Gaga : entre archives et influences familiales
            </span>
          </p>
        </button>

        {/* ─── 2. EXPÉRIMENTATIONS ──────────────────────────────────── */}
        <section id="experimentations" className="px-6 lg:px-12 py-16 lg:py-20">
          <SectionHeading>Expérimentations</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: IMG_EXP_1,
                category: "Installation multimédia",
                title: "Start Afropean Intelligence",
                desc: "Une exploration des croisements entre intelligence artificielle, mémoire collective et identités africaines contemporaines.",
              },
              {
                img: IMG_EXP_2,
                category: "Recherche visuelle",
                title: "Performeur de Mémoire",
                desc: "Un laboratoire scénique autour du corps, des archives et des récits transmis par la performance.",
              },
              {
                img: IMG_EXP_3,
                category: "Projet en cours",
                title: "Rumba, gestes et archives",
                desc: "Une expérimentation sur les formes musicales congolaises et leurs résonances dans les arts contemporains.",
              },
            ].map((exp) => (
              <article key={exp.title} className="group cursor-pointer">
                <div className="overflow-hidden bg-neutral-100" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {exp.category}
                  </p>
                  <h3 className="text-[14.5px] font-medium leading-snug mb-2 group-hover:text-foreground/60 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-3">
                    {exp.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 3. CRITIQUE TALK ─────────────────────────────────────── */}
        <section
          id="critique-talk"
          className="px-6 lg:px-12 py-16 lg:py-20 border-t border-border"
        >
          <SectionHeading>Critique Talk</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: IMG_TALK_1,
                date: "14 juin 2025",
                location: "Kinshasa, RDC",
                title: "Art & Colonialité — Décoloniser le regard critique",
              },
              {
                img: IMG_TALK_2,
                date: "29 mars 2025",
                location: "Paris, France",
                title: "Congo Panorama — Dialogues entre pratiques artistiques",
              },
              {
                img: IMG_TALK_3,
                date: "11 janvier 2025",
                location: "Dakar, Sénégal",
                title: "Stage Académique — Performance et archive vivante",
              },
            ].map((t) => (
              <article key={t.title} className="group cursor-pointer">
                <div className="overflow-hidden bg-neutral-100" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {t.date} — {t.location}
                  </p>
                  <h3 className="text-[14.5px] font-medium leading-snug text-foreground group-hover:text-foreground/60 transition-colors">
                    {t.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 4. KRITHIKA PODCASTS ─────────────────────────────────── */}
        <section
          id="podcasts"
          className="px-6 lg:px-12 py-16 lg:py-20 border-t border-border"
        >
          <SectionHeading>Krithika Podcasts</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: IMG_POD_1,
                ep: "Épisode 12",
                title: "Rumba Congolaise : art contemporain et recherche",
                desc: "Un dialogue sur les racines du groove congolais et sa résonance dans les pratiques artistiques actuelles.",
              },
              {
                img: IMG_POD_2,
                ep: "Épisode 11",
                title: "Photo Gaga : entre archives et influences familiales",
                desc: "Exploration de la photographie comme outil de mémoire et de transmission intergénérationnelle.",
              },
              {
                img: IMG_POD_3,
                ep: "Épisode 10",
                title: "MNRDC : indices de la colonialité dans la musicographie",
                desc: "Comment le colonialisme a façonné les récits musicaux en Afrique centrale.",
              },
            ].map((pod) => (
              <article key={pod.ep} className="group cursor-pointer">
                {/* Dark card with play overlay */}
                <div
                  className="relative overflow-hidden bg-[#1a1a1a]"
                  style={{ aspectRatio: "3/2" }}
                >
                  <img
                    src={pod.img}
                    alt={pod.title}
                    className="w-full h-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* YouTube-style play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 bg-[#FF0000] flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-lg">
                      <Play size={16} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {pod.ep}
                  </p>
                  <h3 className="text-[14.5px] font-medium leading-snug mb-2">
                    {pod.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-3">
                    {pod.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─── 5. À PROPOS ──────────────────────────────────────────── */}
        <section
          id="apropos"
          className="px-6 lg:px-12 py-16 lg:py-24 border-t border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl">
            <div>
              <p className="text-[9.5px] tracking-[0.26em] uppercase text-muted-foreground mb-6">
                À propos
              </p>
              <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-6">
                Un espace de recherche et de création pour les arts contemporains africains
              </h2>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-4">
                Krithika Art Projects est une plateforme indépendante dédiée à la recherche,
                à l&rsquo;expérimentation et à la diffusion des pratiques artistiques contemporaines
                en Afrique et dans la diaspora.
              </p>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-8">
                Fondée sur une pensée critique et pluridisciplinaire, elle rassemble artistes,
                chercheurs et publics autour de projets singuliers — expositions, conférences,
                podcasts et ateliers.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-medium border-b border-foreground pb-px hover:text-muted-foreground hover:border-muted-foreground transition-colors"
              >
                En savoir plus <ArrowRight size={12} />
              </a>
            </div>
            <div className="overflow-hidden bg-neutral-100" style={{ aspectRatio: "4/3" }}>
              <img
                src={IMG_ABOUT}
                alt="Rencontre artistique — Krithika Art Projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

            </>
          )}
        </div>
      </main>

      {featuredVideoOpen && (
        <div
          className="video-dialog-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-black/78 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Lecture vidéo Photo Gaga"
          onClick={() => setFeaturedVideoOpen(false)}
        >
          <div
            className="video-dialog-panel w-full max-w-4xl bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em]">
                Photo Gaga
              </p>
              <button
                type="button"
                onClick={() => setFeaturedVideoOpen(false)}
                aria-label="Fermer la vidéo"
                className="p-2 text-foreground/70 hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="bg-black" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={FEATURED_VIDEO_EMBED}
                title="Photo Gaga : entre archives et influences familiales"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
