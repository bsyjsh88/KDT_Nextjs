import { useState } from 'react';
import { MainPageStyled } from './styled';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import qweq from '../../../assets/image/qweq.png'

const MainPage = () => {
  const [number, setNumber] = useState(0);
  const router = useRouter();

  return (
    <MainPageStyled>
      <div className="mainTitle">안녕하세요 누구세요</div>
      <Button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          router.push(`/company/${number}`);
        }}
      >
        페이지 이동
      </Button>
      <div>{number}</div>
      <img style={{width:300}} src={qweq.src} alt=''></img>
    </MainPageStyled>
  );
};
export default MainPage;
