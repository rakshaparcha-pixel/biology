/* APP LOGIC - PROTOZOAN DISEASES & PLASMODIUM LIFE CYCLE PRESENTATION (ROBUST & INTERACTIVE) */

// --- DATA STRUCTURES ---

const SLIDES = [
  {
    id: 1,
    tag: "ISC BIOLOGY • HUMAN HEALTH & DISEASES",
    title: "Protozoan Diseases & <span class='highlight'>Plasmodium</span> Life Cycle",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-emerald">
          <h4><i class="fa-solid fa-microscope"></i> Introduction to Protozoan Parasites</h4>
          <p>Protozoans are single-celled eukaryotic microorganisms that cause severe infectious diseases in humans. Unlike bacteria, protozoan parasites often possess complex <strong>digenetic life cycles</strong> requiring two distinct hosts (e.g. Man and Mosquito).</p>
          <ul class="bullet-list">
            <li><strong>Major Protozoan Diseases:</strong> Amoebiasis (Amoebic Dysentery) and Malaria.</li>
            <li><strong>Pathogenic Mechanisms:</strong> Cellular tissue destruction, toxic chemical secretions (e.g. Haemozoin), and red blood cell lysis.</li>
            <li><strong>Vector Transmission:</strong> Dependent on biological insect vectors such as female <em>Anopheles</em> mosquitoes.</li>
          </ul>
        </div>
        <div class="info-card accent-cyan">
          <h4><i class="fa-solid fa-map-location-dot"></i> Textbook Coverage Map</h4>
          <ul class="bullet-list">
            <li><strong>Amoebiasis:</strong> Causative agent (<em>Entamoeba histolytica</em>), infection mode, intestinal symptoms, prevention & multi-drug treatment.</li>
            <li><strong>Malaria Overview:</strong> 4 <em>Plasmodium</em> species, female vector, 3-stage fever paroxysm, 8 prevention measures, and Quinine control.</li>
            <li><strong>Life Cycle of Plasmodium:</strong> Complete step-by-step asexual phase in Man and sexual phase in Mosquito.</li>
            <li><strong>Textbook Fig 9.3 Replica:</strong> Interactive diagrammatic map & visual textbook diagram.</li>
          </ul>
        </div>
      </div>
      <div class="embedded-mindmap-banner">
        <span><i class="fa-solid fa-sitemap"></i> <strong>Interactive Mind Map Embedded:</strong> View the full disease map anytime using the top navigation bar or the sidebar preview.</span>
      </div>
    `
  },
  {
    id: 2,
    tag: "Protozoal Diseases • Textbook Section C.1",
    title: "Amoebiasis (Amoebic Dysentery) — <span class='highlight'>Cause & Symptoms</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-crimson">
          <h4><i class="fa-solid fa-bacterium"></i> Causative Agent & Infection</h4>
          <p><strong>Causative Parasite:</strong> <em>Entamoeba histolytica</em> (a protozoan parasite).</p>
          <ul class="bullet-list">
            <li><strong>Spreading & Transmission:</strong> Spreads through liquids and food contaminated with <strong>amoebic cysts</strong>.</li>
            <li><strong>Indirect Contact:</strong> Transmitted indirectly through contact with dirty, unwashed hands.</li>
            <li><strong>Site of Infection:</strong> Human intestine (primarily large intestine), invading mucosa and causing severe mucosal ulcers.</li>
          </ul>
          <div style="margin-top:10px; border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
            <img src="assets/entamoeba_diagram.jpg" alt="Entamoeba histolytica illustration" style="width:100%; height:140px; object-fit:cover;">
          </div>
        </div>
        <div class="info-card accent-gold">
          <h4><i class="fa-solid fa-notes-medical"></i> Detailed Clinical Symptoms</h4>
          <p>Amoebiasis is an intestinal infection characterized by progressive gastrointestinal distress:</p>
          <ul class="bullet-list">
            <li><strong>Abdominal Pain & Cramps:</strong> Severe griping abdominal pain, burning sensation, and intestinal tenderness.</li>
            <li><strong>Stool Disturbances:</strong> Alternating constipation or severe diarrhoea.</li>
            <li><strong>Mucous & Blood Discharge:</strong> Excess discharge of mucous and even <strong>blood clots in stools</strong> (dysenteric stools).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 3,
    tag: "Protozoal Diseases • Textbook Section C.1",
    title: "Amoebiasis — <span class='highlight'>Prevention & Dual Treatment</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-emerald">
          <h4><i class="fa-solid fa-shield-halved"></i> 4 Preventive Measures</h4>
          <ul class="bullet-list">
            <li><strong>(i) Hand Hygiene:</strong> Wash hands thoroughly with soap and hot running water for at least 10 seconds after using the toilet or changing diapers, and before handling food. Avoid sharing towels or face washers.</li>
            <li><strong>(ii) Food Safety:</strong> Avoid raw vegetables in endemic areas (as they may have been fertilized using human faeces).</li>
            <li><strong>(iii) Water Sanitation:</strong> Boil drinking water thoroughly or treat with iodine tablets.</li>
          </ul>
        </div>
        <div class="info-card accent-cyan">
          <h4><i class="fa-solid fa-pills"></i> Medical Treatment & Pharmacotherapy</h4>
          <p>Amoebiasis requires a strategic <strong>combination therapy</strong> of tissue-active antibiotics and luminal agents:</p>
          <ul class="bullet-list">
            <li><strong>Nitroimidazole Derivatives:</strong> <em>Metronidazole</em> or <em>Tinidazole</em> are commonly used nitroimidazole derivatives to actively kill the parasite in tissues.</li>
            <li><strong>Luminal Agents:</strong> Agents like <em>Paromomycin</em>, <em>Iodoquinol</em>, or <em>Diloxanide furoate</em> eliminate the encysted form in the gut lumen and prevent further transmission.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 4,
    tag: "Protozoal Diseases • Textbook Section C.2",
    title: "Malaria — <span class='highlight'>Epidemiology & 4 Plasmodium Species</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-crimson">
          <h4><i class="fa-solid fa-globe"></i> Global Burden & Vectors</h4>
          <p><strong>Epidemiology:</strong> About 300 million people are infected with malaria every year and more than 2 million people die annually due to malaria.</p>
          <ul class="bullet-list">
            <li><strong>Causative Agent:</strong> Protozoan parasite named <em>Plasmodium</em>.</li>
            <li><strong>Infective Stage & Vector:</strong> Infective stage resides in the salivary glands of an insect — female <em>Anopheles</em> mosquito.</li>
            <li><strong>Non-infective Male:</strong> Male <em>Anopheles</em> is non-infective as it feeds strictly on plant juice.</li>
          </ul>
        </div>
        <div class="info-card accent-gold">
          <h4><i class="fa-solid fa-dna"></i> 4 Species of Plasmodium in Humans</h4>
          <ul class="bullet-list">
            <li><strong>1. <em>Plasmodium vivax</em>:</strong> Causes Benign Tertian Malaria (fever recurs every 48 hours / 3rd day).</li>
            <li><strong>2. <em>Plasmodium falciparum</em>:</strong> Causes Malignant Tertian Malaria (most severe, fatal malarial attacks).</li>
            <li><strong>3. <em>Plasmodium malariae</em>:</strong> Causes Quartan Malaria (fever recurs every 72 hours / 4th day).</li>
            <li><strong>4. <em>Plasmodium ovale</em>:</strong> Causes Ovale Tertian Malaria (fever recurs every 48 hours).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 5,
    tag: "Protozoal Diseases • Textbook Section C.2",
    title: "Malaria — <span class='highlight'>Symptoms, 3-Stage Fever & Quinine</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-gold">
          <h4><i class="fa-solid fa-temperature-arrow-up"></i> The 3-Stage Malarial Paroxysm</h4>
          <p>Each malarial attack lasts 6 to 10 hours and consists of three distinct sequential stages:</p>
          <ul class="bullet-list">
            <li><strong>(i) Cold Stage:</strong> Intense feeling of cold and uncontrollable shivering.</li>
            <li><strong>(ii) Hot Stage:</strong> High fever, accelerated respiration, and rapid heart beat.</li>
            <li><strong>(iii) Sweating Stage:</strong> Temperature goes down to normal with profuse sweating.</li>
          </ul>
        </div>
        <div class="info-card accent-cyan">
          <h4><i class="fa-solid fa-heart-pulse"></i> Clinical Effects & Quinine Treatment</h4>
          <ul class="bullet-list">
            <li><strong>Primary Symptoms:</strong> Headache, nausea, muscular pains, and high fever.</li>
            <li><strong>Post-Cure Sequelae:</strong> Patient becomes weak and anaemic. Malaria causes marked enlargement of spleen and liver.</li>
            <li><strong>Control Drug (Quinine):</strong> Quinine (a drug extracted from the bark of <em>Cinchona calisaya</em> tree) is known to be highly effective in treating malaria.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 6,
    tag: "Protozoal Diseases • Textbook Section C.2",
    title: "Malaria — <span class='highlight'>8 Comprehensive Prevention Measures</span>",
    content: `
      <div class="info-card accent-emerald">
        <h4><i class="fa-solid fa-shield-virus"></i> Vector Eradication & Prevention Measures</h4>
        <p>Malaria spreads exclusively through female <em>Anopheles</em> mosquito. Checking mosquito population automatically controls malaria:</p>
        <div class="slide-grid-2" style="margin-top:12px;">
          <ul class="bullet-list">
            <li><strong>(i) Wire Gauze:</strong> Use wire-gauze on doors and windows to prevent entry of mosquitoes.</li>
            <li><strong>(ii) Repellents:</strong> Use insect repellents to prevent mosquito bites.</li>
            <li><strong>(iii) Bed Nets:</strong> Sleep under mosquito net.</li>
            <li><strong>(iv) Kerosene Oil:</strong> Mosquito larvae killed by sprinkling kerosene on large water bodies.</li>
          </ul>
          <ul class="bullet-list">
            <li><strong>(v) Biological Control:</strong> Introduce larvivorous fishes such as <em>Gambusia</em>, minnows, and trouts (feed on larvae) or ducks into water bodies.</li>
            <li><strong>(vi) Adulticides:</strong> Kill adult mosquitoes by spraying insecticides.</li>
            <li><strong>(vii) Source Reduction:</strong> Destroy mosquito-breeding places.</li>
            <li><strong>(viii) Drainage:</strong> Fill up all ditches with soil to avoid accumulation of water.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 7,
    tag: "Plasmodium Life Cycle • Overview",
    title: "Life Cycle of Plasmodium — <span class='highlight'>Digenetic Parasite</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-emerald">
          <h4><i class="fa-solid fa-user"></i> Host 1: Man (Asexual Phase)</h4>
          <p>Discovered and studied by <strong>Sir Ronald Ross</strong>. <em>Plasmodium</em> is a digenetic protozoan parasite completing its cycle in two hosts.</p>
          <ul class="bullet-list">
            <li><strong>Phase Type:</strong> Asexual phase of life cycle (Schizogony).</li>
            <li><strong>Location:</strong> Inside human body cells (hepatocytes and red blood cells), NOT in body cavities or intercellular spaces.</li>
            <li><strong>Pathogenicity:</strong> Causes malarial fever paroxysms in human host.</li>
          </ul>
        </div>
        <div class="info-card accent-crimson">
          <h4><i class="fa-solid fa-bug"></i> Host 2: Mosquito (Sexual Phase)</h4>
          <p><strong>Secondary Host & Vector:</strong> Female <em>Anopheles</em> (Phylum Arthropoda, Class Insecta).</p>
          <ul class="bullet-list">
            <li><strong>Phase Type:</strong> Sexual phase of life cycle (Gametogony & Sporogony).</li>
            <li><strong>Location:</strong> Extracellular — resides in body cavities, gut lumen, gut wall, and intercellular spaces (haemocoel).</li>
            <li><strong>Vector Function:</strong> Inoculates infective sporozoites into healthy humans.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 8,
    tag: "Life Cycle of P. vivax in Man",
    title: "Asexual Phase in Man — <span class='highlight'>Liver Schizogony</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-cyan">
          <h4><i class="fa-solid fa-syringe"></i> 1. Infection to Man</h4>
          <p>The infective stage is called <strong>sporozoite</strong> (small spindle-shaped, uninucleate structures) present in mosquito salivary glands.</p>
          <ul class="bullet-list">
            <li>Transferred to human blood along with mosquito saliva during a bite.</li>
            <li>Circulate in blood stream for about half an hour before entering liver cells.</li>
          </ul>
        </div>
        <div class="info-card accent-emerald">
          <h4><i class="fa-solid fa-burst"></i> 2 & 3. Pre- & Exo-erythrocytic Schizogony</h4>
          <ul class="bullet-list">
            <li><strong>Pre-erythrocytic Schizogony:</strong> Sporozoite enters liver cell &rarr; becomes cryptozoite &rarr; grows into spherical <em>schizont</em> &rarr; divides by multiple fission into <strong>cryptomerozoites</strong>.</li>
            <li><strong>Exo-erythrocytic Schizogony:</strong> Liver cell bursts, cryptomerozoites invade fresh liver cells &rarr; become <strong>metacryptomerozoites</strong> (repeats several times).</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 9,
    tag: "Life Cycle of P. vivax in Man",
    title: "Asexual Phase in Man — <span class='highlight'>Erythrocytic Stages & Gametocytes</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-gold">
          <h4><i class="fa-solid fa-droplet"></i> 4. Erythrocytic Schizogony in RBCs</h4>
          <ul class="bullet-list">
            <li><strong>(a) Trophozoite stage:</strong> Small rounded structure with nucleus, mitochondria, vacuoles, haemozoin.</li>
            <li><strong>(b) Signet ring stage:</strong> Central vacuole enlarges, pushing nucleus to side. Hemoglobin broken down into hematin and toxic <strong>haemozoin</strong> (malarial pigment).</li>
            <li><strong>(c) Amoeboid stage:</strong> Develops pseudopodia. RBC cytoplasm develops red <strong>Schuffner's granules</strong>.</li>
            <li><strong>(d) Schizont stage:</strong> Nucleus divides into 16–24 nuclei &rarr; <strong>merozoites</strong> (takes 48 hrs in <em>P. vivax</em>). RBC bursts releasing merozoites & toxic haemozoin (triggers fever & shivering).</li>
          </ul>
        </div>
        <div class="info-card accent-purple">
          <h4><i class="fa-solid fa-venus-mars"></i> 5 & 6. Post-erythrocytic & Gametocytosis</h4>
          <ul class="bullet-list">
            <li><strong>Post-erythrocytic Schizogony:</strong> Merozoites invade liver cells for further schizogony.</li>
            <li><strong>Gametocytosis:</strong> Merozoites develop into rounded <strong>gametocytes</strong> inside RBCs:</li>
            <li><strong>Microgametocytes:</strong> Smaller male gametocytes.</li>
            <li><strong>Megagametocytes:</strong> Larger female gametocytes. Stalled inside RBCs until ingested by female <em>Anopheles</em>.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 10,
    tag: "Life Cycle of P. vivax in Mosquito",
    title: "Sexual Phase in Mosquito — <span class='highlight'>Gametogenesis & Syngamy</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-crimson">
          <h4><i class="fa-solid fa-bug"></i> 1 & 2. Ingestion & Gametogenesis</h4>
          <ul class="bullet-list">
            <li><strong>Ingestion:</strong> Mosquito bites infected human, sucking blood. Gametocytes survive blood digestion in mosquito gut.</li>
            <li><strong>Temperature Stimulus:</strong> Temperature drop from warm blood to cold mosquito stimulates gametogenesis. All stages haploid except diploid zygote.</li>
            <li><strong>Exflagellation:</strong> Megagametocyte forms female gamete (megagamete). Microgametocyte undergoes <strong>exflagellation</strong> (mitosis) forming <strong>8 flagellated male gametes (sperms)</strong>.</li>
          </ul>
        </div>
        <div class="info-card accent-emerald">
          <h4><i class="fa-solid fa-ring"></i> 3 & 4. Fertilisation & Diploid Zygote</h4>
          <ul class="bullet-list">
            <li><strong>Fertilisation (Syngamy):</strong> Megagamete forms a <em>fertilisation cone</em>. Microgamete enters cone; nuclei fuse to form diploid <strong>zygote (ookinete)</strong>.</li>
            <li><strong>Zygote / Ookinete:</strong> Diploid structure (15–20 &mu;m long, 2–3 &mu;m wide). Becomes elongated and motile with wriggling movement, penetrating gut wall.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 11,
    tag: "Life Cycle of P. vivax in Mosquito",
    title: "Sexual Phase in Mosquito — <span class='highlight'>Encystment & Sporogony</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-gold">
          <h4><i class="fa-solid fa-circle-dot"></i> 5. Encystment (Oocyst Formation)</h4>
          <p>Ookinete penetrates deep into gut wall to outer thin lining bordering haemocoel, forming a protective cyst (<strong>oocyst</strong>).</p>
          <ul class="bullet-list">
            <li>Cyst is thin, elastic, and membranous.</li>
            <li>Encysted ookinete grows in size and undergoes asexual sporogony.</li>
          </ul>
        </div>
        <div class="info-card accent-cyan">
          <h4><i class="fa-solid fa-wand-magic-sparkles"></i> 6. Sporogony & Salivary Gland Migration</h4>
          <ul class="bullet-list">
            <li><strong>Sporogony:</strong> Nucleus undergoes meiotic division (4 haploid nuclei) followed by repeated mitosis forming thousands of haploid nuclei.</li>
            <li><strong>Sporozoite Formation:</strong> Cytoplasm accumulates around nuclei forming slender, spindle-shaped <strong>sporozoites</strong>.</li>
            <li><strong>Salivary Glands:</strong> Oocyst ruptures, releasing sporozoites into haemocoel. They migrate to the <strong>salivary glands</strong> of female <em>Anopheles</em>, making it infective to humans.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 12,
    tag: "Summary & Visual Textbook Map",
    title: "Interactive Mind Map & <span class='highlight'>Textbook Diagram Fig 9.3</span>",
    content: `
      <div class="slide-grid-2">
        <div class="info-card accent-emerald">
          <h4><i class="fa-solid fa-sitemap"></i> Interactive Mind Map Overview</h4>
          <p>The mind map contains the full hierarchical breakdown of Amoebiasis & Malaria. You can explore it interactively right here or enlarge it.</p>
          <div id="slide-12-mindmap-box" class="interactive-mindmap-container" style="max-height:220px; overflow:auto; margin-top:10px;">
            <!-- Mind map embedded directly into slide 12 -->
          </div>
        </div>
        <div class="info-card accent-cyan">
          <h4><i class="fa-solid fa-book-open"></i> Fig 9.3 Diagrammatic Life Cycle</h4>
          <p>Exact replica layout of textbook Figure 9.3 showing Sexual Cycle in Mosquito Gut and Asexual Cycle in Man.</p>
          <div style="margin-top:10px; border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
            <img src="assets/plasmodium_diagram.jpg" alt="Plasmodium Life Cycle Diagram" style="width:100%; height:150px; object-fit:cover; cursor:pointer;" onclick="switchAppMode('diagram-textbook')">
          </div>
          <button class="btn-sm primary" style="margin-top:10px; width:100%;" onclick="switchAppMode('diagram-textbook')"><i class="fa-solid fa-up-right-from-square"></i> Open Full Interactive Fig 9.3 View</button>
        </div>
      </div>
    `
  }
];

