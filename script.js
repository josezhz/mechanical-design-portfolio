"use strict";

const projects = {
  underwater: {
    label: "01 / Robotics / AUV subsystem design",
    title: "AUV: soft gripper & hydrophone unit",
    intro: "For this autonomous underwater vehicle (AUV), I designed the soft gripper and hydrophone unit. The CAD views present my subsystem designs in the context of the complete vehicle assembly.",
    contribution: "Design of the soft gripper and hydrophone unit.",
    tags: ["Soft gripper design", "Hydrophone unit design", "AUV subsystems"],
    media: [
      { label: "Front assembly", type: "cad", src: "assets/underwater-front.png", alt: "Front isometric view of an AUV with distributed thrusters and a soft gripper", caption: "Front isometric view of the complete AUV, including the front-mounted soft gripper I designed." },
      { label: "Underside assembly", type: "cad", src: "assets/underwater-underside.png", alt: "Underside view revealing equipment enclosures, thrusters and lower frame", caption: "Underside view: component mounting and the arrangement of equipment beneath the primary frame." }
    ],
    sections: [
      { title: "My design responsibilities", items: ["Soft gripper — mechanical design.", "Hydrophone unit — mechanical design."] },
      { title: "What the views show", items: ["Distributed thruster mounts around the external frame.", "Cylindrical and rectangular equipment enclosures.", "The soft gripper and supporting mechanism integrated below the body."] },
      { title: "Mechanical considerations", text: "The layout invites review of mounting interfaces, access to internal equipment, gripper clearance and the space required by each thruster. These are considerations for further design development." },
      { title: "Project material", text: "Two SolidWorks assembly screenshots. The imagery records the assembly configuration; underwater test results and detailed performance data are not part of this preliminary case study." }
    ],
    note: "My contribution to the AUV project was the design of the soft gripper and hydrophone unit. The complete vehicle assembly is shown to provide context for those designs.",
    links: [{label:"Open original front view",href:"assets/underwater-front.png"}]
  },
  solar: {
    label: "02 / Mechanisms / Motion study",
    title: "Deployable solar array",
    intro: "A folding panel assembly built around a repeating hinged frame. Expanded and folded configurations explore the relationship between panel arrangement, supporting links and the platform below.",
    tags: ["Deployable mechanism", "Repeated linkages", "CAD motion study"],
    media: [
      { label: "Unfold–fold loop", type: "gif", src: "assets/solar-unfold-fold.gif", poster: "assets/solar-loop-poster.png", alt: "Solar-panel mechanism unfolding and folding in a continuous loop", caption: "Continuous unfold–fold cycle, approximately 8 seconds. The original motion plays forward and then backward; the upper view shows the frame and the lower view includes the panels." },
      { label: "Expanded", type: "cad", src: "assets/solar-expanded.png", alt: "Expanded array of blue solar panels supported above a quadrotor frame", caption: "Expanded configuration: repeated panels form a broad surface above the supporting platform." },
      { label: "Folded", type: "cad", src: "assets/solar-folded.png", alt: "Folded panel array revealing the linked frame and quadrotor platform", caption: "Folded configuration: alternating panel orientations reveal the linkage structure and the platform beneath it." },
      { label: "Play motion study", type: "video", src: "assets/solar-panel-unit.mp4", poster: "assets/solar-video-preview.png", alt: "Animation of the folding frame and corresponding solar-panel movement", caption: "Motion study, approximately 4 seconds. The upper view isolates the frame; the lower view includes the panels. Use the player controls to play, pause or scrub." }
    ],
    sections: [
      { title: "Design focus", text: "Link the motion of repeated structural units so that the panel array can be examined in expanded and folded states. The frame and panel views make the movement easier to inspect at two levels of detail." },
      { title: "What to look for", items: ["Relative rotation of adjacent panel units.", "The linked frame beneath the panel surface.", "The relationship between deployed area and the folded configuration."] },
      { title: "Motion as a design tool", text: "The animation complements the still images by showing the transition between configurations. It provides a visual basis for later checks of clearances, hinge travel and actuation requirements." },
      { title: "Project material", text: "Two CAD configuration views and a short assembly animation. Power generation, deployed stiffness and flight-endurance measurements are outside the supplied material." }
    ],
    links: [{label:"Open unfolding & folding GIF",href:"assets/solar-unfold-fold.gif"},{label:"Open original motion study",href:"assets/solar-panel-unit.mp4"}]
  },
  aircraft: {
    label: "03 / Aerospace / CAD & structural analysis",
    title: "X-525 aircraft design",
    intro: "A preliminary aircraft design study connecting overall layout and control surfaces with the wing and fuselage structures. The report documents the geometry, structural configuration, modelling assumptions and finite element results.",
    tags: ["Aircraft layout", "Structural design", "ANSYS Mechanical APDL"],
    media: [
      { label: "Aircraft animation", type: "video", autoplay: true, src: "assets/x-525.mp4", poster: "assets/aircraft-preview.png", alt: "Looping turntable animation of the X-525 aircraft model", caption: "The aircraft animation plays automatically in a muted loop. Use the player controls to pause or inspect a particular view." },
      { label: "Aircraft render", type: "image", src: "assets/aircraft-preview.png", alt: "X-525 aircraft CAD model showing twin engines, swept wings and landing gear", caption: "X-525 CAD model. This image is a frame from the supplied aircraft animation." },
      { label: "Three-view drawing", type: "drawing", src: "assets/aircraft-drawing.png", alt: "Page 2 of the design report showing dimensioned side, front and plan views of the X-525", caption: "Three-view drawing from page 2 of the aircraft report. Open the PDF for the full-resolution drawing and dimensions." }
    ],
    sections: [
      { title: "Wing configuration", text: "The report specifies a two-spar wing with T-section spars and Z-section stringers, using 2024-T42 aluminium. The front spar is at 25% chord; the rear spar is 35% chord forward of the trailing edge." },
      { title: "Wing analysis", text: "A fixed-root model uses concentrated loads at rib positions to represent the 2.5g loading case. The reported maximum tip displacement is 2.733 m. The study identifies a critical stress region near the front-spar root." },
      { title: "Fuselage configuration", text: "The report describes frames spaced at 1 m and 24 longerons at 15° intervals. The model uses aluminium frames and longerons with carbon-fibre fabric skin properties." },
      { title: "Fuselage analysis", text: "A 5 m quarter-section model uses two symmetry planes and a 0.2 m global mesh size. Under the report’s pressurization case, the stated maximum displacement is less than 0.6 mm." }
    ],
    note: "Values above are reported simulation outputs, not measured performance or certification evidence. Their interpretation depends on the report’s geometry, material assumptions, boundary conditions and loading. Source: Aircraft Design_Zhang Haozhe.pdf, pp. 3–9.",
    links: [{label:"Read the design report · PDF",href:"assets/aircraft-design-report.pdf"},{label:"Open aircraft animation",href:"assets/x-525.mp4"}]
  },
  micro: {
    label: "04 / Robotics / Hardware iterations",
    title: "Micro-drone iterations",
    intro: "A visual comparison of two compact drone configurations. The labelled photographs document changes in the propulsion hardware, battery support and arrangement of flight electronics.",
    tags: ["Component integration", "V1 / V2 comparison", "Compact hardware"],
    media: [
      { label: "V1 & V2 comparison", type: "micro", src: "assets/micro-drone-comparison.png", alt: "Six labelled photos: V1 brushed-motor micro-drone with IR LEDs and 1S LiPo battery; V2 brushless-motor drone with ESP32 receiver and flight controller", caption: "Top row (a–c): V1. Bottom row (d–f): V2. Labels are retained from the supplied comparison figure." }
    ],
    sections: [
      { title: "V1 configuration", items: ["Brushed motors.", "IR LEDs with a labelled battery and LED holder.", "1S LiPo battery shown on the underside."] },
      { title: "V2 configuration", items: ["Brushless motors.", "ESP32 receiver and flight controller.", "Revised frame and battery arrangement visible from above and below."] },
      { title: "Integration focus", text: "The comparison makes changes to the mechanical layout visible: motor mounting, electronics placement, the central frame and battery support. These interfaces are central to the packaging of compact flying hardware." },
      { title: "Project material", text: "One annotated comparison figure covering both versions. The figure supports a hardware-layout comparison; no quantitative flight-performance comparison is provided." }
    ],
    note: "Figure labels and version names are preserved as supplied. Detailed individual contributions and project credits remain to be added.",
    links: [{label:"Open comparison figure",href:"assets/micro-drone-comparison.png"}]
  }
};

