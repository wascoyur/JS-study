// const userNames = document.querySelectorAll("input[name='user_name']");

const validationUserName = (listUserNames) => {
  listUserNames.forEach((fieldUname) => {
    fieldUname.addEventListener('input', () => {
      if (fieldUname.value) {
        // let arrFieldName = (fieldUname.value).split('');
        const inp = fieldUname.value;
        const oldVal = inp.slice(0, (inp.length - 1));
        // const insert = arrFieldName[arrFieldName.length - 1]/* .match(/[А-я, A-z]+$/g) */;
        const insert = inp[fieldUname.value.length - 1];
        fieldUname.value = oldVal + insert;
      } else {
        return;
      }


    });
  });
};
export default validationUserName;