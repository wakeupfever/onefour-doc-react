export let theme = {
  // 颜色定义规范
  $colorBackground: '#222',
  $colorBackgroundD: 'rgba(0, 0, 0, 0.3)',
  $colorHighlightBackground: '#333',
  $colorDialogBackground: '#666',
  $colorTheme: '#ffcd32',
  $colorThemeD: 'gba(255, 205, 49, 0.5)',
  $colorSubTheme: '#d93f30',
  $colorText: '#fff',
  $colorTextD: 'rgba(255, 255, 255, 0.3)',
  $colorTextL: 'rgba(255, 255, 255, 0.5)',
  $colorTextLl: 'rgba(255, 255, 255, 0.8)',

  // 字体定义规范
  $fontSizeSmallS: '10px',
  $fontSizeSmall: '12px',
  $fontSizeMedium: '14px',
  $fontSizeMediumX: '16px',
  $fontSizeLarge: '18px',
  $fontSizeLargeX: '22px'
}

// 基础功能
export const $bgImage = (url: string) => `
    background-image: url(${url});
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url(${url});
    }
  `
// 禁止折行
export const $noWrap = () => `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
// 拓展小图标按钮的点击区域
export const $extendClick = () => `
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -10;
    left: -10;
    right: -10;
    bottom: -10;
  }
`