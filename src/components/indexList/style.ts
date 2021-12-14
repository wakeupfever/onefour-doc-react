
import styled from 'styled-components'
import { ThemePropStyled } from '~/assets/styles'
import Scroll from '../base/scroll'

export const IndexListDivAlias = styled(Scroll)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${(props: ThemePropStyled) => props.theme.$colorBackground};
  .group {
    padding-bottom: 30px;
    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeSmall};
      color: ${(props: ThemePropStyled) => props.theme.$colorTextL};
      background: ${(props: ThemePropStyled) => props.theme.$colorHighlightBackground};
    }
    .item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: ${(props: ThemePropStyled) => props.theme.$colorTextL};
        font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeMedium};
      }
    }
  }
  .fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeSmall};
      color: ${(props: ThemePropStyled) => props.theme.$colorTextL};
      background: ${(props: ThemePropStyled) => props.theme.$colorHighlightBackground};
    }
  }
  .shortcut {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: ${(props: ThemePropStyled) => props.theme.$colorBackgroundD};
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: ${(props: ThemePropStyled) => props.theme.$colorTextL};
      font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeSmall};
      &.current {
        color: ${(props: ThemePropStyled) => props.theme.$colorTheme};
      }
    }
  }
`
