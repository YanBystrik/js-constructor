import { block } from '../utils';
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './blocks';

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);

    this.update = update;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [block('title'), block('text'), block('columns'), block('image')].join('');
  }

  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    const imageStyles = type === 'image' ? event.target.imageStyles.value : '';

    let columnsArray;

    if (type === 'columns') columnsArray = value.split(' "').map((elem) => elem.replace(/"/g, ''));

    let newBlock;

    if (type === 'text') {
      newBlock = new TextBlock(value, { styles });
    } else if (type === 'title') {
      newBlock = new TitleBlock(value, { styles });
    } else if (type === 'image') {
      newBlock = new ImageBlock(value, { styles, imageStyles });
    } else if (type === 'columns') {
      newBlock = new ColumnsBlock(columnsArray, { styles });
    }

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';

    if (event.target.name === 'image') event.target.imageStyles.value = '';
  }
}
