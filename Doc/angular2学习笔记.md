# Angular2学习笔记

## 基础
### 概述
https://angular.io/docs/ts/latest/guide/

## 开发指南
### 路由和导航
以app文件夹做为app的根路径。
1. 配置router
   在systemjs.config.js中增加：
   ```
   packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

1. index.html中修改
  在<head>添加以下代码作为第一个子元素：
  ```
  <base href=".">
  ```
1. 创建两个component类。
   CrisisListComponent:
   app/crisis-list/component.ts
   ```
   import {Component, OnInit, Input} from "@angular/core";

   @Component({
       selector: 'crisis-list'
       , templateUrl: './app/crisis-list/template.html'
   })
   export class CrisisListComponent implements OnInit{
       constructor(){
       }

       ngOnInit(){
       }
   }
   ```

   HeroListComponent:
   app/hero-list/component.ts:
   ```
   @Component({
       selector: 'hero-list'
       , templateUrl: './app/hero-list/template.html'
   })
   export class HeroListComponent implements OnInit{
       constructor(){
       }

       ngOnInit(){
       }
   }
   ```

1. 配置路由器
   在app文件夹中，创建app.routes.ts文件
   ```
   import {CrisisListComponent} from "./crisis-list/component";
   import {HeroListComponent} from "./hero-list/component";
   import {provideRouter, RouterConfig} from "@angular/router";

   export const routes: RouterConfig = [
       { path: 'crisis-list', component: CrisisListComponent },
       { path: 'hero-list', component: HeroListComponent }
   ];

   export const APP_ROUTER_PROVIDERS = [
       provideRouter(routes)
   ];
   ```

1. 创建AppComponent类。
   ```
   import {Component} from '@angular/core';
   import {ROUTER_DIRECTIVES} from "@angular/router";

   @Component({
       selector: 'my-app'
       ,templateUrl: './app/app.component.html'
       ,directives: [ROUTER_DIRECTIVES]
   })
   export class AppComponent {
       title = 'Tour of Heroes';
   }
   ```

   app.component.html文件：
   ```
   <h1>{{title}}</h1>
   <nav>
       <a [routerLink]="['/crisis-list']">Crisis Center</a>
       <a [routerLink]="['/hero-list']">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
   ```
   模板中，可以允许多个router-outlet存在，但只允许有一个未命名的router-outlet。

1. 将APP_ROUTER_PROVIDERS在启动时注入
   在app/main.ts中，将APP_ROUTER_PROVIDERS做为第二个参数数组中的元素注入。
   ```
   import {APP_ROUTER_PROVIDERS} from "./app.routes";

   bootstrap(AppComponent, [
       APP_ROUTER_PROVIDERS
   ]);

   ```

