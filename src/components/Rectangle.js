import React from 'react'
import { Grid, Image,Input ,Checkbox ,Button,Icon} from 'semantic-ui-react';
import logo from '../Assets/LOGO1.png'
export default function Rectangle (){
  return (
    <div className="rectangle-back">
        <Grid  columns={2} >
      <Grid.Row>
        <Grid.Column style={{ marginTop: "36px", marginLeft:"50px" }}>
         <Image    src={logo}/>
        </Grid.Column>
        </Grid.Row>
      <Grid.Row style={{margin:"0px", width:"25px"}}>
        <Grid.Column >
         <div className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry">Lorem Ipsum is simply dummy text of the printing industry. </div>
        </Grid.Column>
        </Grid.Row>
         <Grid.Row style={{margin:"0px"}}>
        <Grid.Column >
         <div className="Lorem-Ipsum-has-been">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type it specimen book.  </div>
        </Grid.Column>
        </Grid.Row>
         <Grid.Row>
        <Grid.Column style={{margin:"0px"}}>
           <Input icon='envelope' size='large' iconPosition='left'style={{width:"425px",backgroundColor:"black"}} placeholder='Mail giriniz..' />
        </Grid.Column>
        </Grid.Row>
         <Grid.Row>
        <Grid.Column style={{margin:"0px"}}>
           <Input icon='lock' size='large' iconPosition='left'style={{width:"425px"}} placeholder='Şifre giriniz..' />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{margin:"0px",width:"445px"}}>
          <Checkbox label={<label style={{color:"white"}}>Beni Hatırla</label>} />
          <div style={{float:"right", color:"orange"}}>Şifremi Unuttum</div>
        </Grid.Column>
        </Grid.Row>
              <Grid.Row >
        <Grid.Column>
         <Button   color='orange'  size='large' style={{width:"425px"}}>Giriş Yap</Button>
        </Grid.Column>
        </Grid.Row>
            <Grid.Row style={{margin:"0px"}}>
        <Grid.Column >
         <span className="Ya-da-sosyal-medya-araclyla-ile">Ya da sosyal medya aracılığıyla ile</span>
        </Grid.Column>
        </Grid.Row>
          <Grid.Row centered style={{color:"white",margin:"0px"}}>
        <Grid.Column>
         <Icon name='google' size='large' />
         <Icon name='facebook f' size='large' />
         <Icon name='twitter' size='large' />
         <Icon name='github' size='large' />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{margin:"0px"}}> 
        <Grid.Column >
         <div className="Aramza-katlmak-ister-misin-Kayt-Ol">Aramıza katılmak ister misin? <span className="Kayt-Ol">Kayıt Ol</span></div>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
  );
}