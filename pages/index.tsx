import type { NextPage } from 'next'
import Input from '../components/Input/Input';
import Text from '../components/Text/Text';
import { useEffect, useState } from "react";
import axios from 'axios';
import token from '../request/token'

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      query: inputValue
    };
    if(inputValue !== ''){
          const getInfo = async() => {
              await axios.get(`https://api.m3o.com/v1/answer/Question?query=${inputValue}`,config).then(resp => {setAnswerValue(resp.data.answer)}).catch(err => err);
          } 
          getInfo()
    }
  }, [inputValue]);

  return (
    <>
      <h2 className='title'>Homepage</h2>
      <Input inputValue={inputValue} onChange={setInputValue} />
      <Text text={answerValue} />
    </> 
  )
}

export default Home
