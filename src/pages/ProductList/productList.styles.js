import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;

  ${mobile({
    margin: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
  })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({
    marginRight: '0px',
  })}
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 10px;

  ${mobile({
    marginTop: '10px',
  })}
`;
export const Option = styled.option``;
