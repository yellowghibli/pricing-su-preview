(function () {
  function initPasswordToggle() {
    document.querySelectorAll('[data-toggle-password]').forEach(function (btn) {
      var inputId = btn.getAttribute('aria-controls');
      var input = inputId ? document.getElementById(inputId) : null;
      if (!input) return;

      function syncToggleIcon() {
        var visible = input.type === 'text';
        btn.setAttribute('aria-pressed', visible ? 'true' : 'false');
        btn.setAttribute('aria-label', visible ? 'Скрыть пароль' : 'Показать пароль');
      }

      syncToggleIcon();

      btn.addEventListener('click', function () {
        var visible = input.type === 'text';
        input.type = visible ? 'password' : 'text';
        input.classList.toggle('auth-password-visible', !visible);
        syncToggleIcon();
      });
    });
  }

  function initFakeForms() {
    document.querySelectorAll('form[data-auth-next]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var next = form.getAttribute('data-auth-next');
        if (form.getAttribute('data-auth-require-consent') === 'true') {
          var consent = form.querySelector('input[name="consent"]');
          if (consent && !consent.checked) {
            consent.focus();
            return;
          }
        }
        if (next) {
          window.location.href = next;
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initPasswordToggle();
      initFakeForms();
    });
  } else {
    initPasswordToggle();
    initFakeForms();
  }
})();