// --- STAGES FOR INTERACTIVE LIFE CYCLE SIMULATOR ---
const LIFE_CYCLE_STAGES = [
  {
    id: 1,
    name: "1. Mosquito Bite & Sporozoite Infection",
    host: "man",
    title: "Sporozoite Inoculation into Human Host",
    desc: "Infected female Anopheles mosquito bites a healthy human. Saliva containing thousands of uninucleate, spindle-shaped sporozoites is injected directly into blood stream.",
    keyTerm: "Sporozoites (Infective Stage)",
    keyTermDef: "Small, spindle-shaped, uninucleate motile structures residing in mosquito salivary glands.",
    location: "Human Bloodstream",
    duration: "~30 minutes in blood before entering liver."
  },
  {
    id: 2,
    name: "2. Pre-erythrocytic Liver Schizogony",
    host: "man",
    title: "Invasion of Hepatocytes (Liver Cells)",
    desc: "Sporozoites leave bloodstream and enter liver hepatocytes. Each sporozoite becomes a cryptozoite, absorbs nutrients, enlarges into a schizont, and divides by multiple fission to form cryptomerozoites.",
    keyTerm: "Cryptomerozoites",
    keyTermDef: "Uninucleate daughter cells formed by multiple fission (schizogony) of cryptozoites inside liver cells.",
    location: "Liver Cells (Hepatocytes)",
    duration: "Pre-erythrocytic phase (5-7 days)."
  },
  {
    id: 3,
    name: "3. Exo-erythrocytic Liver Schizogony",
    host: "man",
    title: "Liver Cell Rupture & Re-invasion",
    desc: "Overproduction of cryptomerozoites causes liver cells to burst. Cryptomerozoites invade fresh liver cells, becoming metacryptomerozoites and repeating schizogony.",
    keyTerm: "Metacryptomerozoites",
    keyTermDef: "Merozoites produced from repeated exo-erythrocytic liver cycles ready to attack RBCs.",
    location: "Fresh Liver Parenchyma",
    duration: "Repeated liver schizogony."
  },
  {
    id: 4,
    name: "4. Erythrocytic Stage: Signet Ring & Trophozoite",
    host: "man",
    title: "RBC Invasion & Haemozoin Formation",
    desc: "Metacryptomerozoites enter erythrocytes. Develop central vacuole pushing nucleus to side (Signet Ring Stage). Hemoglobin digested into hematin and toxic haemozoin pigment.",
    keyTerm: "Signet Ring Stage & Haemozoin",
    keyTermDef: "Ring-like trophozoite appearance. Haemozoin is the toxic malarial pigment derived from hemoglobin breakdown.",
    location: "Red Blood Cells (Erythrocytes)",
    duration: "Early erythrocytic phase."
  },
  {
    id: 5,
    name: "5. Amoeboid Stage & Schuffner's Granules",
    host: "man",
    title: "Pseudopodial Growth & RBC Modifications",
    desc: "Trophozoite develops pseudopodia (Amoeboid Stage). Cytoplasm of RBC develops small red eosinophilic dots called Schuffner's granules.",
    keyTerm: "Schuffner's Granules",
    keyTermDef: "Red eosinophilic granules appearing in the cytoplasm of P. vivax infected erythrocytes.",
    location: "Erythrocyte Cytoplasm",
    duration: "Mid erythrocytic phase."
  },
  {
    id: 6,
    name: "6. Erythrocytic Schizogony & Fever Release",
    host: "man",
    title: "Merozoite Formation & Malarial Paroxysm",
    desc: "Schizont nucleus divides into 16-24 nuclei forming merozoites. RBC bursts, releasing merozoites and toxic haemozoin into plasma, triggering intense chills and high fever.",
    keyTerm: "Haemozoin Toxicity & Merozoites",
    keyTermDef: "Release of toxic haemozoin molecules produces characteristic shivering cold & fever attacks every 48 hrs in P. vivax.",
    location: "Blood Plasma",
    duration: "48 Hours per cycle in P. vivax."
  },
  {
    id: 7,
    name: "7. Gametocytosis in Human RBCs",
    host: "man",
    title: "Formation of Micro- & Megagametocytes",
    desc: "After multiple erythrocytic cycles, some merozoites form rounded gametocytes in RBCs: smaller Microgametocytes (male) and larger Megagametocytes (female).",
    keyTerm: "Sexual Dimorphism (Gametocytes)",
    keyTermDef: "Precursors for sexual reproduction. Microgametocyte (male) & Megagametocyte (female). Stalled until mosquito bite.",
    location: "Circulating Blood Erythrocytes",
    duration: "Dormant in RBCs until vector blood meal."
  },
  {
    id: 8,
    name: "8. Mosquito Ingestion & Gametogenesis",
    host: "mosquito",
    title: "Ingestion & Exflagellation in Mosquito Gut",
    desc: "Female Anopheles sucks blood. Temperature drop stimulates gametogenesis. Microgametocyte undergoes exflagellation forming 8 flagellated male gametes (sperms). Megagametocyte forms megagamete.",
    keyTerm: "Exflagellation",
    keyTermDef: "Mitotic process where microgametocyte extrudes 8 flagella-like motile male gametes (sperms).",
    location: "Mosquito Midgut Lumen",
    duration: "Starts immediately after blood meal."
  },
  {
    id: 9,
    name: "9. Syngamy & Diploid Ookinete",
    host: "mosquito",
    title: "Fertilisation & Motile Zygote Formation",
    desc: "Megagamete forms fertilisation cone. Sperm enters and nuclei fuse to form a diploid Zygote (Ookinete). Elongates into motile wriggling form (15-20 µm).",
    keyTerm: "Ookinete (Motile Diploid Zygote)",
    keyTermDef: "Elongated, motile diploid zygote capable of penetrating the mosquito gut wall.",
    location: "Mosquito Gut Wall",
    duration: "12 - 24 hours post ingestion."
  },
  {
    id: 10,
    name: "10. Encystment & Oocyst Development",
    host: "mosquito",
    title: "Oocyst Formation on Outer Gut Wall",
    desc: "Ookinete penetrates gut wall to outer elastic lining bordering haemocoel. Secretes protective cyst wall becoming an Oocyst, which grows rapidly.",
    keyTerm: "Oocyst",
    keyTermDef: "Encysted ookinete resting on outer stomach wall of mosquito undergoing sporogony.",
    location: "Outer Gut Surface / Haemocoel",
    duration: "Several days of cyst growth."
  },
  {
    id: 11,
    name: "11. Sporogony & Sporozoite Release",
    host: "mosquito",
    title: "Asexual Sporogony & Salivary Migration",
    desc: "Oocyst nucleus undergoes meiotic division followed by repeated mitosis forming thousands of haploid sporozoites. Oocyst ruptures releasing sporozoites into haemocoel. Sporozoites migrate to salivary glands.",
    keyTerm: "Salivary Gland Accumulation",
    keyTermDef: "Sporozoites accumulate in salivary glands of female Anopheles, restoring vector infectivity.",
    location: "Mosquito Salivary Glands",
    duration: "10 - 14 days total cycle in mosquito."
  }
];

