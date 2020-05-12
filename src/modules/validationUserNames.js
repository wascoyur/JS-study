// const userNames = document.querySelectorAll("input[name='user_name']");

const validationUserName = (listUserNames) => {
  listUserNames.forEach((fieldUname) => {
    fieldUname.addEventListener('input', () => {
      if (fieldUname.value) {
        const inp = fieldUname.value;
        const oldVal = inp.slice(0, (inp.length - 1));
        const insert = inp[fieldUname.value.length - 1].replace(/[^(А-я), ^(A-z)]+$/g, '');
        fieldUname.value = oldVal + insert;
      }
    });
  });
};
export default validationUserName;