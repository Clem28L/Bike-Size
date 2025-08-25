// src/utils/supabase.js
import { createClient } from '@supabase/supabase-js'

// 🔹 Mets tes identifiants ici
const supabaseUrl = 'https://gxfltvrnclfxnddmqkfq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4Zmx0dnJuY2xmeG5kZG1xa2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxOTMxOTksImV4cCI6MjA3MDc2OTE5OX0.kSrU9Cfz46t86Qt5l13Nh6AsS5bQmzcgBNWkxfH8oCo'
export const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Récupère la taille vélo recommandée pour une taille de cycliste donnée
 * @param {number} tailleCycliste - Taille en cm
 * @returns {Promise<Array>} - Liste de marques avec la taille recommandée
 */
export async function getRecommendedSizes(tailleCycliste) {
  // Récupère toutes les marques
  const { data: brands, error: brandError } = await supabase
    .from('marques')
    .select('*')

  if (brandError) {
    console.error(brandError)
    return []
  }

  // Pour chaque marque, récupère la taille recommandée si existante
  const results = []
  for (const brand of brands) {
    const { data: sizeData, error: sizeError } = await supabase
      .from('taille_recommandee')
      .select('taille_velo')
      .eq('marque_id', brand.id)
      .lte('taille_min', tailleCycliste)
      .gte('taille_max', tailleCycliste)
      .limit(1)  // on prend la première correspondance

    if (sizeError) {
      console.error(sizeError)
      continue
    }

    if (sizeData.length > 0) {
      results.push({
        ...brand,
        taille_recommandee: sizeData[0].taille_velo
      })
    }
  }

  return results
}