// --- GLOSSARY DATA ---
const GLOSSARY_DATA = [
  { term: "Amoebiasis", def: "Parasitic intestinal infection caused by Entamoeba histolytica, causing abdominal cramps, mucous, and bloody stools." },
  { term: "Cryptomerozoites", def: "Uninucleate daughter cells formed during pre-erythrocytic liver schizogony inside human hepatocytes." },
  { term: "Digenetic Parasite", def: "A parasite requiring two distinct host species to complete its life cycle (e.g. Plasmodium requires Man & Mosquito)." },
  { term: "Exflagellation", def: "Process in mosquito gut where a microgametocyte undergoes rapid nuclear division to extrude 8 motile male gametes (sperms)." },
  { term: "Haemozoin", def: "Toxic malarial pigment formed from insoluble hematin during hemoglobin breakdown inside RBCs; causes chills and fever." },
  { term: "Metacryptomerozoites", def: "Merozoites produced during exo-erythrocytic liver schizogony that proceed to invade RBCs or repeat liver schizogony." },
  { term: "Megagametocyte", def: "Larger female gametocyte produced inside human RBCs that develops into a female gamete inside mosquito gut." },
  { term: "Microgametocyte", def: "Smaller male gametocyte produced inside human RBCs that undergoes exflagellation inside mosquito gut." },
  { term: "Ookinete", def: "Motile, elongated diploid zygote of Plasmodium formed by fertilisation in mosquito gut." },
  { term: "Oocyst", def: "Encysted ookinete located on the outer wall of mosquito stomach inside which sporogony occurs." },
  { term: "Quinine", def: "Alkaloid drug extracted from bark of Cinchona calisaya tree, highly effective against malaria." },
  { term: "Schuffner's Granules", def: "Red/eosinophilic cytoplasmic dots appearing in erythrocytes infected with Plasmodium vivax." },
  { term: "Schizogony", def: "Asexual multiple fission process in Plasmodium occurring in liver cells and RBCs." },
  { term: "Signet Ring Stage", def: "Early trophozoite stage in RBC where a large central vacuole pushes the nucleus to the periphery." },
  { term: "Sporogony", def: "Asexual multiplication process inside mosquito oocyst resulting in thousands of spindle-shaped sporozoites." },
  { term: "Sporozoite", def: "Uninucleate, spindle-shaped infective stage of Plasmodium present in mosquito salivary glands." }
];

