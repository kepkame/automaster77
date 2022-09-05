export default () => {
  const uploads = document.querySelectorAll('.upload');
  const maxSizeImage = 1 * 1024 * 1024; // 22 Mb
  const maxSizeVideo = 1 * 1024 * 1024; // 122 Mb

  // Change file name
  function regExpNameFile(file) {
    const name = file.value.match(/([\d\w\sА-Яа-я.\-–—&]+)\.(.){2,4}$/)[0];
    return name;
  }

  // Check file format
  function checkFileFormat(file) {
    const allowedFileFormats = [
      'image/jpeg',
      'image/png',
      'video/mpeg',
      'video/mp4',
      'video/ogg',
      'video/quicktime',
      'video/webm',
      'video/x-ms-wmv',
      'video/x-flv',
      'video/x-msvideo',
    ];

    if (!allowedFileFormats.includes(file.type)) {
      return `Не верный формат файла «${file.name}». Загрузите фото (.jpg, .png) или видео.`;
    }

    return false;
  }

  // Check file size
  function checkFileSize(file) {
    const allowedVideoFormats = [
      'video/mpeg',
      'video/mp4',
      'video/ogg',
      'video/quicktime',
      'video/webm',
      'video/x-ms-wmv',
      'video/x-flv',
      'video/x-msvideo',
    ];
    let errorNotice;

    if (['image/jpeg', 'image/png'].includes(file.type) && file.size > maxSizeImage) {
      errorNotice = `Размер файла «${file.name}» слишком большой. `
      + `Загрузите фото размером до ${maxSizeImage / 1024 / 1024} Мб.`;
      /* eslint-disable-next-line */
    } else if (allowedVideoFormats.includes(file.type) && file.size > maxSizeVideo) {
      errorNotice = `Размер файла «${file.name}» слишком большой. `
      + `Загрузите видео размером до ${maxSizeVideo / 1024 / 1024} Мб.`;
    }

    if (undefined !== errorNotice) {
      return errorNotice;
    }

    return false;
  }

  // Add errors to the array
  function addErrorNotice(formatFile, formatSize, arr) {
    if (formatFile) {
      arr.push(formatFile);
    } else if (formatSize) {
      arr.push(formatSize);
    }

    return false;
  }

  uploads.forEach((item) => {
    const uploadInput = item.querySelector('.upload__input');
    const uploadBtn = item.querySelector('.upload__btn');
    const uploadText = item.querySelector('.upload__text');
    const uploadTextNotice = uploadText.innerText;
    const uploadListNameFiles = item.querySelector('.upload__list');
    const uploadErrorNotice = item.querySelector('.upload__notice-error');

    uploadBtn.addEventListener('click', () => uploadInput.click());

    uploadInput.addEventListener('change', () => {
      /* eslint-disable-next-line */
      let arrError = [];

      // Removing errors in the form
      if (uploadErrorNotice.classList.contains('upload__notice-error--show')) {
        uploadErrorNotice.classList.remove('upload__notice-error--show');
      }
      while (uploadErrorNotice.firstChild) {
        uploadErrorNotice.removeChild(uploadErrorNotice.lastChild);
      }

      // If files are uploaded
      if (uploadInput.value) {
        const fileList = Object.values(uploadInput.files);

        // Clear list of error notifications
        while (uploadListNameFiles.firstChild) uploadListNameFiles.removeChild(uploadListNameFiles.lastChild);

        if (fileList.length === 1) {
          // One file uploaded
          const errorNoticeFormat = checkFileFormat(fileList[0]);
          const errorNoticeSize = checkFileSize(fileList[0]);

          addErrorNotice(errorNoticeFormat, errorNoticeSize, arrError);

          uploadText.innerText = regExpNameFile(uploadInput);
        } else if (fileList.length > 1) {
          // Multiple files uploaded
          uploadText.innerText = '';

          fileList.forEach((file) => {
            const errorNoticeFormat = checkFileFormat(file);
            const errorNoticeSize = checkFileSize(file);

            console.log('arrError: ', arrError);
            addErrorNotice(errorNoticeFormat, errorNoticeSize, arrError);

            const elemLi = document.createElement('li');
            elemLi.classList.add('upload__file-name');
            elemLi.innerText = file.name;
            uploadListNameFiles.append(elemLi);

            const nameFile = document.createElement('span');
            nameFile.innerText = file.name;
            uploadText.append(nameFile);
          });
        }
      } else {
        // Return original text
        uploadText.innerText = uploadTextNotice;
      }

      // If there are errors
      if (arrError.length >= 1) {
        uploadErrorNotice.classList.add('upload__notice-error--show');

        // Error output
        arrError.forEach((errorText) => {
          const tagP = document.createElement('p');
          tagP.innerText = errorText;
          uploadErrorNotice.append(tagP);
        });
      }
    });
  });
};
