import ChartTypes from './ChartTypes'

import { IChartInfo } from 'containers/Widget/components/Widget'

const relationGraph: IChartInfo = {
  id: ChartTypes.RelationGraph,
  name: 'relationGraph',
  title: '关系图',
  icon: 'icon-relation-graph',
  coordinate: 'cartesian',
  rules: [{ dimension: 2, metric: [1, 9999] }],
  dimetionAxis: 'col',
  data: {
    cols: {
      title: '列',
      type: 'category'
    },
    rows: {
      title: '行',
      type: 'category'
    },
    metrics: {
      title: '指标',
      type: 'value'
    },
    filters: {
      title: '筛选',
      type: 'all'
    },
    color: {
      title: '颜色',
      type: 'category'
    },
  },
  style: {
  }
}

export default relationGraph
