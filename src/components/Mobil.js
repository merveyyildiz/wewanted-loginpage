import React from 'react';
import {
  Container,
  Image,
  Checkbox,
  Button,
  Icon,
  Form
} from 'semantic-ui-react';
import logo1 from '../Assets/LOGO1.png';
import logo2 from '../Assets/LOGO1@2x.png';
export default function Mobil() {
  return (
    <div className="mobil">
      <Container className="mobilbox" textAlign="center">
        <Image src={logo1} srcSet={logo2 }
            alt="logo"
            centered />
        <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry-mobil">
          Lorem Ipsum is simply dummy text of the printing industry.{' '}
        </p>
        <p className="Lorem-Ipsum-has-been-mobil">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type it specimen book.{' '}
        </p>
        <Form>
          <Form.Input
            icon={{
              name: "envelope",
              color: 'grey'
            }}
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

          <Checkbox
            style={{ float: 'left' }}
            label={<label style={{ color: 'white' }}>Beni Hatırla</label>}
          />
          <div style={{ float: 'right', color: 'orange' }}>Şifremi Unuttum</div>
          <br />
          <Button
            style={{ marginTop: '15px' }}
            color="orange"
            fluid
            type="submit"
          >
            Giriş Yap
          </Button>
        </Form>
        <p className="Ya-da-sosyal-medya-araclyla-ile-mobil">
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
        <p className="Aramza-katlmak-ister-misin-Kayt-Ol-mobil">
          Aramıza katılmak ister misin?{' '}
          <span className="Kayt-Ol">Kayıt Ol</span>
        </p>
      </Container>
    </div>
  );
}
