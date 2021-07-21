import styled from 'styled-components'
import { ThemePropStyled } from '~/assets/styles'

export const MusicListDivAlias = styled.div`
  position: relative;
  height: 100%;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 20;
    transform: translateZ(2px);
    .icon-back {
      display: block;
      padding: 10px;
      font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeLargeX};
      color: ${(props: ThemePropStyled) => props.theme.$colorTheme};
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    z-index: 20;
    transform: translateZ(2px);
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeLarge};
    color: ${(props: ThemePropStyled) => props.theme.$colorText};
  }
  .bg-image {
    position: relative;
    width: 100%;
    transform-origin: top;
    background-size: cover;
    .play-btn-wrapper {
      position: absolute;
      bottom: 20px;
      z-index: 10;
      width: 100%;
      .play-btn {
        box-sizing: border-box;
        width: 135px;
        padding: 7px 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid ${(props: ThemePropStyled) => props.theme.$colorTheme};
        color: ${(props: ThemePropStyled) => props.theme.$colorTheme};
        border-radius: 100px;
        font-size: 0;
      }
      .icon-play {
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
        font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeMediumX};
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        font-size: ${(props: ThemePropStyled) => props.theme.$fontSizeSmall};
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
  }
  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 0;
    .song-list-wrapper {
      padding: 20px 30px;
      background: ${(props: ThemePropStyled) => props.theme.$colorBackground};
    }
  }
`