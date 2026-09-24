// ============================================================
// NeoLar — lógica do site
// ============================================================

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

// Tenta carregar images/{id}.jpg, depois .jpeg, .png, .webp.
// Se nenhuma existir, mostra um placeholder com o número do produto.
function buildImageElement(id, alt) {
  const img = document.createElement("img");
  img.alt = alt;
  img.loading = "lazy";
  let attempt = 0;

  function tryNext() {
    if (attempt >= IMAGE_EXTENSIONS.length) {
      img.onerror = null;
      img.src = placeholderDataUri(id);
      return;
    }
    img.src = `images/${id}.${IMAGE_EXTENSIONS[attempt]}`;
    attempt++;
  }

  img.onerror = tryNext;
  tryNext();
  return img;
}

function placeholderDataUri(id) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
      <rect width="600" height="600" fill="#10131f"/>
      <text x="50%" y="50%" font-family="Space Grotesk, sans-serif" font-size="28"
            fill="#8890a6" text-anchor="middle" dominant-baseline="middle">
        Imagem ${id}
      </text>
    </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// ---------- Hero (produtos em destaque) ----------

function renderHero() {
  const featured = PRODUCTS.filter((p) => p.featured);
  const track = document.getElementById("heroTrack");
  const dotsWrap = document.getElementById("heroDots");
  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  featured.forEach((p, index) => {
    const slide = document.createElement("div");
    slide.className = "hero-slide" + (index === 0 ? " active" : "");
    slide.dataset.index = index;

    const media = document.createElement("div");
    media.className = "hero-media";
    media.appendChild(buildImageElement(p.id, p.name));

    const info = document.createElement("div");
    info.className = "hero-info";
    info.innerHTML = `
      <div class="hero-tag">Destaque</div>
      <h2>${p.name}</h2>
      <div class="hero-price">${p.price}</div>
      <a class="hero-cta" href="${p.link}" target="_blank" rel="noopener sponsored">Ver na Shopee</a>
    `;

    slide.appendChild(media);
    slide.appendChild(info);
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = index === 0 ? "active" : "";
    dot.addEventListener("click", () => goToSlide(index));
    dotsWrap.appendChild(dot);
  });

  document.getElementById("heroPrev").onclick = () => step(-1);
  document.getElementById("heroNext").onclick = () => step(1);

  window._heroTotal = featured.length;
  window._heroCurrent = 0;
}

function step(direction) {
  const total = window._heroTotal;
  let next = (window._heroCurrent + direction + total) % total;
  goToSlide(next);
}

function goToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots button");
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
  window._heroCurrent = index;
}

// ---------- Grid de produtos ----------

let activeCategory = "todos";

function renderGrid() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const list = PRODUCTS.filter(
    (p) => activeCategory === "todos" || p.category === activeCategory
  );

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.category = p.category;

    const thumb = document.createElement("div");
    thumb.className = "product-thumb";
    thumb.appendChild(buildImageElement(p.id, p.name));

    const body = document.createElement("div");
    body.className = "product-body";
    body.innerHTML = `
      <div class="product-category">${CATEGORY_LABELS[p.category]}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>
      <a class="product-buy" href="${p.link}" target="_blank" rel="noopener sponsored">Ver na Shopee</a>
    `;

    card.appendChild(thumb);
    card.appendChild(body);
    grid.appendChild(card);
  });

  document.getElementById("gridCount").textContent =
    `${list.length} ${list.length === 1 ? "produto" : "produtos"}`;
}

function setupNav() {
  document.querySelectorAll(".main-nav button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".main-nav button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      renderGrid();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderGrid();
  setupNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});
