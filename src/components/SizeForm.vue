<template>
  <div class="big-card">
    <!-- Partie gauche : Formulaire -->
    <form @submit.prevent="submitForm" class="form-card">
      <h3>Trouve ta taille de vélo</h3>

      <!-- Taille -->
      <div class="form-group">
        <label for="taille">Taille (cm)</label>
        <input
          type="number"
          id="taille"
          v-model.number="taille"
          min="0"
          required
          placeholder="Ex: 175"
        />
      </div>

      <!-- Entrejambes -->
      <div class="form-group">
        <label for="entrejambes">Entrejambes (cm)</label>
        <input
          type="number"
          id="entrejambes"
          v-model.number="entrejambes"
          min="0"
          :disabled="pasEntrejambes"
          :required="!pasEntrejambes"
          placeholder="Ex: 80"
        />
      </div>

      <!-- Case à cocher -->
      <div class="form-group checkbox">
        <input type="checkbox" id="pasEntrejambes" v-model="pasEntrejambes" />
        <label for="pasEntrejambes">Je ne souhaite pas renseigner mon entrejambe</label>
      </div>

      <button type="submit">Valider</button>
    </form>

    <!-- Partie droite : Instructions -->
    <div class="instruction">
      <h3><span class="icon">ℹ️</span> Besoin d'aide ?</h3>
      <p>
        Pour mesurer ta <strong>taille</strong>, mets-toi droit contre un mur,
        pose un livre sur ta tête et mesure du sol jusqu’au livre.
      </p>
      <p>
        Pour l'<strong>entrejambe</strong>, place une bouteille d’eau entre tes jambes
        puis mesure la distance au sol.
      </p>
      <p class="help-note">
        ⚠️ Si tu ne renseignes pas ton entrejambe, certaines marques ne pourront
        pas être prises en compte pour le calcul de ta taille.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const taille = ref(0)
const entrejambe = ref(null)
const useEntrejambe = ref(false)

function submitForm() {
  router.push({
    name: 'result',
    query: {
      taille: taille.value,
      entrejambe: entrejambe.value,
      useEntrejambe: useEntrejambe.value
    }
  })
}
</script>

<style scoped>
/* --- Grande box --- */
.big-card {
  display: flex;
  gap: 0;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 800px;
  margin: 3rem auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: white;
  font-family: "Segoe UI", sans-serif;
}

/* --- Formulaire (gauche) --- */
.form-card {
  flex: 1;
  padding: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-card h3 {
  text-align: center;
  font-size: 1.3rem;
  color: #1e293b; /* gris anthracite */
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #374151;
}

input[type="number"] {
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  border-color: #3b82f6; /* bleu route */
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.3);
}

button {
  padding: 0.7rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  background: linear-gradient(135deg, #1e3a8a, #2563eb);
  color: white;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

/* --- Instructions (droite) --- */
.instruction {
  flex: 1;
  padding: 2rem;
  background: #f3f4f6; /* gris clair */
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
}

.instruction h3 {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #1e293b;
}

.instruction .icon {
  font-size: 1.3rem;
  margin-right: 0.5rem;
}

.help-note {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #555;
  background: #fffbe6;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border-left: 4px solid #f59e0b; /* jaune/orangé */
}
</style>
