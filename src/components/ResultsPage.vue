<script setup>
import { ref, onMounted } from 'vue'
import { getRecommendedSizes } from '../services/supabase'

const marques = ref([])
const tailleCycliste = ref(180)

onMounted(async () => {
    marques.value = await getRecommendedSizes(tailleCycliste.value)
})
</script>

<template>
    <div class="container">
        <h1 class="title">Bike Size - Marques</h1>
        <div class="grid">
            <div 
                v-for="brand in marques" 
                :key="brand.id" 
                class="card"
            >
                <img :src="brand.logo_url" alt="Logo" class="logo" />
                <div class="size">{{ brand.taille_recommandee }} cm</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.title {
    text-align: center;
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    animation: fadeIn 1s ease-in;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.card {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideUp 0.5s ease-out;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.logo {
    width: 120px;
    height: auto;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.1);
}

.size {
    font-size: 1.25rem;
    font-weight: bold;
    color: #3498db;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: #f8f9fa;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
