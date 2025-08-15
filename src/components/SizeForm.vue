<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="taille">Taille (cm) :</label>
            <input
                type="number"
                id="taille"
                v-model.number="taille"
                min="0"
                required
            />
        </div>
        <div>
            <label for="entrejambes">Entrejambes (cm) :</label>
            <input
                type="number"
                id="entrejambes"
                v-model.number="entrejambes"
                min="0"
                required
            />
        </div>
        <button type="submit">Valider</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'

const taille = ref(null)
const entrejambes = ref(null)

function submitForm() {
    // Traitement des données ici
    alert(`Taille: ${taille.value} cm\nEntrejambes: ${entrejambes.value} cm`)
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
}
label {
    font-weight: bold;
}
input {
    padding: 0.5rem;
    font-size: 1rem;
}
button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
}
</style>