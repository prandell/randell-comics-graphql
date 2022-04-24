import styled from 'styled-components'

export const CategoryContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`

export const Title = styled.span`
  margin-bottom: 0px;
  font-family: 'Jhiaxus-Oblique', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 250%;
  color: var(--primary-colour);
`

export const LineBreak = styled.hr`
  background-color: var(--accent-colour);
  border: 0 none;
  color: var(--accent-colour);
  width: 30%;
  height: 3px;
  margin-bottom: 40px;
`

export const ProductGrid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0px;
  row-gap: 40px;
`
