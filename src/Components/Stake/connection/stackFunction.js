
const [acc, setAcc] = useState('');
const [balance, setBalance] = useState('');
const [user, setUser] = useState('');
const [contractBalance, setContractBalance] = useState('');
const [value, setValue] = useState('');
const [message, setMessage] = useState('');

 useEffect(() => {
  const init = async () => {
    const acc = await stack.methods.acc().call();
    const user = await stack.methods.getUser().call();
    const balance = await web3.eth.getBalance(stack.options.address);

    setAcc(acc);
    setUser(user);
    setContractBalance(balance);
  };
  init();
}, []);