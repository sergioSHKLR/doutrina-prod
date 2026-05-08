---
title: Bem-vindo
layout: 0-default
---

# 👋🏼 Bem-vindo!

## 1. Qual é o seu perfil?

<div style="display: grid; gap: 14px; margin: 20px 0;">
  <label><input type="radio" name="profile" value="user" onchange="updateResult()"> 👤 Leitor</label>
  <label><input type="radio" name="profile" value="instructor" onchange="updateResult()"> 📢 Instrutor</label>
  <label><input type="radio" name="profile" value="volunteer" onchange="updateResult()"> 🛠️ Voluntário</label>
  <label><input type="radio" name="profile" value="rights-holder" onchange="updateResult()"> 🏛️ Detentor de Direitos</label>
</div>

## 2. Qual seu dispositivo?

<div style="display: grid; gap: 14px; margin: 20px 0;">
  <label><input type="radio" name="device" value="desktop" onchange="updateResult()"> 🖥️ Desktop</label>
  <label><input type="radio" name="device" value="laptop" onchange="updateResult()"> 💻 Laptop</label>
  <label><input type="radio" name="device" value="tablet" onchange="updateResult()"> 📟 Tablet</label>
  <label><input type="radio" name="device" value="mobile" onchange="updateResult()"> 📱 Celular</label>
</div>

<div id="content-area"></div>

<script>
  const onboardingContent = {
    profiles: {
      user: `{% include onboarding/profiles/user.html %}`,
      instructor: `{% include onboarding/profiles/instructor.html %}`,
      volunteer: `{% include onboarding/profiles/volunteer.html %}`,
      'rights-holder': `{% include onboarding/profiles/rights-holder.html %}`
    },
    devices: {
      desktop: `{% include onboarding/devices/dekstop.html %}`,
      laptop: `{% include onboarding/devices/laptop.html %}`,
      tablet: `{% include onboarding/devices/tablet.html %}`,
      mobile: `{% include onboarding/devices/mobile.html %}`
    }
  };
</script>
<script src="../assets/js/onboarding.js"></script>

<script type="application/json" class="js-hypothesis-config">
{
"openSidebar": false
}
</script>