const dialog = document.getElementById("project-dialog");
const content = document.getElementById("dialog-content");
let opener = null;
let currentProject = null;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setMotionPaused(media, button, paused) {
  media.dataset.motionPaused = String(paused);
  button.textContent = paused ? "Play motion" : "Pause motion";
  button.setAttribute("aria-label", `${paused ? "Play" : "Pause"} ${button.dataset.motionName}`);
  if (media.tagName === "VIDEO") {
    media.muted = true;
    if (paused) media.pause();
    else media.play().catch(() => setMotionPaused(media, button, true));
  } else {
    media.src = paused ? media.dataset.motionPoster : media.dataset.motionSrc;
  }
}

function initializeMotion(scope = document) {
  scope.querySelectorAll("[data-motion-target]").forEach(button => {
    if (button.dataset.motionBound) return;
    const media = document.getElementById(button.dataset.motionTarget);
    if (!media) return;
    button.dataset.motionBound = "true";
    button.addEventListener("click", () => setMotionPaused(media, button, media.dataset.motionPaused !== "true"));
    setMotionPaused(media, button, reducedMotion.matches);
  });
}

reducedMotion.addEventListener("change", () => {
  document.querySelectorAll("[data-motion-target]").forEach(button => {
    const media = document.getElementById(button.dataset.motionTarget);
    if (media) setMotionPaused(media, button, reducedMotion.matches);
  });
  dialog.querySelectorAll("video[data-auto-motion]").forEach(video => {
    if (reducedMotion.matches) video.pause();
    else video.play().catch(() => {});
  });
});

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function showMedia(index) {
  const media = currentProject.media[index];
  const stage = document.getElementById("media-stage");
  stage.querySelectorAll("video").forEach(video => video.pause());
  stage.replaceChildren();
  if (media.type === "video") {
    const video = element("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = media.poster;
    video.setAttribute("aria-label", media.alt);
    if (media.autoplay) {
      video.dataset.autoMotion = "true";
      video.muted = true;
      video.loop = true;
      video.autoplay = !reducedMotion.matches;
    }
    const source = element("source");
    source.src = media.src;
    source.type = "video/mp4";
    video.append(source, document.createTextNode("Your browser does not support embedded video. Use the direct video link below."));
    stage.append(video);
    if (media.autoplay && !reducedMotion.matches) video.play().catch(() => {});
  } else if (media.type === "gif") {
    const motion = element("div", "dialog-motion");
    const image = element("img");
    image.id = "dialog-solar-loop";
    image.src = media.src;
    image.alt = media.alt;
    image.dataset.motionSrc = media.src;
    image.dataset.motionPoster = media.poster;
    const button = element("button", "motion-toggle", "Pause motion");
    button.type = "button";
    button.dataset.motionTarget = image.id;
    button.dataset.motionName = "solar panel animation";
    motion.append(image, button);
    stage.append(motion);
    initializeMotion(motion);
  } else {
    const image = element("img");
    image.src = media.src;
    image.alt = media.alt;
    if (media.type === "cad") {
      const crop = element("div", "cad-crop");
      crop.append(image);
      stage.append(crop);
    } else {
      if (media.type === "drawing") image.className = "drawing-view";
      if (media.type === "micro") image.className = "micro-view";
      stage.append(image);
    }
  }
  document.getElementById("gallery-caption").textContent = media.caption;
  document.querySelectorAll("[data-media-index]").forEach(button => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.mediaIndex) === index));
  });
}

