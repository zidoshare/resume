/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.png';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            你好，<br /> 很高兴你能来访。
          </BigTitle>
          <Subtitle>
            我是一个普通的码农，一个理想的完美主义者，喜欢开源，喜欢技术，偶尔喜欢折腾一些奇奇怪怪的东西。 <br/> 
            喜欢linux平台，喜欢java/go/js语言。伪全栈开发者。
          </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Elise"
              link="https://github.com/zidoshare/Elise"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              一个简单的，高度可扩展的，并且支持分布式的爬虫框架。
            </ProjectCard>
            <ProjectCard
              title="xml-path"
              link="https://github.com/zidoshare/xml-path"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              一个并不算完美的xpath解析器
            </ProjectCard>
            <ProjectCard
              title="react-starter"
              link="https://github.com/zidoshare/react-starter"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              :gun: react脚手架，使用react16.x，webpack2.x，react-router v4构建
            </ProjectCard>
            <ProjectCard
              title="blog"
              link="http://zido.site"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              我的那个无人问津博客
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="zido" />
            <AboutSub>
              我为自己起了一个拗口的英文名：zido。我喜欢z这个字母，没有原因，大概能联想到的词语是“zz”，接下来是“I Do”，于我而言就是“just try it”，算是我的口号吧。
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            理想的完美主义者，不追名不逐利，短期的理想就是完成<a target="_blank"  href="https://github.com/zidoshare/Elise">有价值的开源项目</a>(求一个star。
            <br/>深入的学习各种感兴趣的东西，例如spring/redis/jvm等等。
            <br/>96年生，16年参加实习工作，17年毕业。
            <br/>从不满足于当一个普通的程序猿。
            <br/>虽然毛发还挺茂盛的，但是总是网上自嘲地中海。
            <br/>喜欢二次元，但不认为自己属于二次元的圈子。
            <br/>喜欢k歌虽然五音不全。
            <br/>喜欢游戏，但是现在什么都玩不进去。
            <br/>别问我怎么学java，问就是《java核心技术》(卷一卷二)
            <br/>别问我怎么学go，问就是《go语言圣经》
            <br/>别问我怎么学js，问就是《javascript高级编程》
            <br/>别问我怎么学c，问就是《c primer plus》
            <br/>....
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:wuhongxu1208@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/zidoshare">github/zidoshare</a> &{' '}
            <a href="https://zido.site">zido的个人博客</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by zido.{' '}
          <a href="https://github.com/zidoshare">Github Repository</a>.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
