import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import ArticleListView from '../../components/ArticleListView'
import PageNav from '../../components/PageNav'

export default class RoteVocab extends Component {
  render () {
    let begin = (this.props.currentPage - 1) * this.props.articleShowNumber
    let end = this.props.currentPage * this.props.articleShowNumber
    return (
      <div>
        <div className = 'outerFrame'>
          <div className = 'container upperBlock'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineGreyColor' style = {{display: 'flex'}}>
              <h2 style = {{alignSelf: 'center', fontSize: '3.5rem'}}>透析记词</h2>
            </div>
          </div>
          <div className = 'middleBlock'>
            <img src = 'http://awangimage.b0.upaiyun.com/website/roteVocabIcon.png' className = 'middleBlockElement'/>
          </div>
          <div className = 'container bottomBlock'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineGreyColor' style = {{display: 'flex'}}>
              <h3 style = {{color: '#607D8B', alignSelf: 'center', fontSize: '2.5rem'}}>更方便地使用透析法学英语</h3>
            </div>
          </div>
        </div>
        <div id = 'showBoardWrapperA'>
          <div className = 'outerFrame'>
            <div className = 'container'>
              <div className = 'leftSide' style = {{display: 'flex', justifyContent: 'center', writingMode: 'vertical-rl'}}>
                 <h2 style = {{height: 'fit-content'}}>何为透析法？</h2>
              </div>
              <div className = 'rightSide divideLineGreyColor'>
                <div style = {{display: 'flex', marginTop: '2rem'}}>
                  <img src = 'http://awangimage.b0.upaiyun.com/website/wujunyi.png' width = {100} height = {100}/>
                  <div style = {{paddingLeft: '20px'}}>
                    <p>伍君仪：透析英语创始人，《把你的英语用起来！》作者</p>
                    <p>
                      他的文章：
                      <a className = 'customLink'
                          href = 'http://blog.sina.com.cn/s/blog_4b5cb56b0100088u.html'
                      >
                        透析学习法详解
                      </a>
                    </p>
                  </div>
                </div>
                <div style = {{display: 'flex', margin: '2rem 0'}}>
                  <img src = 'http://awangimage.b0.upaiyun.com/website/naiba.png' width = {100} height = {100}/>
                  <div style = {{paddingLeft: '20px'}}>
                    <p>恶梦的奶爸：豆瓣奶爸英语教室创建者，《把你的英语用起来！》作者</p>
                    <p>
                      他的文章：
                      <a className = 'customLink'
                          href = 'https://site.douban.com/195168/widget/notes/11656155/note/249838060/'

                      >
                        透析英语——只读经典
                      </a>
                    </p>
                  </div>
                </div>
                <div style = {{display: 'flex', marginBottom: '2rem'}}>
                  <img src = 'http://awangimage.b0.upaiyun.com/website/awang.png' width = {100} height = {100}/>
                  <div style = {{paddingLeft: '20px'}}>
                    <p>AWang：透析记词APP作者</p>
                    <p>
                      他的文章：
                      <Link className = 'customLink'
                            to = {prefixLink(this.props.understandingAboutRoteVocab.path)}
                      >
                        个人对透析法的理解
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = 'outerFrame'>
          <div className = 'container'>
            <div className = 'leftSide' style = {{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <h2 style = {{marginRight: '20px'}}>应用下载地址</h2>
              <a href = 'http://www.coolapk.com/apk/com.rotevocabapp' style = {{display: 'block', margin: '20px'}}>
                <img src = 'http://awangimage.b0.upaiyun.com/website/coolmarket.png' width = {80} height = {80} alt = '酷市场'/>
              </a>
              <a href = 'http://app.mi.com/details?id=com.rotevocabapp&ref=search' style = {{display: 'block', margin: '20px'}}>
                <img src = 'http://awangimage.b0.upaiyun.com/website/xiaomi.png' width = {70} height = {70} alt = '小米应用商店'/>
              </a>
              <a href = 'http://sj.qq.com/myapp/detail.htm?apkName=com.rotevocabapp' style = {{display: 'block', margin: '20px'}}>
                <img src = 'http://awangimage.b0.upaiyun.com/website/tencent.png' width = {70} height = {70} alt = '应用宝'/>
              </a>
              <p style = {{marginRight: '20px', direction: 'rtl'}}>点击图标即可进入下载地址</p>
            </div>
            <div className = 'rightSide divideLineGreyColor'>
              <h2 style = {{alignSelf: 'center'}}>APP截屏</h2>
              <div style = {{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '40px 0'}}>
                <img src = 'http://awangimage.b0.upaiyun.com/website/1.png'/>
                <img src = 'http://awangimage.b0.upaiyun.com/website/2.png'/>
                <img src = 'http://awangimage.b0.upaiyun.com/website/5.png'/>
                <img src = 'http://awangimage.b0.upaiyun.com/website/9.png'/>
              </div>
            </div>
          </div>
        </div>
        <div id = 'showBoardWrapperB'>
          <div className = 'outerFrame'>
            <div className = 'container'>
              <div className = 'leftSide' style = {{display: 'flex', justifyContent: 'center', writingMode: 'vertical-rl'}}>
                <h2 style = {{width: 'fit-content'}}>应用说明</h2>
              </div>
              <div className = 'rightSide divideLineGreyColor'>
                <ArticleListView
                  articleSortList = {this.props.articleSortListAboutRoteVocabUseage.slice(begin, end)}
                  onlyShowTitle = {true}
                  style = {{marginTop: '40px'}}
                />
                <PageNav
                  totalPages = {this.props.totalPages}
                  currentPage = {this.props.currentPage}
                  changePageNumber = {this.props.changePageNumber}
                  jumpToPagePopUp = {this.props.jumpToPagePopUp}
                  scrollToTopAfterChangePageNumber = {false}
                  style = {{marginBottom: '40px'}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className = 'outerFrame'>
          <div className = 'container upperBlock'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineGreyColor' style = {{display: 'flex'}}>
              <h2 style = {{alignSelf: 'center'}}>开源地址</h2>
            </div>
          </div>
          <div className = 'middleBlock'>
            <img src = 'http://awangimage.b0.upaiyun.com/website/GitHub.svg.png' className = 'middleBlockElement'/>
          </div>
          <div className = 'container bottomBlock'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineGreyColor' style = {{display: 'flex'}}>
              <a href = 'https://github.com/chenvan/RoteVocabApp' style = {{alignSelf: 'center'}}>
                透析记词
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
