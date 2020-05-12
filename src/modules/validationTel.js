const phones = document.querySelectorAll("input[type='tel']");

const validationTel = (listPhones) => {
  listPhones.forEach((fieldTel) => {
    fieldTel.addEventListener('input', () => {
      console.log(fieldTel.value);
      // fieldTel.value = fieldTel.value.match(/^[0-9 ()+-]+$/g);
      if (fieldTel.value) {
        const inp = fieldTel.value;
        const oldVal = inp.slice(0, (inp.length - 1));
        const insert = inp[fieldTel.value.length - 1].replace(/[^((8|+7)), ^(0-9)]+$/g, '');
        fieldTel.value = oldVal + insert;
      }
    });
  });
};
export default validationTel;