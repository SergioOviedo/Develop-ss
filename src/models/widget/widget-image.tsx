import { h } from 'vue'
import { IMAGE_OBJECT_FIT_TYPES } from '@/constant/dict'
import { Widget, WidgetConfig, LooseOptions } from './index'

export class ImageWidget extends Widget {
  constructor() {
    super()
    this.name = 'image'
    this.icon = 'image'
    this.label = '图片'

    this.isDrag = true
    this.isEnum = false
  }

  getImageAttrs(attrs?: LooseOptions) {
    return {
      objectFit: attrs?.objectFit
    }
  }

  getTemplate(config: WidgetConfig) {
    return h(
      'img',
      {
        class: 'v-image',
        style: { ...this.getWidgetStyle(config.style), ...this.getImageAttrs(config.attrs) },
        src: config.props?.src,
        onMousedown: this.preventDefault
      },
      config.props?.label
    )
  }

  getPreview(config: WidgetConfig) {
    return h(
      'img',
      {
        class: 'v-image v-preview',
        style: { ...this.getWidgetStyle(config.style), ...this.getImageAttrs(config.attrs) },
        src: config.props?.src
      },
      config.props?.label
    )
  }

  getConfig() {
    const config: WidgetConfig = {
      type: 'image',
      lock: false,
      style: {
        width: 300,
        height: 200,
        minWidth: 50,
        minHeight: 50,
        opacity: 1,
        rotate: 0,
        overflow: 'hidden',
        textAlign: '',
        color: '',
        backgroundColor: '#fff'
      },
      attrs: {
        objectFit: 'fill'
      },
      props: {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      },
      attrConfigs: [
        {
          label: '裁切模式',
          type: 'select',
          model: 'objectFit',
          items: IMAGE_OBJECT_FIT_TYPES
        }
      ],
      propConfigs: [
        {
          label: '图片链接',
          type: 'input',
          model: 'src'
        }
      ]
    }
    return config
  }
}
