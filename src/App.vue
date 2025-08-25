<template>
  <div class="app-container">
    <!-- HEADER -->
    <header class="header">
      <div class="logo">
        <img src="./assets/bike.png" alt="bike logo" />
        <span class="brand">BikeSize</span>
      </div>
      <nav class="nav">
        <div class="nav-left">
          <router-link to="/" class="link">Accueil</router-link>
          <router-link to="/size" class="link">Trouver ta taille</router-link>
        </div>
        <div class="nav-right">
          <router-link to="/contact" class="link">Contact & information</router-link>
        </div>
      </nav>
    </header>

    <!-- PAGE CONTENT -->
    <main class="main">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2025 BikeSize - Tous droits réservés</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Reset global */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  background-color: #fafafa;
  overflow-x: hidden;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* HEADER */
.header {
  width: 100%;
  background: #1f2937; /* gris anthracite */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem clamp(1rem, 4vw, 2rem);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
  gap: 1rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  height: 2.5em;
  flex-shrink: 0;
}
.logo img {
  height: 100%;
}
.brand {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* NAV */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
}

/* Liens */
.link {
  position: relative;
  color: #e5e7eb; /* gris clair */
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  white-space: nowrap;
  padding: 0.2rem 0.4rem;
}
.link:hover {
  color: #3b82f6; /* bleu route */
}

/* Soulignement animé */
.link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 0%;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease, left 0.3s ease;
}
.link:hover::after {
  width: 100%;
  left: 0;
}

/* MAIN */
.main {
  flex: 1;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
}

/* FOOTER */
.footer {
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 0.6rem;
  text-align: center;
  font-size: 0.8rem;
  color: #6b7280;
  width: 100%;
}

/* Responsive pour mobile */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  
  .nav {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .nav-left,
  .nav-right {
    justify-content: center;
  }
  
  .link {
    font-size: 0.95rem;
  }
}
</style>
