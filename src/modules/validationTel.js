const phones = document.querySelectorAll("input[type='tel']");
const userNames = document.querySelectorAll("input[name='user_name']");

const validationTel = (listPhones) => {
  listPhones.forEach((fieldTel) => {
    fieldTel.addEventListener('input', () => {
      console.log(fieldTel.value);
      fieldTel.value = fieldTel.value.match(/^[0-9 ()+-]+$/g);
    });
  });

  const validationUserName = (listUserNames) => {
    listUserNames.forEach((fieldUname) => {
      fieldUname.addEventListener('input', () => {
        console.log(fieldUname.value);
        fieldUname.value = fieldUname.value.match(/[А-я]+$/g);
      });
    });
  };
};
export default validationTel;