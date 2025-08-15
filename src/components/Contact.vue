<template>
    <div class="contact-container">
        <h1>Contact Me</h1>
        <div class="contact-links">
            <a href="mailto:your.email@example.com" class="contact-item">
                <i class="fas fa-envelope"></i>
                Email Me
            </a>
            
            <a href="https://github.com/your-username" target="_blank" class="contact-item">
                <i class="fab fa-github"></i>
                GitHub Profile
            </a>
            
            <a href="https://linkedin.com/in/your-profile" target="_blank" class="contact-item">
                <i class="fab fa-linkedin"></i>
                LinkedIn Profile
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
.contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #f5f5f5;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
}

.contact-item:hover {
    background-color: #e0e0e0;
}

i {
    font-size: 1.5rem;
}
</style>