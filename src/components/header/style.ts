import styled from 'styled-components'
import { $bgImage } from '~/assets/styles'
import logo from '~/assets/images/logo@2x.png'
console.log(logo)

export const DivAlias = styled.div`
  height: 44px;
  text-align: center;
  color: ${(props: any) => props.theme.$colorTheme};
  font-size: 0;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    ${$bgImage(logo)}
    background-size: 30px 32px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: ${(props: any) => props.theme.$fontSizeLarge};
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .icon-mine {
      display: block;
      padding: 12px;
      font-size: ${(props: any) => props.theme.$fontSizeLargeX};
      color: ${(props: any) => props.theme.$colorTheme};
    }
  }
`