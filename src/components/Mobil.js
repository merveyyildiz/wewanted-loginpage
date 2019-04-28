import React from 'react';
import { Grid, Image,Input ,Checkbox ,Button,Icon} from 'semantic-ui-react';
import logo1 from '../Assets/LOGO1.png';

export default function Mobil () {
  return(
    <div className="mobil">
 <Grid  columns={2}>
      <Grid.Row centered style={{ marginTop: "6px",height:"90px"}}>
        <Grid.Column >
         <Image src={logo1}  style={{ width:"220px",height:"60px"}}/>
        </Grid.Column>
        </Grid.Row>
      <Grid.Row style={{paddingTop:"0px"}}>
        <Grid.Column>
         <div className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry-mobil">Lorem Ipsum is simply dummy text of the printing industry. </div>
        </Grid.Column>
        </Grid.Row>
         <Grid.Row style={{paddingTop:"0px"}}>
        <Grid.Column>
         <div className="Lorem-Ipsum-has-been-mobil">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type it specimen book.  </div>
        </Grid.Column>  
        </Grid.Row>
         <Grid.Row style={{paddingTop:"20px"}}>
        <Grid.Column>
           <Input icon='envelope' size='small' iconPosition='left'style={{width:"280px"}} placeholder='Mail giriniz..' />
        </Grid.Column>
        </Grid.Row>
         <Grid.Row style={{paddingTop:"5px"}}>
        <Grid.Column>
           <Input icon='lock' size='small' iconPosition='left' style={{width:"280px"}} placeholder='Şifre giriniz..' />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{paddingTop:"10px"}} >
        <Grid.Column style={{paddingTop:"0px", width:"300px"}}>
          <Checkbox label={<label style={{color:"white"}}>Beni Hatırla</label>} />
          <div style={{ float:"right",  color:"orange"}}>Şifremi Unuttum</div>
        </Grid.Column>
        </Grid.Row>
              <Grid.Row style={{paddingTop:"10px"}}>
        <Grid.Column>
         <Button   color='orange'  size='small' style={{width:"280px"}}>Giriş Yap</Button>
        </Grid.Column>
        </Grid.Row>
            <Grid.Row style={{padding:"0px"}}>
        <Grid.Column>
         <div className="Ya-da-sosyal-medya-araclyla-ile-mobil">Ya da sosyal medya aracılığıyla ile</div>
        </Grid.Column>
        </Grid.Row>
            <Grid.Row  style={{color:"white",marginTop:"10px", marginLeft:"70px"}}>
        <Grid.Column style={{width:"200px"}}>
         <Icon name='google' size='large' />
         <Icon name='facebook f' size='large' />
         <Icon name='twitter' size='large' />
         <Icon name='github' size='large' />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{paddingTop:"10px"}}> 
        <Grid.Column >
         <div className="Aramza-katlmak-ister-misin-Kayt-Ol-mobil">Aramıza katılmak ister misin? <span className="Kayt-Ol">Kayıt Ol</span></div>
        </Grid.Column>
        </Grid.Row>
    </Grid>
</div>
  )
}