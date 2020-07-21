import React from 'react'
import { Row, Col, Select, Radio, InputNumber } from 'antd'
const Option = Select.Option

import { onSectionChange } from './util'
import { ISpecConfig } from '../types'

import styles from '../../../Workbench.less'

interface ISpecSectionRelationGraphProps {
  spec: ISpecConfig
  title: string
  onChange: (value: string | number, propPath: string | string[]) => void
}

function SpecSectionRelationGraph (props: ISpecSectionRelationGraphProps) {
  const { spec, title, onChange } = props
  const { rootNodeCount, linksLevel, symbolSize, nodeFontSize, linkFontSize } = spec

  const onRaidoChange = (e) => {
    onChange(e.target.value, [].concat(e.target.name as string | string[]))
  }

  const onSelectChange = (value) => {
    onChange(value, [].concat('linksLevel'))
  }

  const onSymbolSizeBlur = (e) => {
    onChange(parseInt(e.target.value), [].concat('symbolSize'))
  }

  const onNodeFontSizeBlur = (e) => {
    onChange(parseInt(e.target.value), [].concat('nodeFontSize'))
  }

  const onLinkFontSizeBlur = (e) => {
    onChange(parseInt(e.target.value), [].concat('linkFontSize'))
  }

  return (
    <div className={styles.paneBlock}>
      <h4>{title}</h4>
      <div className={styles.blockBody}>
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow}>
          <Col span={10}>顶层节点数</Col>
          <Col span={12}>
            <Radio.Group onChange={onRaidoChange} value={rootNodeCount} name="rootNodeCount">
              <Radio value={1}>1</Radio>
              <Radio value={5}>5</Radio>
            </Radio.Group>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow} style={{marginBottom: '5px'}}>
          <Col span={10}>度数</Col>
          <Col span={12}>
            <Select defaultValue={linksLevel} onChange={onSelectChange}>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow} style={{marginBottom: '5px'}}>
          <Col span={10}>节点大小</Col>
          <Col span={12}>
            <InputNumber
              placeholder="30~300"
              className={styles.blockElm}
              defaultValue={symbolSize}
              min={30}
              max={300}
              onBlur={onSymbolSizeBlur}
            />
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow} style={{marginBottom: '5px'}}>
          <Col span={10}>节点字体大小</Col>
          <Col span={12}>
            <InputNumber
              placeholder="12~80"
              className={styles.blockElm}
              defaultValue={nodeFontSize}
              min={12}
              max={80}
              onBlur={onNodeFontSizeBlur}
            />
          </Col>
        </Row>
        <Row gutter={8} type="flex" align="middle" className={styles.blockRow} style={{marginBottom: '5px'}}>
          <Col span={10}>连线上字体大小</Col>
          <Col span={12}>
            <InputNumber
              placeholder="12~80"
              className={styles.blockElm}
              defaultValue={linkFontSize}
              min={12}
              max={80}
              onBlur={onLinkFontSizeBlur}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SpecSectionRelationGraph
