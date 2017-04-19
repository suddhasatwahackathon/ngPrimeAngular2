# Angular2NgPrime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Installing NG Prime

* npm install primeng --save




And regarding fusion chart support in angular4. There is a library angular2-fusionchart . But there is some problem on compilation time during typescript. So we raise the query on the development thread


FYI https://github.com/fusioncharts/angular2-fusioncharts/issues/10


They give us the solution on that and it works after that. But it will be fine after the next version release.

For the time being if you want to inject fusion chart on angular2/4, then

npm install angular2-fusioncharts --save

Next go to the folder node_modules->@types->fusioncharts->fusioncharts.charts.d.ts

and replace the total code to 

import { FusionChartStatic } from "fusioncharts";

declare var Charts: (H: FusionChartStatic) => FusionChartStatic;
export = Charts;
export as namespace Charts;


It will then works. 