// --- QUIZ QUESTIONS ---
const QUIZ_QUESTIONS = [
  {
    q: "Which organism is the causative agent of Amoebiasis (Amoebic Dysentery)?",
    opts: ["Entamoeba histolytica", "Plasmodium vivax", "Anopheles stephensi", "Gambusia affinis"],
    ans: 0,
    exp: "Amoebiasis is caused by Entamoeba histolytica, a protozoan parasite that infects the human intestine."
  },
  {
    q: "What causes the characteristic shivering cold and high fever attacks in Malaria?",
    opts: ["Release of Sporozoites in liver", "Release of toxic Haemozoin upon RBC rupture", "Exflagellation in mosquito gut", "Ookinete penetration of gut wall"],
    ans: 1,
    exp: "When schizonts burst inside RBCs, merozoites and toxic haemozoin (malarial pigment) are released into blood plasma, causing shivering chills and fever."
  },
  {
    q: "Why is the male Anopheles mosquito non-infective to humans?",
    opts: ["It lacks salivary glands", "It feeds exclusively on plant juice/nectar", "It carries non-pathogenic sporozoites", "It cannot survive human body temperature"],
    ans: 1,
    exp: "Only female Anopheles mosquitoes suck human blood (required for egg development). Male Anopheles feed on plant juices."
  },
  {
    q: "What is the only diploid (2n) stage in the entire life cycle of Plasmodium?",
    opts: ["Sporozoite", "Trophozoite", "Zygote / Ookinete", "Cryptozoite"],
    ans: 2,
    exp: "All stages of Plasmodium are haploid (n) except the Zygote/Ookinete (2n), which undergoes meiotic division during sporogony to restore haploidy."
  },
  {
    q: "Which stage of Plasmodium is infective to humans upon mosquito bite?",
    opts: ["Merozoite", "Sporozoite", "Metacryptomerozoite", "Oocyst"],
    ans: 1,
    exp: "Sporozoites residing in the salivary glands of female Anopheles are injected into human blood during a bite."
  },
  {
    q: "Exflagellation is the process of forming male gametes from which cell type?",
    opts: ["Microgametocyte", "Megagametocyte", "Trophozoite", "Ookinete"],
    ans: 0,
    exp: "Microgametocytes undergo exflagellation in the mosquito gut to produce 8 flagellated male gametes (sperms)."
  },
  {
    q: "Quinine, the effective antimalarial drug, is extracted from the bark of which tree?",
    opts: ["Cinchona calisaya", "Azadirachta indica", "Eucalyptus globulus", "Pinus roxburghii"],
    ans: 0,
    exp: "Quinine is an alkaloid drug extracted from the bark of Cinchona calisaya (Cinchona tree)."
  },
  {
    q: "Which larvivorous fish is commonly introduced into water bodies to control mosquito larvae?",
    opts: ["Labeo rohita", "Gambusia", "Catla catla", "Clarias batrachus"],
    ans: 1,
    exp: "Gambusia (mosquito fish), minnows, and trouts feed on mosquito larvae and provide biological vector control."
  }
];

