$(function () {
  let ShowPasswordToggles = $('input:password');
  if (ShowPasswordToggles.length) {
    ShowPasswordToggles.each(function () {
      let $this = $(this);
      $this.addClass('input-password');
      let $toggleButtonLabels = {
        show: $this.data('show') || 'Show password as plain text. Warning: this will display your password on the screen.',
        hide: $this.data('hide') || 'Hide password.'
      };
      let $toggleButton = $('<button type="button" class="toggle-password" aria-label="" aria-pressed="false"></button>');
      $toggleButton.on('click', function () {
        if ($this.attr('type') === 'password') {
          $this.attr('type', 'text');
          $toggleButton.addClass('password-visible');
          $toggleButton.attr('aria-label', $toggleButtonLabels.hide);
          $toggleButton.attr('aria-pressed', 'true');
        } else {
          $this.attr('type', 'password');
          $toggleButton.removeClass('password-visible');
          $toggleButton.attr('aria-label', $toggleButtonLabels.show);
          $toggleButton.attr('aria-pressed', 'false');
        }
      });
      $this.after($toggleButton);
    });
  }
});
