import image from './assets/image.png';
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './classes/blocks';

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '30px',
    },
  }),

  // new ImageBlock(image, {
  //   styles: {
  //     padding: '30px 0',
  //     display: 'flex',
  //     'justify-content': 'center',
  //   },
  //   imageStyles: {
  //     width: '500px',
  //     height: 'auto',
  //   },
  // }),

  // new ColumnsBlock(['1111', '2222', '3333'], {
  //   styles: {
  //     background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
  //     padding: '30px',
  //     color: 'fff',
  //     'font-weight': 'bold',
  //   },
  // }),

  // new TextBlock('some text', {
  //   styles: {
  //     background: 'linear-gradient(to left, #f2994a, #f2c94c)',
  //     'font-weight': 'bold',
  //     padding: '1rem',
  //   },
  // }),
];