// --- APP STATE ---
let currentSlideIndex = 0;
let autoPlayTimer = null;
let currentCycleStep = 0;
let activeHostFilter = 'all';
let quizCurrentIndex = 0;
let quizScore = 0;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  try {
    initNavigation();
    initSlideDeck();
    initInteractiveCycle();
    initTextbookDiagram();
    initMindMap();
    initQuizAndGlossary();
    initKeyboardControls();
  } catch (err) {
    console.error("App Initialization Error:", err);
  }
});

// --- NAVIGATION BETWEEN MODES ---
function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      switchAppMode(mode);
    });
  });

  const fullBtn = document.getElementById("toggle-fullscreen");
  if (fullBtn) {
    fullBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
      } else {
        document.exitFullscreen().catch(err => console.log(err));
      }
    });
  }

  const openIntBtn = document.getElementById("open-interactive-from-slide");
  if (openIntBtn) {
    openIntBtn.addEventListener("click", () => {
      switchAppMode('interactive-cycle');
    });
  }

  const quickMmBtn = document.getElementById("quick-mm-modal-btn");
  if (quickMmBtn) {
    quickMmBtn.addEventListener("click", () => {
      openMindMapModal();
    });
  }

  const closeModalBtn = document.getElementById("close-mm-modal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      document.getElementById("mm-modal").classList.remove("active");
    });
  }
}

function switchAppMode(mode) {
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.mode === mode);
  });

  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  const targetView = document.getElementById(`${mode}-view`);
  if (targetView) {
    targetView.classList.add("active");
  }

  if (mode === 'mindmap') {
    renderMindMap('main-mindmap-canvas');
  }
}

// --- SLIDE DECK LOGIC ---
function initSlideDeck() {
  renderSidebarList();
  renderSlide(currentSlideIndex);

  document.getElementById("prev-slide-btn").addEventListener("click", prevSlide);
  document.getElementById("next-slide-btn").addEventListener("click", nextSlide);

  const autoBtn = document.getElementById("autoplay-btn");
  if (autoBtn) {
    autoBtn.addEventListener("click", () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
        autoBtn.innerHTML = `<i class="fa-solid fa-play"></i> Auto Play`;
        autoBtn.classList.remove("primary");
      } else {
        autoPlayTimer = setInterval(() => {
          nextSlide();
        }, 5000);
        autoBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
        autoBtn.classList.add("primary");
      }
    });
  }

  renderMiniMindMapPreview();
}

function renderSidebarList() {
  const listEl = document.getElementById("slide-list-items");
  if (!listEl) return;
  listEl.innerHTML = "";

  SLIDES.forEach((slide, idx) => {
    const li = document.createElement("li");
    li.className = `slide-list-item ${idx === currentSlideIndex ? 'active' : ''}`;
    li.innerHTML = `
      <span class="slide-num">${slide.id}</span>
      <span class="slide-title-preview">${slide.title.replace(/<[^>]*>?/gm, '')}</span>
    `;
    li.addEventListener("click", () => {
      currentSlideIndex = idx;
      renderSlide(currentSlideIndex);
    });
    listEl.appendChild(li);
  });

  document.getElementById("total-slides-num").textContent = SLIDES.length;
}

