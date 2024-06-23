import styled from "styled-components";
import { ReactComponent as Error } from '../../assets/images/danger.svg';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  padding: 60px;
  text-align: center;
  

  @media ${device.md} {
    padding: 80px;
    }
`;

export const ErrorImage = styled(Error)`
  text-align: center;
`;

export const MainHeader = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
`;

export const InfoHeader = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  margin: 0 auto;
  padding-bottom: 35px;
`;

export const ErrorLink = styled.a`
  background-color: #0044CC;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  margin: 0 auto;
  padding: 16px 24px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  line-height: 19px;
  cursor: pointer;
  display: inline-block;
`;