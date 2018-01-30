import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
// import {ViewEncapsulation} from '@angular/compiler/src/core';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: [`
        .ui-steps .ui-steps-item {
            width: 25%;
        }
        
        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            height: 10px;
            padding: 0 1em;
        }
         
        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
  // 使用本地模版
  encapsulation: ViewEncapsulation.None
})
export class StartComponent implements OnInit {
  // 声明一个类
  public items: MenuItem[];
  // 声明一个计数器
  public activeIndex: number = 1;
  constructor() { }

  ngOnInit() {
    this.items = [
      // 定义第一个按钮
      {
      // 显示文本
      label: '发起',
      // 回调函数
      command: (event: any) => {
      //   计数器加1
        this.activeIndex = 0;
      }
    },
      // 定义第二个
      {
        label: '审核',
      //   回调函数
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: '通过',
        command: (event) => {
          this.activeIndex = 2;
        }
      },
      {
        label: '评价',
        command: (event) => {
          this.activeIndex = 3;
        }
      }


    ];
  }

}
