import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from './navbar.styles';

import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/" style={{ color: 'rgba(0,0,0,.8)', textDecoration: 'none' }}>
            <Logo>shopin</Logo>
          </Link>
        </Center>

        <Right>
          {user ? (
            <>
              <Link to="/order" style={{ color: 'rgba(0,0,0,.8)', textDecoration: 'none' }}>
                <MenuItem>My order</MenuItem>
              </Link>
              <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
            </>
          ) : (
            <>
              <Link to="/register" style={{ color: 'rgba(0,0,0,.8)', textDecoration: 'none' }}>
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to="/login" style={{ color: 'rgba(0,0,0,.8)', textDecoration: 'none' }}>
                <MenuItem>Sign In</MenuItem>
              </Link>
            </>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
