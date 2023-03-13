export default () => {
  if (document.querySelector('.form-estimate')) {
    const forms = document.querySelectorAll('.form-estimate');

    forms.forEach((form) => {
      let serviceName = '';
      const pageUrl = window.location.href;
      const formServiceName = form.querySelector('input[name="form-estimate-service-name"]');
      const formUrl = form.querySelector('input[name="form-estimate-url"]');

      formUrl.value = pageUrl;

      if (document.querySelector('h1')) {
        serviceName = document.querySelector('h1').innerText.toLowerCase();
        formServiceName.value = serviceName;
      } else {
        formServiceName.value = 'Название не найдено';
      }
    });
  }
};