function renderSlide(index) {
  const slide = SLIDES[index];
  const container = document.getElementById("slide-content");
  if (!container) return;

  container.innerHTML = `
    <span class="slide-tag">${slide.tag}</span>
    <h2 class="slide-heading">${slide.title}</h2>
    <div class="slide-body">${slide.content}</div>
  `;

  document.getElementById("current-slide-num").textContent = index + 1;
  document.getElementById("sidebar-slide-count").textContent = `${index + 1} / ${SLIDES.length}`;

  const items = document.querySelectorAll(".slide-list-item");
  items.forEach((it, i) => it.classList.toggle("active", i === index));

  if (index === 11) {
    renderMindMap("slide-12-mindmap-box");
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide(currentSlideIndex);
  }
}

function nextSlide() {
  if (currentSlideIndex < SLIDES.length - 1) {
    currentSlideIndex++;
    renderSlide(currentSlideIndex);
  } else if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    const autoBtn = document.getElementById("autoplay-btn");
    if (autoBtn) autoBtn.innerHTML = `<i class="fa-solid fa-play"></i> Auto Play`;
  }
}

// --- INTERACTIVE LIFE CYCLE SIMULATOR ---
function initInteractiveCycle() {
  renderCycleSvgDiagram();
  renderCycleStepDetail(currentCycleStep);

  document.getElementById("cycle-prev-step").addEventListener("click", () => {
    if (currentCycleStep > 0) {
      currentCycleStep--;
      updateCycleStepState();
    }
  });

  document.getElementById("cycle-next-step").addEventListener("click", () => {
    if (currentCycleStep < LIFE_CYCLE_STAGES.length - 1) {
      currentCycleStep++;
      updateCycleStepState();
    }
  });

  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeHostFilter = chip.dataset.host;
      renderCycleSvgDiagram();
    });
  });
}

function updateCycleStepState() {
  renderCycleStepDetail(currentCycleStep);
  highlightSvgNodes();
}

function renderCycleSvgDiagram() {
  const container = document.getElementById("interactive-svg-container");
  if (!container) return;
  
  let svgContent = `
    <svg width="100%" height="100%" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
        </marker>
        <linearGradient id="manGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
        </linearGradient>
        <linearGradient id="mosqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#e11d48" stop-opacity="0.05"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Background Region Divide -->
      <rect x="20" y="240" width="760" height="220" rx="16" fill="url(#manGrad)" stroke="rgba(6, 182, 212, 0.3)" stroke-dasharray="4,4"/>
      <text x="40" y="270" fill="#06b6d4" font-family="Outfit" font-size="14" font-weight="700">HOST 1: MAN (Asexual Phase / Intracellular)</text>

      <rect x="20" y="20" width="760" height="200" rx="16" fill="url(#mosqGrad)" stroke="rgba(244, 63, 94, 0.3)" stroke-dasharray="4,4"/>
      <text x="40" y="50" fill="#f43f5e" font-family="Outfit" font-size="14" font-weight="700">HOST 2: MOSQUITO (Sexual Phase / Extracellular)</text>

      <!-- Connecting Cycle Arrows -->
      <path d="M 120, 180 L 120, 260" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
      <text x="130" y="225" fill="#10b981" font-size="11" font-weight="600">Mosquito Bite (Sporozoites to Man)</text>

      <path d="M 680, 260 L 680, 180" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4"/>
      <text x="540" y="225" fill="#f59e0b" font-size="11" font-weight="600">Blood Meal (Gametocytes to Mosquito)</text>
  `;

  const nodeCoords = [
    { id: 1, x: 120, y: 280, title: "Sporozoites", host: "man" },
    { id: 2, x: 230, y: 310, title: "Pre-erythrocytic", host: "man" },
    { id: 3, x: 340, y: 340, title: "Exo-erythrocytic", host: "man" },
    { id: 4, x: 450, y: 360, title: "Signet Ring", host: "man" },
    { id: 5, x: 550, y: 360, title: "Amoeboid Stage", host: "man" },
    { id: 6, x: 640, y: 340, title: "Erythrocytic Schizogony", host: "man" },
    { id: 7, x: 680, y: 280, title: "Gametocytes", host: "man" },
    { id: 8, x: 600, y: 140, title: "Exflagellation", host: "mosquito" },
    { id: 9, x: 450, y: 100, title: "Ookinete (2n)", host: "mosquito" },
    { id: 10, x: 300, y: 100, title: "Encysted Oocyst", host: "mosquito" },
    { id: 11, x: 160, y: 140, title: "Sporogony & Salivary Glands", host: "mosquito" }
  ];

  let pathStr = "M 120, 280 L 230, 310 L 340, 340 L 450, 360 L 550, 360 L 640, 340 L 680, 280 L 600, 140 L 450, 100 L 300, 100 L 160, 140 Z";
  svgContent += `<path d="${pathStr}" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2" />`;

  nodeCoords.forEach(n => {
    const isFiltered = activeHostFilter !== 'all' && activeHostFilter !== n.host;
    const opacity = isFiltered ? "0.2" : "1";

    svgContent += `
      <g class="cycle-svg-node" data-step="${n.id - 1}" style="cursor:pointer; opacity:${opacity};" onclick="selectCycleStep(${n.id - 1})">
        <circle id="svg-node-circle-${n.id - 1}" cx="${n.x}" cy="${n.y}" r="22" fill="#131c2e" stroke="${n.host === 'man' ? '#06b6d4' : '#f43f5e'}" stroke-width="3" />
        <text x="${n.x}" y="${n.y + 4}" fill="#fff" font-size="11" font-weight="700" text-anchor="middle">${n.id}</text>
        <text x="${n.x}" y="${n.y + 36}" fill="#cbd5e1" font-size="10" font-weight="500" text-anchor="middle">${n.title}</text>
      </g>
    `;
  });

  svgContent += `</svg>`;
  container.innerHTML = svgContent;
  highlightSvgNodes();
}

function selectCycleStep(stepIdx) {
  currentCycleStep = stepIdx;
  updateCycleStepState();
}

function highlightSvgNodes() {
  LIFE_CYCLE_STAGES.forEach((st, idx) => {
    const circle = document.getElementById(`svg-node-circle-${idx}`);
    if (circle) {
      if (idx === currentCycleStep) {
        circle.setAttribute("fill", "#10b981");
        circle.setAttribute("stroke", "#ffffff");
        circle.setAttribute("r", "26");
        circle.setAttribute("filter", "url(#glow)");
      } else {
        circle.setAttribute("fill", "#131c2e");
        circle.setAttribute("stroke", st.host === 'man' ? '#06b6d4' : '#f43f5e');
        circle.setAttribute("r", "22");
        circle.removeAttribute("filter");
      }
    }
  });
}

