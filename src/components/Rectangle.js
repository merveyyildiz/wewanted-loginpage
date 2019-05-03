import React from 'react';
import {
  Image,
  Checkbox,
  Button,
  Icon,
  Form, Container
} from 'semantic-ui-react';
import logo1 from '../Assets/LOGO1.png';
export default function Rectangle() {
  return (
    <div className="rectangle">
      <Container className="rectanglebox" textAlign="center">
      <Image src={logo1}
        alt="logo"
        centered />
      <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry">
        Lorem Ipsum is simply dummy text of the printing industry.{' '}
      </p>
      <p className="Lorem-Ipsum-has-been">
        Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type it specimen book.{' '}
      </p>
        <Form inverted>
          <Form.Input inverted 
            icon={{ name:"envelope",
            color:'grey'}}
            iconPosition="left"
          placeholder="Mail Giriniz.."
        />
        <Form.Input
            icon={{
              name: "lock",
              color: 'grey'
            }}
          iconPosition="left"
          placeholder="Şifre Giriniz.."
        />
<br/>
          <Checkbox 
          style={{ float: 'left' }}
          label={<label style={{ color: 'white' }}>Beni Hatırla</label>}
        />
        <div style={{ float: 'right', color: 'orange' }}>Şifremi Unuttum</div>
        <br />
        <Button
          style={{ marginTop: '37px' }}
          color="orange"
          fluid
          size='huge'
          type="submit"
        >
          Giriş Yap
          </Button>
      </Form>
      <p className="Ya-da-sosyal-medya-araclyla-ile">
        Ya da sosyal medya aracılığıyla ile
        </p>
        <div className="Ellipsebox">
          <div className="Ellipse">
      <a href="#">
        <Icon name="google" size="large" />
      </a>
          </div>
          <div className="Ellipse">
      <a href="#">
        <Icon name="facebook f" size="large" />
      </a>
      </div>
          <div className="Ellipse">
      <a href="#">
        <Icon name="twitter" size="large" />
      </a>
      </div>
          <div className="Ellipse">
      <a href="#">
        <Icon name="github" size="large" />
      </a>
      </div>
        </div>
      <br />
      <p className="Aramza-katlmak-ister-misin-Kayt-Ol">
        Aramıza katılmak ister misin?{' '}
        <span className="Kayt-Ol">Kayıt Ol</span>
      </p>
      </Container>
    </div>
  );
}
