<template>
  <hi>hello</hi>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
 interface Metrics {
  id: string
  name: string
  tagline: string
  description: string | null
  URL: string
  modeDesktopLight: boolean
  modeDesktopDark: boolean
  modeMobileLight: boolean
  modeMobileDark: boolean
  editions: {
    items: {
      id: string
      name: string
      description: string
    }[]
  }
  features: {
    items: {
      id: string
      name: string
      description: string
      URL: string
      selector: string
      takeScreenshot: boolean
      timeOfScreenshot: string
      filename: string
      filepathDesktopLight: string
      filepathDesktopDark: string | null
      filepathMobileLight: string | null
      filepathMobileDark: string | null
      FeatureEditions: {
        items: {
          edition: {
            id: string
            name: string
          }
          limit: number | null
          limitType: string | null
          constraint: number | null
          constraintType: string | null
          speed: number | null
          speedType: string | null
        }[]
      }
    }[]
  }
}

  // Define a reactive property to store the fetched data
  const data = ref<null | Metrics>(null)
  const apiUrl = 'https://content.launchbrightly.com/lbdemo/baremetrics.json'
  const features = computed(()=>{
    if(data.value){
      return data.value.features.items
    }
    return []
  })



// Use the fetch function to retrieve data from an API endpoint
   onMounted( async () => {
     const response = await fetch(apiUrl)
     const data = await response.json()
     data.value = data as Metrics
     console.log({features})
   }),
</script>
