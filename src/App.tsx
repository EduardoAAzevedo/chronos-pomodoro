import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <Container>
          <Logo />
        </Container>

        <Container>
          <Menu />
        </Container>
      </div>
    </>
  );
}
