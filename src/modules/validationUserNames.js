const userNames = document.querySelectorAll("input[name='user_name']");

const validationUserName = (listUserNames) => {
  listUserNames.forEach((fieldUname) => {
    fieldUname.addEventListener('input', () => {
      console.log(fieldUname.value);
      fieldUname.value = fieldUname.value.match(/[А-я]+$/g);
    });
  });
};
export default validationUserName;