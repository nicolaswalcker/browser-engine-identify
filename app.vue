<script lang="ts" setup>
const { copy, copied } = useClipboard()
const toast = useToast()
useSeoMeta({
  title: 'Informações do navegador',
  description: 'Verifique as informações do seu navegador.'
})
const device = useDevice()

const verifyBrowser = () => {
  let browser: string = ''

  if (device.isChrome) { browser = 'Chrome' }
  if (device.isFirefox) { browser = 'Firefox' }
  if (device.isSafari) { browser = 'Safari' }
  if (device.isCrawler) { browser = 'Crawler' }
  if (device.isEdge) { browser = 'Edge' }
  if (device.isSamsung) { browser = 'Samsung' }

  return browser
}

const verifyApparel = () => {
  let apparel: string = ''

  if (device.isMobile) { apparel = 'Mobile' }
  if (device.isTablet) { apparel = 'Tablet' }
  if (device.isDesktop) { apparel = 'Desktop' }

  return apparel
}

const copyItem = (item: string, label: string) => {
  copy(item)
  if (copied) {
    toast.add({
      title: 'Copiado',
      description: `${label} copiado com sucesso.`
    })
  }
}

const verifySystem = () => {
  let system: string = ''

  if (device.isMacOS) { system = 'MacOS' }
  if (device.isWindows) { system = 'Windows' }
  if (device.isAndroid) { system = 'Android' }
  if (device.isIos) { system = 'IOS' } else { system = 'Desconhecido ou Linux' }

  return system
}

const showApparel = ref(true)
const showBrowser = ref(true)
const showSystem = ref(true)
const showUserAgent = ref(true)

</script>

<template>
  <div class="min-h-screen w-full flex items-center justify-center px-4 bg-gray-950 flex-col">
    <div class="max-w-xl w-full h-full flex flex-col items-start justify-center gap-3">
      <h1 class="text-2xl font-bold">
        Informações do navegador
      </h1>
      <article class=" h-auto w-full bg-gray-900 rounded-md border border-primary p-3 flex flex-col items-start justify-center gap-3">
        <h2 class="text-lg font-semibold">
          Controles
        </h2>
        <div class="w-full flex flex-col items-start justify-center gap-2">
          <div class="flex justify-between items-center w-full">
            <label for="apparel" class="text-lg">Exibir aparelho</label>
            <UToggle id="apparel" v-model="showApparel" name="apparel" />
          </div>
          <div class="flex justify-between items-center w-full">
            <label for="browser" class="text-lg">Exibir navegador</label>
            <UToggle id="browser" v-model="showBrowser" name="browser" />
          </div>
          <div class="flex justify-between items-center w-full">
            <label for="system" class="text-lg">Exibir sistema</label>
            <UToggle id="system" v-model="showSystem" name="system" />
          </div>
          <div class="flex justify-between items-center w-full">
            <label for="useragent" class="text-lg">Exibir <code>useragent</code></label>
            <UToggle id="useragent" v-model="showUserAgent" name="useragent" />
          </div>
        </div>
        <UDivider />
        <h2 class="text-lg font-semibold">
          Informações
        </h2>

        <div class="w-full flex flex-col items-start justify-center gap-2">
          <div class="flex justify-between start w-full">
            <label for="apparel" class="text-lg">Aparelho:</label>
            <span v-if="showApparel" class="text-base text-primary/75 cursor-pointer hover:text-primary" @click="copyItem(verifyApparel(), 'Aparelho')">{{ verifyApparel() }}</span>
          </div>
          <div class="flex justify-between start w-full">
            <label for="browser" class="text-lg">Navegador:</label>
            <span v-if="showBrowser" class="text-base text-primary/75 cursor-pointer hover:text-primary" @click="copyItem(verifyBrowser(), 'Navegador')">{{ verifyBrowser() }}</span>
          </div>
          <div class="flex justify-between start w-full">
            <label for="system" class="text-lg">Sistema:</label>
            <span v-if="showSystem" class="text-base text-primary/75 cursor-pointer hover:text-primary" @click="copyItem(verifySystem(), 'Sistema')">{{ verifySystem() }}</span>
          </div>
          <div class="flex justify-between start w-full flex-col">
            <label for="useragent" class="text-lg">User Agent:</label>
            <span v-if="showUserAgent" class="text-base text-primary/75 cursor-pointer hover:text-primary" @click="copyItem(device.userAgent, 'userAgent')">{{ device.userAgent }}</span>
          </div>
        </div>
      </article>
    </div>
    <UNotifications />
  </div>
</template>
