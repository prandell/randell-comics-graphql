import React, { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { CategoryBanner } from '../../models/category.model'
import * as Styled from './directory-item.styles'

type DirectoryItemProps = {
  category: CategoryBanner
}

const DirectoryItem = ({ category }: DirectoryItemProps): JSX.Element => {
  const { title, subtitle, imageUrl } = category
  const navigate = useNavigate()
  const handleOnClick = useCallback(
    () => navigate(`/shop/${title.toLowerCase()}`),
    [navigate, title]
  )
  return (
    <Styled.DirectoryItemContainer onClick={handleOnClick}>
      <Styled.BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Styled.DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Styled.DirectoryBodyContainer>
    </Styled.DirectoryItemContainer>
  )
}

export default DirectoryItem