function renderCycleStepDetail(stepIdx) {
  const stage = LIFE_CYCLE_STAGES[stepIdx];
  const panel = document.getElementById("cycle-detail-panel");
  if (!panel) return;

  document.getElementById("cycle-active-step-label").textContent = stage.name;

  panel.innerHTML = `
    <div class="stage-badge-row">
      <span class="host-badge ${stage.host === 'man' ? 'man' : 'mosquito'}">
        <i class="fa-solid ${stage.host === 'man' ? 'fa-user' : 'fa-bug'}"></i> Host: ${stage.host.toUpperCase()}
      </span>
      <span class="badge-tag"><i class="fa-solid fa-clock"></i> ${stage.duration}</span>
    </div>
    
    <h3 class="stage-title">${stage.title}</h3>
    
    <p style="font-size:0.98rem; color:#cbd5e1;">${stage.desc}</p>
    
    <div class="term-highlight-box">
      <h5><i class="fa-solid fa-key"></i> Key Textbook Term: ${stage.keyTerm}</h5>
      <p>${stage.keyTermDef}</p>
    </div>

    <div class="info-card accent-emerald" style="padding:14px;">
      <h5 style="color:var(--emerald-primary); font-size:0.85rem;"><i class="fa-solid fa-location-dot"></i> Anatomical Site</h5>
      <p style="font-size:0.9rem; color:#fff;">${stage.location}</p>
    </div>
  `;
}

// --- TEXTBOOK FIG 9.3 DIAGRAM VIEW ---
function initTextbookDiagram() {
  const board = document.getElementById("fig-9-3-board");
  if (!board) return;
  
  board.innerHTML = `
    <div class="fig-9-3-layout" style="width:100%; max-width:850px; display:flex; flex-direction:column; gap:20px; text-align:center;">
      <div style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); border-radius:12px; padding:12px;">
        <h4 style="color:var(--emerald-primary); margin-bottom:8px;"><i class="fa-solid fa-image"></i> Textbook Fig 9.3 Visual Diagram</h4>
        <img src="assets/plasmodium_diagram.jpg" alt="Plasmodium Life Cycle Diagram" style="width:100%; max-height:240px; object-fit:contain; border-radius:8px;">
      </div>

      <div style="background:rgba(244, 63, 94, 0.1); border:1px solid rgba(244, 63, 94, 0.3); border-radius:12px; padding:16px;">
        <h4 style="color:#f43f5e; margin-bottom:8px;"><i class="fa-solid fa-bug"></i> SEXUAL CYCLE IN MOSQUITO (EXTRACELLULAR)</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px;">
          <div class="hotspot-card" onclick="updateFigInfo('Oocyst Formation', 'The ookinete penetrates through gut wall and encysts on outer stomach wall as an oocyst, undergoing sporogony.')">
            <strong>Oocyst</strong><br><small>Outer gut wall</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Zygote / Ookinete', 'Diploid fertilised structure (15-20 µm) that becomes motile and penetrates gut wall.')">
            <strong>Ookinete (2n)</strong><br><small>Gut lining</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Fertilisation', 'Fusion of flagellated microgamete and megagamete at fertilisation cone in mosquito gut.')">
            <strong>Fertilisation</strong><br><small>Syngamy</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Gametogony', 'Exflagellation produces 8 flagellated sperms from microgametocytes.')">
            <strong>Gametogony</strong><br><small>Exflagellation</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Salivary Sporozoites', 'Rupture of oocyst releases sporozoites into haemocoel, migrating to salivary glands.')">
            <strong>Sporozoites</strong><br><small>Salivary glands</small>
          </div>
        </div>
      </div>

      <div style="font-size:1.1rem; font-weight:700; color:var(--emerald-primary);">
        <i class="fa-solid fa-arrows-up-down"></i> Mosquito Bite & Blood Meal Exchange
      </div>

      <div style="background:rgba(6, 182, 212, 0.1); border:1px solid rgba(6, 182, 212, 0.3); border-radius:12px; padding:16px;">
        <h4 style="color:#06b6d4; margin-bottom:8px;"><i class="fa-solid fa-user"></i> ASEXUAL CYCLE IN MAN (INTRACELLULAR)</h4>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px;">
          <div class="hotspot-card" onclick="updateFigInfo('Pre- & Exo- Liver Schizogony', 'Sporozoites enter liver cells forming cryptozoites and metacryptomerozoites.')">
            <strong>Liver Schizogony</strong><br><small>Hepatocytes</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Signet Ring Stage', 'Trophozoite develops central vacuole in RBC, pushing nucleus to side. Forms haemozoin.')">
            <strong>Signet Ring</strong><br><small>RBC Trophozoite</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Amoeboid & Schuffner\'s', 'Trophozoite becomes amoeboid; RBC cytoplasm shows red Schuffner\'s granules.')">
            <strong>Amoeboid Stage</strong><br><small>Schuffner\'s granules</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Erythrocytic Schizont', 'Schizont divides into 16-24 merozoites; RBC bursts releasing haemozoin causing fever.')">
            <strong>Erythrocytic Schizogony</strong><br><small>48h cycle</small>
          </div>
          <div class="hotspot-card" onclick="updateFigInfo('Gametocytosis', 'Merozoites form rounded microgametocytes (male) and megagametocytes (female).')">
            <strong>Gametocytes</strong><br><small>In human RBCs</small>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateFigInfo(title, text) {
  const titleEl = document.getElementById("fig-info-title");
  const textEl = document.getElementById("fig-info-text");
  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = text;
}

// --- MIND MAP LOGIC ---
function initMindMap() {
  renderMindMap('main-mindmap-canvas');
}

function renderMindMap(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = `
    <div class="mm-tree-root">
      <div class="mm-node-center">
        <i class="fa-solid fa-microscope"></i> PROTOZOAN DISEASES (ISC BIOLOGY)
      </div>

      <div class="mm-branches">
        <!-- Branch 1: Amoebiasis -->
        <div class="mm-branch-card">
          <div class="mm-branch-header">
            <i class="fa-solid fa-bacterium"></i> 1. Amoebiasis (Dysentery)
          </div>
          <ul class="mm-subitems">
            <li><strong>Causative Agent:</strong> Entamoeba histolytica (Protozoan parasite).</li>
            <li><strong>Transmission:</strong> Food/water contaminated with amoebic cysts & dirty hands.</li>
            <li><strong>Symptoms:</strong> Abdominal pain, burning, cramps, mucous & blood clots in stools.</li>
            <li><strong>Prevention:</strong> Wash hands (10s+), avoid raw veggies in endemic areas, boil water.</li>
            <li><strong>Treatment:</strong> Metronidazole / Tinidazole + Luminal agents (Paromomycin, Diloxanide).</li>
          </ul>
        </div>

        <!-- Branch 2: Malaria Overview -->
        <div class="mm-branch-card">
          <div class="mm-branch-header">
            <i class="fa-solid fa-mosquito"></i> 2. Malaria Overview
          </div>
          <ul class="mm-subitems">
            <li><strong>Causative Agent:</strong> Plasmodium (4 species: vivax, falciparum, malariae, ovale).</li>
            <li><strong>Vector Host:</strong> Female Anopheles mosquito (salivary sporozoites).</li>
            <li><strong>Symptoms:</strong> 3-stage attack (Cold shivering, Hot fever, Sweating drop).</li>
            <li><strong>Post-cure:</strong> Anemia, weakness, liver & spleen enlargement.</li>
            <li><strong>Control:</strong> Quinine (extracted from Cinchona calisaya bark).</li>
          </ul>
        </div>

        <!-- Branch 3: Plasmodium Life Cycle in Man -->
        <div class="mm-branch-card">
          <div class="mm-branch-header">
            <i class="fa-solid fa-user"></i> 3. Life Cycle in Man (Asexual)
          </div>
          <ul class="mm-subitems">
            <li><strong>Host Status:</strong> Primary Host (Intracellular inside cells).</li>
            <li><strong>Liver Schizogony:</strong> Sporozoite -> Cryptozoite -> Cryptomerozoite -> Metacryptomerozoite.</li>
            <li><strong>Erythrocytic Schizogony:</strong> Signet Ring -> Amoeboid (Schuffner's granules) -> Schizont -> Merozoites.</li>
            <li><strong>Toxic Release:</strong> Haemozoin pigment release causes 48h fever chills.</li>
            <li><strong>Gametocytosis:</strong> Forms male microgametocytes & female megagametocytes.</li>
          </ul>
        </div>

        <!-- Branch 4: Plasmodium Life Cycle in Mosquito -->
        <div class="mm-branch-card">
          <div class="mm-branch-header">
            <i class="fa-solid fa-bug"></i> 4. Life Cycle in Mosquito (Sexual)
          </div>
          <ul class="mm-subitems">
            <li><strong>Host Status:</strong> Secondary Host & Vector (Extracellular in gut & cavities).</li>
            <li><strong>Gametogenesis:</strong> Temperature drop stimulus; Exflagellation forms 8 male sperms.</li>
            <li><strong>Syngamy:</strong> Fertilisation cone -> Diploid motile Ookinete (15-20 µm).</li>
            <li><strong>Encystment:</strong> Penetrates gut wall -> Oocyst.</li>
            <li><strong>Sporogony:</strong> Meiosis + repeated mitosis -> thousands of Sporozoites in salivary glands.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderMiniMindMapPreview() {
  const container = document.getElementById("sidebar-mm-preview");
  if (container) {
    container.innerHTML = `
      <div style="font-size:0.75rem; color:var(--emerald-primary); text-align:center; padding:10px; cursor:pointer;" onclick="openMindMapModal()">
        <i class="fa-solid fa-sitemap fa-2x"></i><br>
        <strong>Protozoan Diseases Tree</strong><br>
        <span style="color:var(--text-sub);">Click to expand Mind Map</span>
      </div>
    `;
  }
}

function openMindMapModal() {
  const modal = document.getElementById("mm-modal");
  if (modal) {
    renderMindMap("modal-mm-container");
    modal.classList.add("active");
  }
}

// --- STUDENT QUIZ & GLOSSARY LOGIC ---
function initQuizAndGlossary() {
  const tabBtns = document.querySelectorAll(".quiz-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tabId = btn.dataset.tab;
      document.querySelectorAll(".quiz-tab-content").forEach(tc => tc.classList.remove("active"));
      const target = document.getElementById(`${tabId}-tab`);
      if (target) target.classList.add("active");
    });
  });

  renderQuizQuestion(quizCurrentIndex);
  renderGlossary(GLOSSARY_DATA);

  const searchInp = document.getElementById("glossary-search-input");
  if (searchInp) {
    searchInp.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = GLOSSARY_DATA.filter(g => g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q));
      renderGlossary(filtered);
    });
  }
}

