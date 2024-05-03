(self.webpackChunkjecyu_design=self.webpackChunkjecyu_design||[]).push([[761],{67144:function(t,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return d}});var i=e(15009),u=e.n(i),s=e(99289),o=e.n(s),r=e(67294),d={"alert-demo-basic":{component:r.memo(r.lazy(function(){return e.e(819).then(e.bind(e,96938))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"18.3.1"},"../style.ts":{type:"FILE",value:e(82441).Z},"../index.tsx":{type:"FILE",value:e(59695).Z},"./index.less":{type:"FILE",value:e(33936).Z},"prop-types":{type:"NPM",value:"15.8.1"}},entry:"index.tsx"},context:{react:e(67294),"../style.ts":e(86169),"../index.tsx":e(70208),"./index.less":e(27386),"prop-types":e(45697)},renderOpts:{compile:function(){var l=o()(u()().mark(function c(){var p,m=arguments;return u()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(19).then(e.bind(e,4019));case 2:return _.abrupt("return",(p=_.sent).default.apply(p,m));case 3:case"end":return _.stop()}},c)}));function a(){return l.apply(this,arguments)}return a}()}}}},70208:function(t,n,e){"use strict";e.r(n);var i=e(97857),u=e.n(i),s=e(13769),o=e.n(s),r=e(67294),d=e(45697),l=e.n(d),a=e(85893),c=["children","kind"],p="jecyu-alert",m={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},f=function(v){var E=v.children,y=v.kind,j=y===void 0?"info":y,P=o()(v,c);return(0,a.jsx)("div",u()(u()({className:p,style:{background:m[j]}},P),{},{children:E}))};f.propTypes={kind:l().oneOf(["info","positive","negative","warning"])},n.default=f},86169:function(t,n,e){"use strict";e.r(n);var i=e(27386)},27386:function(t,n,e){"use strict";e.r(n)},27825:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return i}});const i=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(t,n){"use strict";n.Z=`import React from "react";
import Alert from "../index";
import "../style";

export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;
`},59695:function(t,n){"use strict";n.Z=`import React from "react";
import t from "prop-types";

export interface AlertProps {
  /**
   * @description       Alert \u7684\u7C7B\u578B
   * @default           'info'
   */
  kind?: "info" | "positive" | "negative" | "warning";
  /**
   * @description       React Node
   * @default           null
   */
  children: React.ReactNode;
}

export type KindMap = Record<Required<AlertProps>["kind"], string>;

const prefixCls = "jecyu-alert";

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
};

const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(["info", "positive", "negative", "warning"]),
};

export default Alert;
`},33936:function(t,n){"use strict";n.Z=`@popupPrefix: jecyu-alert;

.@{popupPrefix} {
  padding: 20px;
  background: white;
  border-radius: 3px;
  color: white;
}
`},82441:function(t,n){"use strict";n.Z=`// # \u6837\u5F0F\u6587\u4EF6\u91CC\u4E3A\u4EC0\u4E48\u5B58\u5728\u4E00\u4E2Aindex.ts - \u6309\u9700\u52A0\u8F7D\u6837\u5F0F \u7BA1\u7406\u6837\u5F0F\u4F9D\u8D56
import "./index.less";
`},13769:function(t,n,e){var i=e(48541);function u(s,o){if(s==null)return{};var r=i(s,o),d,l;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);for(l=0;l<a.length;l++)d=a[l],!(o.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(s,d)&&(r[d]=s[d])}return r}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},48541:function(t){function n(e,i){if(e==null)return{};var u={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(i.indexOf(o)>=0)&&(u[o]=e[o]);return u}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
