import {
  Center,
  Container,
  Left,
  List,
  ListItem,
  Logo,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
  ContactItem,
  Payment,
} from './footer.styles';
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Arif</Logo>

        <SocialContainer>
          <SocialIcon color="#3b5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> contact@arif.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
