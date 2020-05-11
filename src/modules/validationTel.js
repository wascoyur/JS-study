const phones = document.querySelectorAll("input[type='tel']");

const validationTel = (listPhones) => {
  listPhones.forEach((fieldTel) => {
    fieldTel.addEventListener('input', () => {
      console.log(fieldTel.value);
      fieldTel.value = fieldTel.value.match(/^[0-9 ()+-]+$/g);
    });
  });
};
export default validationTel;