function renderQuizQuestion(index) {
  const q = QUIZ_QUESTIONS[index];
  const body = document.getElementById("quiz-question-body");
  if (!body) return;

  const numEl = document.getElementById("quiz-q-num");
  const scoreEl = document.getElementById("quiz-score");
  const progEl = document.getElementById("quiz-progress");

  if (numEl) numEl.textContent = `Question ${index + 1} of ${QUIZ_QUESTIONS.length}`;
  if (scoreEl) scoreEl.textContent = `Score: ${quizScore}`;
  if (progEl) progEl.style.width = `${((index + 1) / QUIZ_QUESTIONS.length) * 100}%`;

  body.innerHTML = `
    <h3 class="quiz-question-text">${q.q}</h3>
    <div class="quiz-options-list">
      ${q.opts.map((opt, i) => `
        <button class="quiz-opt-btn" onclick="handleQuizAnswer(${i})">
          <span>${String.fromCharCode(65 + i)}. ${opt}</span>
          <i class="fa-regular fa-circle"></i>
        </button>
      `).join("")}
    </div>
    <div id="quiz-explanation" class="quiz-explanation-box" style="display:none; margin-top:16px;">
      <strong>Explanation:</strong> ${q.exp}
    </div>
    <div style="margin-top:16px; display:flex; justify-content:flex-end;">
      <button id="quiz-next-btn" class="btn-sm primary" style="display:none;" onclick="nextQuizQuestion()">Next Question <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;
}

function handleQuizAnswer(selectedIdx) {
  const q = QUIZ_QUESTIONS[quizCurrentIndex];
  const optBtns = document.querySelectorAll(".quiz-opt-btn");

  optBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) {
      btn.classList.add("correct");
      btn.querySelector("i").className = "fa-solid fa-circle-check";
    }
    if (i === selectedIdx && selectedIdx !== q.ans) {
      btn.classList.add("incorrect");
      btn.querySelector("i").className = "fa-solid fa-circle-xmark";
    }
  });

  if (selectedIdx === q.ans) {
    quizScore += 10;
    const scoreEl = document.getElementById("quiz-score");
    if (scoreEl) scoreEl.textContent = `Score: ${quizScore}`;
  }

  const expBox = document.getElementById("quiz-explanation");
  const nextBtn = document.getElementById("quiz-next-btn");
  if (expBox) expBox.style.display = "block";
  if (nextBtn) nextBtn.style.display = "inline-flex";
}

function nextQuizQuestion() {
  if (quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
    quizCurrentIndex++;
    renderQuizQuestion(quizCurrentIndex);
  } else {
    const body = document.getElementById("quiz-question-body");
    if (body) {
      body.innerHTML = `
        <div style="text-align:center; padding:30px;">
          <i class="fa-solid fa-trophy fa-3x" style="color:var(--gold-accent); margin-bottom:12px;"></i>
          <h3 class="quiz-question-text">Quiz Completed!</h3>
          <p style="font-size:1.1rem; margin-top:8px;">Your Total Score: <strong style="color:var(--emerald-primary);">${quizScore} / ${QUIZ_QUESTIONS.length * 10}</strong></p>
          <button class="btn-sm primary" style="margin-top:20px;" onclick="restartQuiz()"><i class="fa-solid fa-rotate"></i> Retake Quiz</button>
        </div>
      `;
    }
  }
}

function restartQuiz() {
  quizCurrentIndex = 0;
  quizScore = 0;
  renderQuizQuestion(0);
}

function renderGlossary(data) {
  const container = document.getElementById("glossary-grid-container");
  if (!container) return;
  container.innerHTML = data.map(item => `
    <div class="glossary-card">
      <div class="glossary-term">${item.term}</div>
      <div class="glossary-def">${item.def}</div>
    </div>
  `).join("");
}

// --- KEYBOARD NAVIGATION ---
function initKeyboardControls() {
  document.addEventListener("keydown", (e) => {
    const presView = document.getElementById("presentation-view");
    if (presView && presView.classList.contains("active")) {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    }
  });
}
