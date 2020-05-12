const validationMsg = (msg) => {
  msg.addEventListener('input', () => {
    if (msg.value) {
      const inp = msg.value;
      const oldVal = inp.slice(0, (inp.length - 1));
      const insert = inp[msg.value.length - 1].replace(/[^(А-я), ^(:, /", ', . , /,)]+$/g, '');
      msg.value = oldVal + insert;
    }
  });
};
export default validationMsg;