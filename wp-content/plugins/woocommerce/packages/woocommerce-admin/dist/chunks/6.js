(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[6],{501:function(e,t,r){"use strict";r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return _})),r.d(t,"f",(function(){return f})),r.d(t,"h",(function(){return O})),r.d(t,"g",(function(){return y}));var a=r(23),o=r(26),c=r.n(o),n=r(3),i=r(21),l=r(22),m=r(25),s=r(502);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1?arguments[1]:void 0,n="function"==typeof e?e(o):e,l=Object(i.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);var m={include:l.join(","),per_page:l.length};return c()({path:Object(a.addQueryArgs)(n,m)}).then((function(e){return e.map(t)}))}}u(l.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var d=u(l.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),b=u(l.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=u(l.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),_=u(l.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),f=u(l.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(s.a)(e)}}));function O(e){var t=e.attributes,r=e.name,a=Object(m.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(a)>-1)return r;var o=t.map((function(e){return e.option})).join(", ");return o?r+a+o:r}var y=u((function(e){var t=e.products;return t?l.NAMESPACE+"/products/".concat(t,"/variations"):l.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:O(e)}}))},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(2);function o(e){return[e.country,e.state,e.name||Object(a.__)("TAX",'woocommerce'),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},503:function(e,t,r){"use strict";var a=r(5),o=r.n(a),c=r(12),n=r.n(c),i=r(13),l=r.n(i),m=r(14),s=r.n(m),u=r(15),d=r.n(u),b=r(7),p=r.n(b),_=r(0),f=r(2),O=r(20),y=r(75),v=r(11),j=r(3),g=r(1),h=r.n(g),w=r(47),S=r(22),R=r(29),C=r(499),D=r(500),x=r(21);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=p()(e);if(t){var o=p()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return d()(this,r)}}var q=function(e){s()(r,e);var t=P(r);function r(){return n()(this,r),t.apply(this,arguments)}return l()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(j.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),A({date:Object(y.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,o=e.selectedChart,c=e.defaultDateRange,n=Object(R.getIntervalForQuery)(t),i=Object(R.getCurrentDates)(t,c),l=i.primary,m=i.secondary;return r.data.intervals.map((function(e,r){var c=Object(R.getPreviousDate)(e.date_start,l.after,m.after,t.compare,n),i=a.data.intervals[r];return{date:Object(y.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(l.label," (").concat(l.range,")"),labelDate:e.date_start,value:e.subtotals[o.key]||0},secondary:{label:"".concat(m.label," (").concat(m.range,")"),labelDate:c.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[o.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(j.get)(t,["data","totals",a.key],null),secondary:Object(j.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var o=this.props,c=o.emptySearchResults,n=o.filterParam,i=o.interactiveLegend,l=o.itemsLabel,m=o.legendPosition,s=o.path,u=o.query,d=o.selectedChart,b=o.showHeaderControls,p=o.primaryData,O=Object(R.getIntervalForQuery)(u),y=Object(R.getAllowedIntervalsForQuery)(u),v=Object(R.getDateFormatsForInterval)(O,p.data.intervals.length),j=c?Object(f.__)("No data for the current search",'woocommerce'):Object(f.__)("No data for the selected date range",'woocommerce'),g=this.context,h=g.formatAmount,C=g.getCurrencyConfig;return Object(_.createElement)(w.Chart,{allowedIntervals:y,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:j,filterParam:n,interactiveLegend:i,interval:O,isRequesting:t,itemsLabel:l,legendPosition:m,legendTotals:a,mode:e,path:s,query:u,screenReaderFormat:v.screenReaderFormat,showHeaderControls:b,title:d.label,tooltipLabelFormat:v.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(S.getTooltipValueFormat)(d.type,h),chartType:Object(R.getChartTypeForQuery)(u),valueType:d.type,xFormat:v.xFormat,x2Format:v.x2Format,currency:C()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(_.createElement)(D.a,{isError:!0});var a=t||r.isRequesting,o=this.getItemChartData();return this.renderChart("item-comparison",a,o)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(_.createElement)(D.a,{isError:!0});var o=t||r.isRequesting||a.isRequesting,c=this.getTimeChartData(),n=this.getTimeChartTotals();return this.renderChart("time-comparison",o,c,n)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(_.Component);q.contextType=C.a,q.propTypes={filters:h.a.array,isRequesting:h.a.bool,itemsLabel:h.a.string,limitProperties:h.a.array,mode:h.a.string,path:h.a.string.isRequired,primaryData:h.a.object,query:h.a.object.isRequired,secondaryData:h.a.object,selectedChart:h.a.shape({key:h.a.string.isRequired,label:h.a.string.isRequired,order:h.a.oneOf(["asc","desc"]),orderby:h.a.string,type:h.a.oneOf(["average","number","currency"]).isRequired}).isRequired},q.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(O.compose)(Object(v.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,o=t.filters,c=t.isRequesting,n=t.limitProperties,i=t.query,l=t.advancedFilters,m=n||[a],s=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var o=t.slice(0),c=o.pop();if(c.showFilters(r,a)){var n=Object(x.flattenFilters)(c.filters),i=r[c.param]||c.defaultValue||"all";return Object(j.find)(n,{value:i})}return e(o,r,a)}(o,i),u=Object(j.get)(s,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(j.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(j.get)(e,["chartMode"])}return null}(s,i)||"time-comparison",b=e(S.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,p={mode:d,filterParam:u,defaultDateRange:b};if(c)return p;var _=m.some((function(e){return i[e]&&i[e].length}));if(i.search&&!_)return A(A({},p),{},{emptySearchResults:!0});var f=r&&r.map((function(e){return e.key})),O=Object(S.getReportChartData)({endpoint:a,dataType:"primary",query:i,select:e,limitBy:m,filters:o,advancedFilters:l,defaultDateRange:b,fields:f});if("item-comparison"===d)return A(A({},p),{},{primaryData:O});var y=Object(S.getReportChartData)({endpoint:a,dataType:"secondary",query:i,select:e,limitBy:m,filters:o,advancedFilters:l,defaultDateRange:b,fields:f});return A(A({},p),{},{primaryData:O,secondaryData:y})})))(q)},532:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return m}));var a=r(2),o=r(43),c=r(25),n=r(501),i=Object(o.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(a.__)("Orders",'woocommerce'),type:"number"},{key:"net_revenue",label:Object(a.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(a.__)("Average Order Value",'woocommerce'),type:"currency"},{key:"avg_items_per_order",label:Object(a.__)("Average Items Per Order",'woocommerce'),order:"desc",orderby:"num_items_sold",type:"average"}]),l=Object(o.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(a.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(a.__)("All Orders",'woocommerce'),value:"all"},{label:Object(a.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),m=Object(o.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(a._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ",'woocommerce'),filters:{status:{labels:{add:Object(a.__)("Order Status",'woocommerce'),remove:Object(a.__)("Remove order status filter",'woocommerce'),rule:Object(a.__)("Select an order status filter match",'woocommerce'),title:Object(a.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select an order status",'woocommerce')},rules:[{value:"is",label:Object(a._x)("Is","order status",'woocommerce')},{value:"is_not",label:Object(a._x)("Is Not","order status",'woocommerce')}],input:{component:"SelectControl",options:Object.keys(c.d).map((function(e){return{value:e,label:c.d[e]}}))}},product:{labels:{add:Object(a.__)("Products",'woocommerce'),placeholder:Object(a.__)("Search products",'woocommerce'),remove:Object(a.__)("Remove products filter",'woocommerce'),rule:Object(a.__)("Select a product filter match",'woocommerce'),title:Object(a.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select products",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","products",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","products",'woocommerce')}],input:{component:"Search",type:"products",getLabels:n.d}},variation:{labels:{add:Object(a.__)("Variations",'woocommerce'),placeholder:Object(a.__)("Search variations",'woocommerce'),remove:Object(a.__)("Remove variations filter",'woocommerce'),rule:Object(a.__)("Select a variation filter match",'woocommerce'),title:Object(a.__)("{{title}}Variation{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select variation",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","variations",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","variations",'woocommerce')}],input:{component:"Search",type:"variations",getLabels:n.g}},coupon:{labels:{add:Object(a.__)("Coupon Codes",'woocommerce'),placeholder:Object(a.__)("Search coupons",'woocommerce'),remove:Object(a.__)("Remove coupon filter",'woocommerce'),rule:Object(a.__)("Select a coupon filter match",'woocommerce'),title:Object(a.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select coupon codes",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","coupon code",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","coupon code",'woocommerce')}],input:{component:"Search",type:"coupons",getLabels:n.b}},customer_type:{labels:{add:Object(a.__)("Customer Type",'woocommerce'),remove:Object(a.__)("Remove customer filter",'woocommerce'),rule:Object(a.__)("Select a customer filter match",'woocommerce'),title:Object(a.__)("{{title}}Customer is{{/title}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select a customer type",'woocommerce')},input:{component:"SelectControl",options:[{value:"new",label:Object(a.__)("New",'woocommerce')},{value:"returning",label:Object(a.__)("Returning",'woocommerce')}],defaultOption:"new"}},refunds:{labels:{add:Object(a.__)("Refunds",'woocommerce'),remove:Object(a.__)("Remove refunds filter",'woocommerce'),rule:Object(a.__)("Select a refund filter match",'woocommerce'),title:Object(a.__)("{{title}}Refunds{{/title}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select a refund type",'woocommerce')},input:{component:"SelectControl",options:[{value:"all",label:Object(a.__)("All",'woocommerce')},{value:"partial",label:Object(a.__)("Partially refunded",'woocommerce')},{value:"full",label:Object(a.__)("Fully refunded",'woocommerce')},{value:"none",label:Object(a.__)("None",'woocommerce')}],defaultOption:"all"}},tax_rate:{labels:{add:Object(a.__)("Tax Rates",'woocommerce'),placeholder:Object(a.__)("Search tax rates",'woocommerce'),remove:Object(a.__)("Remove tax rate filter",'woocommerce'),rule:Object(a.__)("Select a tax rate filter match",'woocommerce'),title:Object(a.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select tax rates",'woocommerce')},rules:[{value:"includes",label:Object(a._x)("Includes","tax rate",'woocommerce')},{value:"excludes",label:Object(a._x)("Excludes","tax rate",'woocommerce')}],input:{component:"Search",type:"taxes",getLabels:n.f}},attribute:{allowMultiple:!0,labels:{add:Object(a.__)("Attribute",'woocommerce'),placeholder:Object(a.__)("Search attributes",'woocommerce'),remove:Object(a.__)("Remove attribute filter",'woocommerce'),rule:Object(a.__)("Select a product attribute filter match",'woocommerce'),title:Object(a.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(a.__)("Select attributes",'woocommerce')},rules:[{value:"is",label:Object(a._x)("Is","product attribute",'woocommerce')},{value:"is_not",label:Object(a._x)("Is Not","product attribute",'woocommerce')}],input:{component:"ProductAttribute"}}}})}}]);