function openProject(key, source) {
  const project = projects[key];
  if (!project) return;
  opener = source;
  currentProject = project;
  content.replaceChildren();
  document.getElementById("dialog-label").textContent = project.label;
  const heading = element("div", "dialog-heading");
  const title = element("h2", "", project.title);
  title.id = "dialog-title";
  heading.append(title, element("p", "", project.intro));
  const tags = element("div", "project-tags");
  project.tags.forEach(tag => tags.append(element("span", "", tag)));
  const stage = element("div", "media-stage");
  stage.id = "media-stage";
  const controls = element("div", "gallery-controls");
  controls.setAttribute("role", "group");
  controls.setAttribute("aria-label", "Project views");
  if (project.media.length > 1) project.media.forEach((media, index) => {
    const button = element("button", "", media.label);
    button.type = "button";
    button.dataset.mediaIndex = String(index);
    button.setAttribute("aria-controls", "media-stage");
    button.addEventListener("click", () => showMedia(index));
    controls.append(button);
  });
  const caption = element("p", "gallery-caption");
  caption.id = "gallery-caption";
  caption.setAttribute("aria-live", "polite");
  const grid = element("div", "detail-grid");
  project.sections.forEach(section => {
    const article = element("section");
    article.append(element("h3", "", section.title));
    if (section.text) article.append(element("p", "", section.text));
    if (section.items) {
      const list = element("ul");
      section.items.forEach(item => list.append(element("li", "", item)));
      article.append(list);
    }
    grid.append(article);
  });
  content.append(heading);
  if (project.contribution) {
    const contribution = element("div", "project-contribution");
    contribution.append(element("p", "eyebrow", "My contribution"), element("strong", "", project.contribution));
    content.append(contribution);
  }
  content.append(tags, stage, controls, caption, grid);
  if (project.note) content.append(element("p", "detail-note", project.note));
  const actions = element("div", "dialog-actions");
  project.links.forEach((link, i) => {
    const anchor = element("a", `button${i ? " secondary" : ""}`, link.label);
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    anchor.append(element("span", "", "↗"));
    actions.append(anchor);
  });
  content.append(actions);
  showMedia(0);
  dialog.showModal();
  document.body.classList.add("dialog-open");
  dialog.scrollTop = 0;
  document.getElementById("close-dialog").focus();
}

if (typeof dialog.showModal === "function") {
  document.documentElement.classList.add("js-ready");
  document.querySelectorAll("[data-project]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      openProject(link.dataset.project, link);
    });
  });
  document.getElementById("close-dialog").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    dialog.querySelectorAll("video").forEach(video => video.pause());
    document.body.classList.remove("dialog-open");
    if (opener) opener.focus();
  });
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(other => other.setAttribute("aria-pressed", String(button === other)));
    let count = 0;
    document.querySelectorAll(".project-card").forEach(card => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) count += 1;
    });
    document.getElementById("project-count").textContent = `Showing ${count} project${count === 1 ? "" : "s"}`;
  });
});

initializeMotion();
