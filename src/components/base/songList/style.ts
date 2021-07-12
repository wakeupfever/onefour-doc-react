import styled from 'styled-components'
import { ThemePropStyled, $bgImage } from '~/assets/styles/index'

import first from '~/assets/images/first@2x.png'
import second from '~/assets/images/second@2x.png'
import third from '~/assets/images/third@2x.png'

export const SongListDivAlias = styled.div`
.item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 64px;
  font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeMedium};
  .rank {
    flex: 0 0 25px;
    width: 25px;
    margin-right: 20px;
    text-align: center;
    .icon {
      display: inline-block;
      width: 25px;
      height: 24px;
      background-size: 25px 24px;
      &.icon0 {
        ${$bgImage(first)};
      }
      &.icon1 {
        ${$bgImage(second)};
      }
      &.icon2 {
        ${$bgImage(third)};
      }
    }
    .text {
      color: ${(props: ThemePropStyled) => props.theme.$colorTheme};
      font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeLarge};
    }
  }
  .content {
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    .name {
      @include no-wrap();
      color: ${(props: ThemePropStyled) => props.theme.$colorText}
    }
    .desc {
      @include no-wrap();
      margin-top: 4px;
      color: ${(props: ThemePropStyled) => props.theme.$colorTextD}
    }
  }
}
` 