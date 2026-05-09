// assets/js/onboarding.js

function updateResult() {
  const deviceSelected = document.querySelector('input[name="device"]:checked');
  const profileSelected = document.querySelector('input[name="profile"]:checked');
  const area = document.getElementById('content-area');

  if (!deviceSelected || !profileSelected) {
    area.innerHTML = '';
    return;
  }

  const device = deviceSelected.value;
  const profile = profileSelected.value;

  let deviceTitle = device === 'desktop' ? '🖥️ Desktop' :
                    device === 'laptop' ? '💻 Laptop' :
                    device === 'tablet' ? '📟 Tablet' : '📱 Celular';

  let profileTitle = profile === 'user' ? '👤 Leitor' :
                     profile === 'instructor' ? '📢 Instrutor' :
                     profile === 'volunteer' ? '🛠️ Voluntário' : '🏛️ Detentor de Direitos';

area.innerHTML = `
  <h2>Seleções</h2>
  <p style="font-size: 1.2em; color: red;">${profileTitle} utilizando um ${deviceTitle}</p>
  <hr>
  ${onboardingContent.profiles[profile]}
  ${onboardingContent.devices[device]}
`;
}

function detectDevice() {
  const width = window.innerWidth;
  let text = 'Desktop';
  let color = '#e3f2fd';   // Desktop - light blue

  if (width < 750) {
    text = 'Use o Celular em modo deitado';
    color = '#ffebee';     // light red
  } else if (width < 1005) {
    text = 'Tablet';
    color = '#fff9c4';     // light yellow
  } else if (width < 1463) {
    text = 'Laptop';
    color = '#e8f5e9';     // light green
  }

  // Update banner
  const alertDiv = document.getElementById('alert');
  const alertMsg = document.getElementById('alert-message');
  if (alertDiv) alertDiv.style.backgroundColor = color;
  if (alertMsg) alertMsg.textContent = `${text}`;

  console.log(`Dispositivo: ${text} (${width}px)`);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  detectDevice();

  // Pre-select detected device
  const width = window.innerWidth;
  let defaultDevice = 'desktop';
  if (width < 750) defaultDevice = 'mobile';
  else if (width < 1005) defaultDevice = 'tablet';
  else if (width < 1463) defaultDevice = 'laptop';

  const deviceRadio = document.querySelector(`input[name="device"][value="${defaultDevice}"]`);
  if (deviceRadio) deviceRadio.checked = true;

  // Pre-select Leitor
  const defaultProfile = document.querySelector('input[name="profile"][value="user"]');
  if (defaultProfile) defaultProfile.checked = true;

  updateResult();

  let timeout;
  window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(detectDevice, 80);
  });

  window.addEventListener('orientationchange', () => {
    setTimeout(detectDevice, 150);
  });
});
