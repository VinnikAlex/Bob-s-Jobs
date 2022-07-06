(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[1856],{11856:(V,on,I)=>{"use strict";V.exports=I(34796)},34796:function(V,on,I){(function(Z,X){V.exports=X(I(32735),I(19615))})(this,function(Z,X){return function(o){var f={};function t(a){if(f[a])return f[a].exports;var i=f[a]={i:a,l:!1,exports:{}};return o[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=o,t.c=f,t.d=function(a,i,d){t.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:d})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,i){if(1&i&&(a=t(a)),8&i||4&i&&typeof a=="object"&&a&&a.__esModule)return a;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&i&&typeof a!="string")for(var s in a)t.d(d,s,function(r){return a[r]}.bind(null,s));return d},t.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(i,"a",i),i},t.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},t.p="",t(t.s=97)}({0:function(o,f,t){o.exports=t(19)()},1:function(o,f){o.exports=Z},10:function(o,f,t){var a=t(25),i=t(26),d=t(22),s=t(27);o.exports=function(r,u){return a(r)||i(r,u)||d(r,u)||s()},o.exports.default=o.exports,o.exports.__esModule=!0},13:function(o,f){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=t=function(i){return typeof i},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=t=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},o.exports.default=o.exports,o.exports.__esModule=!0),t(a)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},19:function(o,f,t){"use strict";var a=t(20);function i(){}function d(){}d.resetWarningCache=i,o.exports=function(){function s(m,l,y,p,n,e){if(e!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return s}s.isRequired=s;var u={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:r,element:s,elementType:s,instanceOf:r,node:s,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:d,resetWarningCache:i};return u.PropTypes=u,u}},2:function(o,f){o.exports=X},20:function(o,f,t){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(o,f){o.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var i=0,d=new Array(a);i<a;i++)d[i]=t[i];return d},o.exports.default=o.exports,o.exports.__esModule=!0},22:function(o,f,t){var a=t(21);o.exports=function(i,d){if(i){if(typeof i=="string")return a(i,d);var s=Object.prototype.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(i,d):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},24:function(o,f){o.exports=function(t,a){if(t==null)return{};var i,d,s={},r=Object.keys(t);for(d=0;d<r.length;d++)i=r[d],a.indexOf(i)>=0||(s[i]=t[i]);return s},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,f){o.exports=function(t){if(Array.isArray(t))return t},o.exports.default=o.exports,o.exports.__esModule=!0},26:function(o,f){o.exports=function(t,a){var i=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var d,s,r=[],u=!0,m=!1;try{for(i=i.call(t);!(u=(d=i.next()).done)&&(r.push(d.value),!a||r.length!==a);u=!0);}catch(l){m=!0,s=l}finally{try{u||i.return==null||i.return()}finally{if(m)throw s}}return r}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,f){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,f){o.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,f,t){var a=t(24);o.exports=function(i,d){if(i==null)return{};var s,r,u=a(i,d);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(r=0;r<m.length;r++)s=m[r],d.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(i,s)&&(u[s]=i[s])}return u},o.exports.default=o.exports,o.exports.__esModule=!0},47:function(o,f,t){"use strict";t.r(f),t.d(f,"Grid",function(){return k}),t.d(f,"GridItem",function(){return P});var a,i=t(5),d=t.n(i),s=t(4),r=t.n(s),u=t(3),m=t.n(u),l=t(1),y=t.n(l),p=t(2),n=t.n(p),e=t(0),c=t.n(e),x=Object(l.createContext)({gap:0,gridCols:12}),O=t(6),W=t(7),T=["gap","gridCols"],F=n()(O.Box)(a||(a=m()([`
  display: grid;
  grid-template-columns: repeat(`,`, 1fr);
  `,`
`])),function(h){return h.gridCols},function(h){var j=h.theme,w=h.gap;return Object(W.a)("gap",w,j)}),k=function(h){var j=h.gap,w=h.gridCols,L=r()(h,T);return y.a.createElement(x.Provider,{value:{gap:j,gridCols:w}},y.a.createElement(F,d()({gap:j,gridCols:w},L)))};k.defaultProps={gap:0,gridCols:12},k.propTypes={gap:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),gridCols:c.a.number};var R,N=["col","xs","s"],q=n.a.div(R||(R=m()([`
  grid-column: span `,`;
  max-width: 100%;

  `,` {
    grid-column: span `,`;
  }

  `,` {
    grid-column: span `,`;
  }
`])),function(h){return h.col},function(h){return h.theme.mediaQueries.tablet},function(h){return h.s},function(h){return h.theme.mediaQueries.mobile},function(h){return h.xs}),P=function(h){var j=h.col,w=h.xs,L=h.s,A=r()(h,N),C=Object(l.useContext)(x),Y=C.gap,$=C.gridCols;return y.a.createElement(q,{gap:Y,gridCols:$,col:j,xs:w,s:L},y.a.createElement(O.Box,A))};P.defaultProps={col:void 0,s:void 0,xs:void 0},P.propTypes={col:c.a.number,s:c.a.number,xs:c.a.number}},48:function(o,f,t){"use strict";t.d(f,"a",function(){return i});var a=t(1),i=function(d,s){Object(a.useEffect)(function(){var r=new ResizeObserver(s);return Array.isArray(d)?d.map(function(u){return r.observe(u.current)}):r.observe(d.current),function(){r.disconnect()}},[])}},5:function(o,f){function t(){return o.exports=t=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var d=arguments[i];for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&(a[s]=d[s])}return a},o.exports.default=o.exports,o.exports.__esModule=!0,t.apply(this,arguments)}o.exports=t,o.exports.default=o.exports,o.exports.__esModule=!0},6:function(o,f,t){"use strict";t.r(f),t.d(f,"Box",function(){return p});var a,i=t(3),d=t.n(i),s=t(0),r=t.n(s),u=t(2),m=t.n(u),l=t(7),y={color:!0},p=m.a.div.withConfig({shouldForwardProp:function(n,e){return!y[n]&&e(n)}})(a||(a=d()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e},function(n){var e=n.theme,c=n.background;return e.colors[c]},function(n){var e=n.theme,c=n.color;return e.colors[c]},function(n){var e=n.theme,c=n.padding;return Object(l.a)("padding",c,e)},function(n){var e=n.theme,c=n.paddingTop;return Object(l.a)("padding-top",c,e)},function(n){var e=n.theme,c=n.paddingRight;return Object(l.a)("padding-right",c,e)},function(n){var e=n.theme,c=n.paddingBottom;return Object(l.a)("padding-bottom",c,e)},function(n){var e=n.theme,c=n.paddingLeft;return Object(l.a)("padding-left",c,e)},function(n){var e=n.theme,c=n.marginLeft;return Object(l.a)("margin-left",c,e)},function(n){var e=n.theme,c=n.marginRight;return Object(l.a)("margin-right",c,e)},function(n){var e=n.theme,c=n.marginTop;return Object(l.a)("margin-top",c,e)},function(n){var e=n.theme,c=n.marginBottom;return Object(l.a)("margin-bottom",c,e)},function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(n){var e=n.theme,c=n.hasRadius,x=n.borderRadius;return c?e.borderRadius:x},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var e=n.borderColor;return n.theme.colors[e]},function(n){var e=n.theme,c=n.borderColor,x=n.borderStyle,O=n.borderWidth;if(c&&!x&&!O)return"1px solid ".concat(e.colors[c])},function(n){var e=n.theme,c=n.shadow;return e.shadows[c]},function(n){return n.pointerEvents},function(n){var e=n._hover,c=n.theme;return e?e(c):void 0},function(n){return n.display},function(n){return n.position},function(n){var e=n.left;return n.theme.spaces[e]||e},function(n){var e=n.right;return n.theme.spaces[e]||e},function(n){var e=n.top;return n.theme.spaces[e]||e},function(n){var e=n.bottom;return n.theme.spaces[e]||e},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var e=n.width;return n.theme.spaces[e]||e},function(n){var e=n.maxWidth;return n.theme.spaces[e]||e},function(n){var e=n.minWidth;return n.theme.spaces[e]||e},function(n){var e=n.height;return n.theme.spaces[e]||e},function(n){var e=n.maxHeight;return n.theme.spaces[e]||e},function(n){var e=n.minHeight;return n.theme.spaces[e]||e},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:r.a.func,background:r.a.string,basis:r.a.oneOfType([r.a.string,r.a.string]),borderColor:r.a.string,children:r.a.oneOfType([r.a.node,r.a.string]),color:r.a.string,flex:r.a.oneOfType([r.a.string,r.a.string]),grow:r.a.oneOfType([r.a.string,r.a.string]),hasRadius:r.a.bool,hiddenS:r.a.bool,hiddenXS:r.a.bool,padding:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingBottom:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingLeft:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingRight:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),paddingTop:r.a.oneOfType([r.a.number,r.a.arrayOf(r.a.number)]),shadow:r.a.string,shrink:r.a.oneOfType([r.a.string,r.a.string])}},7:function(o,f,t){"use strict";var a=t(10),i=t.n(a),d=t(13),s=t.n(d);f.a=function(r,u,m){var l=u;if(Array.isArray(u)||s()(u)!=="object"||(l=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),l!==void 0){if(Array.isArray(l)){var y=l,p=i()(y,3),n=p[0],e=p[1],c=p[2],x="".concat(r,": ").concat(m.spaces[n],";");return e!==void 0&&(x+="".concat(m.mediaQueries.tablet,`{
          `).concat(r,": ").concat(m.spaces[e],`;
        }`)),c!==void 0&&(x+="".concat(m.mediaQueries.mobile,`{
          `).concat(r,": ").concat(m.spaces[c],`;
        }`)),x}var O=m.spaces[l]||l;return"".concat(r,": ").concat(O,";")}}},8:function(o,f,t){"use strict";t.r(f),t.d(f,"Typography",function(){return y});var a,i=t(3),d=t.n(i),s=t(0),r=t.n(s),u=t(2),m=["alpha","beta","delta","epsilon","omega","pi","sigma"],l={fontSize:!0,fontWeight:!0},y=t.n(u).a.span.withConfig({shouldForwardProp:function(p,n){return!l[p]&&n(p)}})(a||(a=d()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(p){var n=p.theme,e=p.fontWeight;return n.fontWeights[e]},function(p){var n=p.theme,e=p.fontSize;return n.fontSizes[e]},function(p){var n=p.theme,e=p.lineHeight;return n.lineHeights[e]},function(p){var n=p.theme,e=p.textColor;return n.colors[e||"neutral800"]},function(p){return p.textTransform},function(p){return p.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(p){var n=p.variant,e=p.theme;switch(n){case"alpha":return`
        font-weight: `.concat(e.fontWeights.bold,`;
        font-size: `).concat(e.fontSizes[5],`;
        line-height: `).concat(e.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(e.fontWeights.bold,`;
        font-size: `).concat(e.fontSizes[4],`;
        line-height: `).concat(e.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(e.fontWeights.semiBold,`;
        font-size: `).concat(e.fontSizes[3],`;
        line-height: `).concat(e.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(e.fontSizes[3],`;
        line-height: `).concat(e.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(e.fontSizes[2],`;
        line-height: `).concat(e.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(e.fontSizes[1],`;
        line-height: `).concat(e.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(e.fontWeights.bold,`;
        font-size: `).concat(e.fontSizes[0],`;
        line-height: `).concat(e.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(e.fontSizes[2],`;
      `)}});y.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},y.propTypes={fontSize:r.a.oneOfType([r.a.number,r.a.string]),fontWeight:r.a.string,lineHeight:r.a.oneOfType([r.a.number,r.a.string]),textColor:r.a.string,textTransform:r.a.string,variant:r.a.oneOf(m)}},9:function(o,f,t){"use strict";t.r(f),t.d(f,"Flex",function(){return n});var a,i=t(3),d=t.n(i),s=t(0),r=t.n(s),u=t(2),m=t.n(u),l=t(6),y=t(7),p={direction:!0},n=m()(l.Box).withConfig({shouldForwardProp:function(e,c){return!p[e]&&c(e)}})(a||(a=d()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(e){return e.alignItems},function(e){return e.inline?"inline-flex":"flex"},function(e){return e.direction},function(e){return e.wrap},function(e){var c=e.gap,x=e.theme;return Object(y.a)("gap",c,x)},function(e){return e.justifyContent});n.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},n.propTypes={alignItems:r.a.string,basis:r.a.oneOfType([r.a.string,r.a.number]),direction:r.a.string,gap:r.a.oneOfType([r.a.shape({desktop:r.a.number,mobile:r.a.number,tablet:r.a.number}),r.a.number,r.a.arrayOf(r.a.number),r.a.string]),inline:r.a.bool,justifyContent:r.a.string,reverse:r.a.bool,wrap:r.a.string}},97:function(o,f,t){"use strict";t.r(f),t.d(f,"Layout",function(){return x}),t.d(f,"ActionLayout",function(){return R}),t.d(f,"ContentLayout",function(){return N}),t.d(f,"HeaderLayout",function(){return G}),t.d(f,"BaseHeaderLayout",function(){return B}),t.d(f,"TwoColsLayout",function(){return tn}),t.d(f,"GridLayout",function(){return en});var a,i,d=t(3),s=t.n(d),r=t(1),u=t.n(r),m=t(0),l=t.n(m),y=t(2),p=t.n(y),n=t(6),e=p()(n.Box)(a||(a=s()([`
  display: grid;
  grid-template-columns: `,`;
`])),function(g){return g.hasSideNav?"auto 1fr":"1fr"}),c=p()(n.Box)(i||(i=s()([`
  overflow-x: hidden;
`]))),x=function(g){var v=g.sideNav,b=g.children;return u.a.createElement(e,{hasSideNav:Boolean(v)},v,u.a.createElement(c,{paddingBottom:10},b))};x.defaultProps={sideNav:void 0},x.propTypes={children:l.a.node.isRequired,sideNav:l.a.node};var O,W,T=t(9),F=p()(T.Flex)(O||(O=s()([`
  & > * + * {
    margin-left: `,`;
  }

  margin-left: `,`;
`])),function(g){return g.theme.spaces[2]},function(g){return g.pullRight?"auto":void 0}),k=p()(F)(W||(W=s()([`
  flex-shrink: 0;
`]))),R=function(g){var v=g.startActions,b=g.endActions;return v||b?u.a.createElement(n.Box,{paddingLeft:10,paddingRight:10},u.a.createElement(n.Box,{paddingBottom:4},u.a.createElement(T.Flex,{justifyContent:"space-between",alignItems:"flex-start"},v&&u.a.createElement(F,{wrap:"wrap"},v),b&&u.a.createElement(k,{pullRight:!0},b)))):null};R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:l.a.node,startActions:l.a.node};var N=function(g){var v=g.children;return u.a.createElement(n.Box,{paddingLeft:10,paddingRight:10},v)};N.propTypes={children:l.a.node.isRequired};var q,P=t(4),h=t.n(P),j=t(5),w=t.n(j),L=t(10),A=t.n(L),C=t(8),Y=t(48),$=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],an=function(){var g=Object(r.useRef)(null),v=Object(r.useState)(null),b=A()(v,2),E=b[0],S=b[1],_=function(M){var Q=Object(r.useRef)(null),sn=Object(r.useState)(!0),rn=A()(sn,2),cn=rn[0],dn=rn[1],ln=function(D){var U=A()(D,1)[0];dn(U.isIntersecting)};return Object(r.useEffect)(function(){var D=Q.current,U=new IntersectionObserver(ln,M);return D&&U.observe(Q.current),function(){D&&U.disconnect()}},[Q,M]),[Q,cn]}({root:null,rootMargin:"0px",threshold:0}),H=A()(_,2),z=H[0],K=H[1];return Object(Y.a)(z,function(){z.current&&S(z.current.getBoundingClientRect())}),Object(r.useEffect)(function(){g.current&&S(g.current.getBoundingClientRect())},[g]),{containerRef:z,isVisible:K,baseHeaderLayoutRef:g,headerSize:E}},G=function(g){var v=an(),b=v.containerRef,E=v.isVisible,S=v.baseHeaderLayoutRef,_=v.headerSize;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{height:_==null?void 0:_.height},ref:b},E&&u.a.createElement(B,w()({ref:S},g))),!E&&u.a.createElement(B,w()({},g,{sticky:!0,width:_==null?void 0:_.width})))};G.displayName="HeaderLayout";var un=p()(n.Box)(q||(q=s()([`
  position: fixed;
  top: 0;
  right: 0;
  width: `,`px;
  z-index: 4;
  box-shadow: `,`;
`])),function(g){return g.width},function(g){return g.theme.shadows.tableShadow}),B=u.a.forwardRef(function(g,v){var b=g.navigationAction,E=g.primaryAction,S=g.secondaryAction,_=g.subtitle,H=g.title,z=g.sticky,K=g.width,M=h()(g,$);return z?u.a.createElement(un,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:K,"data-strapi-header-sticky":!0},u.a.createElement(T.Flex,{justifyContent:"space-between"},u.a.createElement(T.Flex,null,b&&u.a.createElement(n.Box,{paddingRight:3},b),u.a.createElement(n.Box,null,u.a.createElement(C.Typography,w()({variant:"beta",as:"h1"},M),H),u.a.createElement(C.Typography,{variant:"pi",textColor:"neutral600"},_)),S?u.a.createElement(n.Box,{paddingLeft:4},S):null),u.a.createElement(T.Flex,null,E?u.a.createElement(n.Box,{paddingLeft:2},E):void 0))):u.a.createElement(n.Box,{ref:v,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:b?6:8,background:"neutral100","data-strapi-header":!0},b?u.a.createElement(n.Box,{paddingBottom:2},b):null,u.a.createElement(T.Flex,{justifyContent:"space-between"},u.a.createElement(T.Flex,null,u.a.createElement(C.Typography,w()({as:"h1",variant:"alpha"},M),H),S?u.a.createElement(n.Box,{paddingLeft:4},S):null),E),u.a.createElement(C.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},_))});B.displayName="BaseHeaderLayout",B.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},B.propTypes={navigationAction:l.a.node,primaryAction:l.a.node,secondaryAction:l.a.node,sticky:l.a.bool,subtitle:l.a.string,title:l.a.string.isRequired,width:l.a.number},G.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},G.propTypes={navigationAction:l.a.node,primaryAction:l.a.node,secondaryAction:l.a.node,subtitle:l.a.string,title:l.a.string.isRequired};var nn,J=t(47),tn=function(g){var v=g.startCol,b=g.endCol;return u.a.createElement(J.Grid,{gap:4},u.a.createElement(J.GridItem,{col:9,s:12},u.a.createElement(n.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},v)),u.a.createElement(J.GridItem,{col:3,s:12},u.a.createElement(n.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},b)))};tn.propTypes={endCol:l.a.node.isRequired,startCol:l.a.node.isRequired};var en=p.a.div(nn||(nn=s()([`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: `,`;
`])),function(g){return g.theme.spaces[4]});en.propTypes={children:l.a.node.isRequired}}})})}}]);
