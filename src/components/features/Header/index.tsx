import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';

const Header = () => {


  const router = useRouter();

  const path = router.asPath;

  return (
    <HeaderStyled>
      <div className={`nav ${path === '/login' ? 'noneHead' : ''}`}>
        <div className="navBox">
          <div
            onClick={() => {
              router.push('/signup');
            }}
          >
            회원가입
          </div>
          <div
            onClick={() => {
              router.push('/login');
            }}
          >
            로그인
          </div>
          <div
            onClick={() => {
              router.push(`/company/${1}`);
            }}
          >
            회사소개
          </div>
          <div onClick={() => {
            router.push('/board');
          }}>
            게시판
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
