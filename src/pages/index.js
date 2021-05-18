import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Placeholder from '../images/placeholder.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: #E74C3C;
    text-decoration: none;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
            <t.H1 primary align="center">
              Vinay Solanki
            </t.H1>
            <t.LargeP align="center" max45>
            I’m a fullstack web developer(MERN) and good at building scalable web applications and cross platform mobile applications also proficient in developing databases, creating user interfaces, debugging complex/simple issues and implementing new features based on user feedback.
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold className="portfolio">
              Poojects
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src='https://firebasestorage.googleapis.com/v0/b/whats-app-clone-9aaa5.appspot.com/o/116726216-9ca96080-aa00-11eb-95f1-394686232909.png?alt=media&token=089d6f87-108f-4caa-b528-224b5f54e906' alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Airbnb Clone</t.H2>
                <t.P>It is a full stack clone of airbnb build using react.js , firebase , react context API has functionality to host your room, house, hotel, search by date, email verification on booking etc.</t.P>
                
                <LinkButton primary bold className="link" as="a"
                  target="https://airbnb-colne.firebaseapp.com/"
                  href="https://airbnb-colne.firebaseapp.com/">
                  GO TO SITE
                </LinkButton>
                <t.P></t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/vinaysolanki535/airbnbClone"
                  href="https://github.com/vinaysolanki535/airbnbClone">
                  Github Code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Gmail Clone</t.H2>
                <t.P>This is a clone of gmail build using react.js, firebase, redux, react form validation hook, nodemailer,  material UI, has functionality compose mail, read mail, send mail, Authentication etc. </t.P>
             
                <LinkButton primary bold className="link" as="a"
                  target=" https://clone-a2d90.web.app/"
                  href=" https://clone-a2d90.web.app/">
                  GO TO SITE
                </LinkButton>
                <t.P></t.P>
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/vinaysolanki535/gmailclone"
                  href="https://github.com/vinaysolanki535/gmailclone">
                  Github Code
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src='https://firebasestorage.googleapis.com/v0/b/whats-app-clone-9aaa5.appspot.com/o/116730733-78508280-aa06-11eb-9bf4-92e30407ed16.png?alt=media&token=4b24b7a2-a138-4fb0-bfe3-d8fdfd57ae3c' alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src='https://firebasestorage.googleapis.com/v0/b/whats-app-clone-9aaa5.appspot.com/o/116733633-f5312b80-aa09-11eb-8ae6-dba1693ef858.png?alt=media&token=0efcca63-2dbe-48e2-a304-52587e9a12bb' alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Tinder Clone</t.H2>
                <t.P>Tinder Clone is build using MERN stack mongodb , express , react , node.js for the frontend used firebase and backend is hosted on heroku and functionality of tinder swipe card , add tinder card into MongoDB database etc.</t.P>
                
                <LinkButton primary bold className="link" as="a"
                  target=" https://tinder-clone-3d77a.web.app/"
                  href=" https://tinder-clone-3d77a.web.app/">
                  GO TO SITE
                </LinkButton>
                <t.P></t.P>
    
                <LinkButton primary bold className="link" as="a"
                  target="https://github.com/vinaysolanki535/tinderClone"
                  href="https://github.com/vinaysolanki535/tinderClone">
                  Github Code
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Zoom Chat</t.H2>
                <t.P>Zoom Chat is a video calling web app build using react.js , socket.io , webRTC , node.js , express.js , styled component frontend is hosted on firebase, backend is hosted on heroku, mobile responsive etc.</t.P>
               
                <LinkButton primary bold className="link" as="a"
                  target="https://videochatapp-1d123.web.app/"
                  href="https://videochatapp-1d123.web.app/">
                  GO TO SITE
                </LinkButton>
               
               <t.P></t.P>
               <LinkButton primary bold className="link" as="a"
                  target="https://github.com/vinaysolanki535/ZOOMCHAT"
                  href="https://github.com/vinaysolanki535/ZOOMCHAT">
                  Github Code
                </LinkButton>
               
              </DivWrapper>
              <DivWrapper>
                <ItemImage src='https://firebasestorage.googleapis.com/v0/b/whats-app-clone-9aaa5.appspot.com/o/Capture.PNG?alt=media&token=9be8c8ce-8e55-46dd-ac15-cd7f296cbf27' alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>
              Fancy working with me? Contact me for more info!{' '}
            </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
