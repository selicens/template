<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { message } from 'antdv-next'

const router = useRouter()
const { t } = useI18n()
const loading = ref(false)

const handleLogin = () => {
  loading.value = true
  setTimeout(() => {
    localStorage.setItem('token', 'mock-token')
    message.success(t('views.login.success'))
    router.push('/')
    loading.value = false
  }, 500)
}
</script>

<template>
  <div>
    <a-card :title="t('views.login.title')" style="width: 360px">
      <a-form @finish="handleLogin" :model="{}" layout="vertical">
        <a-form-item :label="t('views.login.username')" name="username">
          <a-input :placeholder="t('views.login.usernamePlaceholder')" />
        </a-form-item>
        <a-form-item :label="t('views.login.password')" name="password">
          <a-input-password :placeholder="t('views.login.passwordPlaceholder')" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :loading="loading" block>
            {{ t('views.login.submit') }}
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
