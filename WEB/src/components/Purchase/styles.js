import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: ${colors.light} 4px 4px 12px 1px;
  padding: 20px;
  button {
    background: ${colors.transparent};
    color: ${colors.secondary};
    cursor: pointer;
  }
  small {
    font-size: 11px;
    color: ${colors.text};
    letter-spacing: 0;
    line-height: 14px;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  strong {
    font-weight: Bold;
    font-size: 16px;
    color: ${colors.primary};
    letter-spacing: 0;
  }
  .description {
    font-size: 14px;
    color: ${colors.text};
    letter-spacing: 0;
    text-align: left;
  }
`;

export const Thead = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
    color: ${colors.primary};
    letter-spacing: 0;
    text-align: left;
  }
`;

export const PurchaseItens = styled.div`
  border-top: 1px solid ${colors.light};
  border-bottom: 1px solid ${colors.light};
  padding-top: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  display: inline-flex;
  flex-direction: row;
  border-radius: 10px;
  border: 1px solid ${colors.light};
  overflow: hidden;
  padding: 10px 20px 10px 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  min-width: 230px;
  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  div {
    .type {
      font-size: 13px;
      color: ${colors.primary};
      letter-spacing: 0;
      text-align: left;
      margin-bottom: 5px;
    }
    .size {
      font-size: 11px;
      color: ${colors.text};
      letter-spacing: 0;
      line-height: 10.77px;
      text-align: left;
    }
  }
`;
