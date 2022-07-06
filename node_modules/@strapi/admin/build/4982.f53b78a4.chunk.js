(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4982],{12001:(Q,re,_)=>{"use strict";Q.exports=_(27901)},27901:function(Q,re,_){var X=_(98399);(function(R,C){Q.exports=C(_(32735),_(19615),_(60672))})(this,function(R,C,y){return function(r){var u={};function e(a){if(u[a])return u[a].exports;var i=u[a]={i:a,l:!1,exports:{}};return r[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=r,e.c=u,e.d=function(a,i,f){e.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:f})},e.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,i){if(1&i&&(a=e(a)),8&i||4&i&&typeof a=="object"&&a&&a.__esModule)return a;var f=Object.create(null);if(e.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:a}),2&i&&typeof a!="string")for(var c in a)e.d(f,c,function(o){return a[o]}.bind(null,c));return f},e.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(i,"a",i),i},e.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},e.p="",e(e.s=99)}([function(r,u,e){r.exports=e(19)()},function(r,u){r.exports=R},function(r,u){r.exports=C},function(r,u){r.exports=function(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){var a=e(24);r.exports=function(i,f){if(i==null)return{};var c,o,g=a(i,f);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(i);for(o=0;o<h.length;o++)c=h[o],f.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(i,c)&&(g[c]=i[c])}return g},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){function e(){return r.exports=e=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var f=arguments[i];for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(a[c]=f[c])}return a},r.exports.default=r.exports,r.exports.__esModule=!0,e.apply(this,arguments)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.r(u),e.d(u,"Box",function(){return l});var a,i=e(3),f=e.n(i),c=e(0),o=e.n(c),g=e(2),h=e.n(g),d=e(7),x={color:!0},l=h.a.div.withConfig({shouldForwardProp:function(n,t){return!x[n]&&t(n)}})(a||(a=f()([`
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
`])),function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t},function(n){var t=n.theme,p=n.background;return t.colors[p]},function(n){var t=n.theme,p=n.color;return t.colors[p]},function(n){var t=n.theme,p=n.padding;return Object(d.a)("padding",p,t)},function(n){var t=n.theme,p=n.paddingTop;return Object(d.a)("padding-top",p,t)},function(n){var t=n.theme,p=n.paddingRight;return Object(d.a)("padding-right",p,t)},function(n){var t=n.theme,p=n.paddingBottom;return Object(d.a)("padding-bottom",p,t)},function(n){var t=n.theme,p=n.paddingLeft;return Object(d.a)("padding-left",p,t)},function(n){var t=n.theme,p=n.marginLeft;return Object(d.a)("margin-left",p,t)},function(n){var t=n.theme,p=n.marginRight;return Object(d.a)("margin-right",p,t)},function(n){var t=n.theme,p=n.marginTop;return Object(d.a)("margin-top",p,t)},function(n){var t=n.theme,p=n.marginBottom;return Object(d.a)("margin-bottom",p,t)},function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(n){var t=n.theme,p=n.hasRadius,v=n.borderRadius;return p?t.borderRadius:v},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var t=n.borderColor;return n.theme.colors[t]},function(n){var t=n.theme,p=n.borderColor,v=n.borderStyle,w=n.borderWidth;if(p&&!v&&!w)return"1px solid ".concat(t.colors[p])},function(n){var t=n.theme,p=n.shadow;return t.shadows[p]},function(n){return n.pointerEvents},function(n){var t=n._hover,p=n.theme;return t?t(p):void 0},function(n){return n.display},function(n){return n.position},function(n){var t=n.left;return n.theme.spaces[t]||t},function(n){var t=n.right;return n.theme.spaces[t]||t},function(n){var t=n.top;return n.theme.spaces[t]||t},function(n){var t=n.bottom;return n.theme.spaces[t]||t},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var t=n.width;return n.theme.spaces[t]||t},function(n){var t=n.maxWidth;return n.theme.spaces[t]||t},function(n){var t=n.minWidth;return n.theme.spaces[t]||t},function(n){var t=n.height;return n.theme.spaces[t]||t},function(n){var t=n.maxHeight;return n.theme.spaces[t]||t},function(n){var t=n.minHeight;return n.theme.spaces[t]||t},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});l.displayName="Box",l.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},l.propTypes={_hover:o.a.func,background:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.string]),borderColor:o.a.string,children:o.a.oneOfType([o.a.node,o.a.string]),color:o.a.string,flex:o.a.oneOfType([o.a.string,o.a.string]),grow:o.a.oneOfType([o.a.string,o.a.string]),hasRadius:o.a.bool,hiddenS:o.a.bool,hiddenXS:o.a.bool,padding:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingBottom:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingLeft:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingRight:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingTop:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),shadow:o.a.string,shrink:o.a.oneOfType([o.a.string,o.a.string])}},function(r,u,e){"use strict";var a=e(10),i=e.n(a),f=e(13),c=e.n(f);u.a=function(o,g,h){var d=g;if(Array.isArray(g)||c()(g)!=="object"||(d=[g==null?void 0:g.desktop,g==null?void 0:g.tablet,g==null?void 0:g.mobile]),d!==void 0){if(Array.isArray(d)){var x=d,l=i()(x,3),n=l[0],t=l[1],p=l[2],v="".concat(o,": ").concat(h.spaces[n],";");return t!==void 0&&(v+="".concat(h.mediaQueries.tablet,`{
          `).concat(o,": ").concat(h.spaces[t],`;
        }`)),p!==void 0&&(v+="".concat(h.mediaQueries.mobile,`{
          `).concat(o,": ").concat(h.spaces[p],`;
        }`)),v}var w=h.spaces[d]||d;return"".concat(o,": ").concat(w,";")}}},function(r,u,e){"use strict";e.r(u),e.d(u,"Typography",function(){return x});var a,i=e(3),f=e.n(i),c=e(0),o=e.n(c),g=e(2),h=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},x=e.n(g).a.span.withConfig({shouldForwardProp:function(l,n){return!d[l]&&n(l)}})(a||(a=f()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(l){var n=l.theme,t=l.fontWeight;return n.fontWeights[t]},function(l){var n=l.theme,t=l.fontSize;return n.fontSizes[t]},function(l){var n=l.theme,t=l.lineHeight;return n.lineHeights[t]},function(l){var n=l.theme,t=l.textColor;return n.colors[t||"neutral800"]},function(l){return l.textTransform},function(l){return l.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(l){var n=l.variant,t=l.theme;switch(n){case"alpha":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[5],`;
        line-height: `).concat(t.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[4],`;
        line-height: `).concat(t.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(t.fontWeights.semiBold,`;
        font-size: `).concat(t.fontSizes[3],`;
        line-height: `).concat(t.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(t.fontSizes[3],`;
        line-height: `).concat(t.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(t.fontSizes[2],`;
        line-height: `).concat(t.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(t.fontSizes[1],`;
        line-height: `).concat(t.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(t.fontWeights.bold,`;
        font-size: `).concat(t.fontSizes[0],`;
        line-height: `).concat(t.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(t.fontSizes[2],`;
      `)}});x.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},x.propTypes={fontSize:o.a.oneOfType([o.a.number,o.a.string]),fontWeight:o.a.string,lineHeight:o.a.oneOfType([o.a.number,o.a.string]),textColor:o.a.string,textTransform:o.a.string,variant:o.a.oneOf(h)}},function(r,u,e){"use strict";e.r(u),e.d(u,"Flex",function(){return n});var a,i=e(3),f=e.n(i),c=e(0),o=e.n(c),g=e(2),h=e.n(g),d=e(6),x=e(7),l={direction:!0},n=h()(d.Box).withConfig({shouldForwardProp:function(t,p){return!l[t]&&p(t)}})(a||(a=f()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.wrap},function(t){var p=t.gap,v=t.theme;return Object(x.a)("gap",p,v)},function(t){return t.justifyContent});n.defaultProps={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},n.propTypes={alignItems:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.number]),direction:o.a.string,gap:o.a.oneOfType([o.a.shape({desktop:o.a.number,mobile:o.a.number,tablet:o.a.number}),o.a.number,o.a.arrayOf(o.a.number),o.a.string]),inline:o.a.bool,justifyContent:o.a.string,reverse:o.a.bool,wrap:o.a.string}},function(r,u,e){var a=e(25),i=e(26),f=e(22),c=e(27);r.exports=function(o,g){return a(o)||i(o,g)||f(o,g)||c()},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.d(u,"a",function(){return a});var a={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},,function(r,u){function e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=e=function(i){return typeof i},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r.exports.default=r.exports,r.exports.__esModule=!0),e(a)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.d(u,"a",function(){return f});var a=e(1),i=0,f=function(c,o){return Object(a.useRef)(o||"".concat(c,"-").concat(++i)).current}},,function(r,u,e){"use strict";e.d(u,"b",function(){return a}),e.d(u,"c",function(){return i}),e.d(u,"a",function(){return f});var a=function(c){return function(o){var g=o.theme,h=o.size;return g.sizes[c][h]}},i=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"&";return function(o){var g=o.theme,h=o.hasError;return`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      `.concat(c,`:focus-within {
        border: 1px solid `).concat(h?g.colors.danger600:g.colors.primary600,`;
        box-shadow: `).concat(h?g.colors.danger600:g.colors.primary600,` 0px 0px 0px 2px;
      }
    `)}},f=function(c){var o=c.theme;return`
  position: relative;
  outline: none;
  
  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid `.concat(o.colors.primary600,`;
    }
  }
`)}},,,function(r,u,e){"use strict";var a=e(20);function i(){}function f(){}f.resetWarningCache=i,r.exports=function(){function c(h,d,x,l,n,t){if(t!==a){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function o(){return c}c.isRequired=c;var g={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:o,element:c,elementType:c,instanceOf:o,node:c,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:f,resetWarningCache:i};return g.PropTypes=g,g}},function(r,u,e){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(r,u){r.exports=function(e,a){(a==null||a>e.length)&&(a=e.length);for(var i=0,f=new Array(a);i<a;i++)f[i]=e[i];return f},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){var a=e(21);r.exports=function(i,f){if(i){if(typeof i=="string")return a(i,f);var c=Object.prototype.toString.call(i).slice(8,-1);return c==="Object"&&i.constructor&&(c=i.constructor.name),c==="Map"||c==="Set"?Array.from(i):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?a(i,f):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u,e){"use strict";e.r(u),e.d(u,"Stack",function(){return O});var a,i,f=e(5),c=e.n(f),o=e(4),g=e.n(o),h=e(3),d=e.n(h),x=e(1),l=e.n(x),n=e(0),t=e.n(n),p=e(2),v=e.n(p),w=e(9),N=["horizontal","spacing","size"],S={size:!0},W=v()(w.Flex).withConfig({shouldForwardProp:function(m,E){return!S[m]&&E(m)}})(a||(a=d()([`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: `,`;
  }
`])),function(m){var E=m.theme,j=m.spacing;return E.spaces[j]}),k=v()(w.Flex).withConfig({shouldForwardProp:function(m,E){return!S[m]&&E(m)}})(i||(i=d()([`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: `,`;
  }
`])),function(m){var E=m.theme,j=m.spacing;return E.spaces[j]}),O=Object(x.forwardRef)(function(m,E){var j=m.horizontal,D=m.spacing,I=m.size,B=g()(m,N);return I&&X.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),j?l.a.createElement(k,c()({ref:E,spacing:D||I},B)):l.a.createElement(W,c()({direction:"column",alignItems:"stretch",ref:E,spacing:D||I},B))});O.displayName="Stack",O.defaultProps={horizontal:!1,size:void 0,spacing:void 0},O.propTypes={horizontal:t.a.bool,size:t.a.number,spacing:t.a.number}},function(r,u){r.exports=function(e,a){if(e==null)return{};var i,f,c={},o=Object.keys(e);for(f=0;f<o.length;f++)i=o[f],a.indexOf(i)>=0||(c[i]=e[i]);return c},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(e){if(Array.isArray(e))return e},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(e,a){var i=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(i!=null){var f,c,o=[],g=!0,h=!1;try{for(i=i.call(e);!(g=(f=i.next()).done)&&(o.push(f.value),!a||o.length!==a);g=!0);}catch(d){h=!0,c=d}finally{try{g||i.return==null||i.return()}finally{if(h)throw c}}return o}},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},,function(r,u,e){var a=e(42),i=e(43),f=e(22),c=e(44);r.exports=function(o){return a(o)||i(o)||f(o)||c()},r.exports.default=r.exports,r.exports.__esModule=!0},,function(r,u){r.exports=function(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=y},,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"Icon",function(){return p});var a,i=e(5),f=e.n(i),c=e(3),o=e.n(c),g=e(1),h=e.n(g),d=e(0),x=e.n(d),l=e(6),n=e(2),t=e.n(n)()(l.Box)(a||(a=o()([`
  path {
    fill: `,`;
  }
  `,`
`])),function(v){var w=v.color;return v.theme.colors[w]},function(v){var w=v.theme;return(0,v.colors)(w)}),p=h.a.forwardRef(function(v,w){return h.a.createElement(t,f()({ref:w},v))});p.displayName="Icon",p.defaultProps={color:"neutral600",colors:function(){}},p.propTypes={color:x.a.string,colors:x.a.func}},function(r,u,e){var a=e(21);r.exports=function(i){if(Array.isArray(i))return a(i)},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)},r.exports.default=r.exports,r.exports.__esModule=!0},function(r,u){r.exports=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},,,,,,,,,,,,,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"TextButton",function(){return O});var a,i=e(5),f=e.n(i),c=e(4),o=e.n(c),g=e(3),h=e.n(g),d=e(1),x=e.n(d),l=e(0),n=e.n(l),t=e(2),p=e.n(t),v=e(6),w=e(8),N=e(9),S=e(16),W=["children","startIcon","endIcon","onClick","disabled"],k=p()(N.Flex)(a||(a=h()([`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: `,`;
    }
  }

  svg {
    display: flex;
    font-size: `,`rem;
  }

  svg path {
    fill: `,`;
  }

  `,`
`])),function(m){return m.theme.colors.neutral600},.625,function(m){return m.theme.colors.primary600},S.a),O=x.a.forwardRef(function(m,E){var j=m.children,D=m.startIcon,I=m.endIcon,B=m.onClick,U=m.disabled,q=o()(m,W),G=B&&!U?B:void 0;return x.a.createElement(k,f()({ref:E,"aria-disabled":U,onClick:G,as:"button",type:"button"},q),D&&x.a.createElement(v.Box,{as:"span",paddingRight:2,"aria-hidden":!0},D),x.a.createElement(w.Typography,{variant:"pi",textColor:U?"neutral600":"primary600"},j),I&&x.a.createElement(v.Box,{as:"span",paddingLeft:2,"aria-hidden":!0},I))});O.displayName="TextButton",O.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,onClick:void 0},O.propTypes={children:n.a.node.isRequired,disabled:n.a.bool,endIcon:n.a.element,onClick:n.a.func,startIcon:n.a.element}},,,,,,,,,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"KeyboardNavigable",function(){return v});var a=e(5),i=e.n(a),f=e(29),c=e.n(f),o=e(4),g=e.n(o),h=e(1),d=e.n(h),x=e(0),l=e.n(x),n=e(6),t=e(11),p=["tagName","attributeName"],v=function(w){var N=w.tagName,S=w.attributeName,W=g()(w,p),k=function(){var m=document.activeElement;return N?m.tagName.toLowerCase()===N:m.hasAttribute(S)},O=function(m){return N?m.querySelectorAll(N):m.querySelectorAll("[".concat(S,"]"))};return d.a.createElement(n.Box,i()({onKeyDown:function(m){switch(m.key){case t.a.RIGHT:case t.a.DOWN:m.preventDefault();var E=document.activeElement;if(k()){m.preventDefault();var j=c()(O(m.currentTarget)),D=j.findIndex(function(G){return G===E});j[D+1<j.length?D+1:0].focus()}break;case t.a.LEFT:case t.a.UP:m.preventDefault();var I=document.activeElement;if(k()){m.preventDefault();var B=c()(O(m.currentTarget)),U=B.findIndex(function(G){return G===I});B[U-1>-1?U-1:B.length-1].focus()}break;case t.a.HOME:k()&&(m.preventDefault(),O(m.currentTarget).item(0).focus());break;case t.a.END:if(k()){m.preventDefault();var q=O(m.currentTarget);q.item(q.length-1).focus()}}}},W))};v.defaultProps={attributeName:void 0,tagName:void 0},v.propTypes={attributeName:l.a.string,tagName:l.a.string}},,,,,,,,,,,,,,,,,,,function(r,u,e){"use strict";e.r(u),e.d(u,"AccordionTypography",function(){return k}),e.d(u,"Accordion",function(){return m}),e.d(u,"AccordionContent",function(){return U}),e.d(u,"AccordionToggle",function(){return te}),e.d(u,"AccordionGroup",function(){return oe});var a,i,f=e(31),c=e.n(f),o=e(3),g=e.n(o),h=e(1),d=e.n(h),x=e(0),l=e.n(x),n=e(2),t=e.n(n),p=e(8),v=Object(h.createContext)(),w=function(){return Object(h.useContext)(v)},N=e(14),S=e(6),W=e(9),k=t()(p.Typography)(a||(a=g()([""]))),O=t()(S.Box)(i||(i=g()([`
  border: `,`;

  &:hover:not([aria-disabled='true']) {
    border: 1px solid `,`;

    `,` {
      color: `,`;
    }

    `,` {
      color: `,`;
    }

    & > `,` {
      background: `,`;
    }

    [data-strapi-dropdown='true'] {
      background: `,`;
    }
  }
`])),function(s){var b=s.theme,T=s.expanded,z=s.variant,L=s.disabled;return s.error?"1px solid ".concat(b.colors.danger600," !important"):"1px solid ".concat(L?b.colors.neutral150:T?b.colors.primary600:z==="primary"?b.colors.neutral0:b.colors.neutral100)},function(s){return s.theme.colors.primary600},k,function(s){var b=s.theme;return s.expanded?void 0:b.colors.primary700},p.Typography,function(s){var b=s.theme;return s.expanded?void 0:b.colors.primary600},W.Flex,function(s){return s.theme.colors.primary100},function(s){return s.theme.colors.primary200}),m=function(s){var b=s.children,T=s.expanded,z=s.id,L=s.size,M=s.variant,F=s.disabled,A=s.error,H=s.hasErrorMessage,J=s.onToggle,Z=s.toggle,P=Object(N.a)("accordion",z);return d.a.createElement(v.Provider,{value:{expanded:T,onToggle:J,toggle:Z,id:P,size:L,variant:M,disabled:F}},d.a.createElement(O,{"data-strapi-expanded":T,disabled:F,"aria-disabled":F,expanded:T,hasRadius:!0,variant:M,error:A},b),A&&H&&d.a.createElement(S.Box,{paddingTop:1},d.a.createElement(p.Typography,{variant:"pi",textColor:"danger600"},A)))};m.defaultProps=c()({disabled:!1,error:void 0,expanded:!1,hasErrorMessage:!0,id:void 0,toggle:!1,size:"M",variant:"primary",onToggle:void 0},"toggle",void 0),m.propTypes={children:l.a.node.isRequired,disabled:l.a.bool,error:l.a.string,expanded:l.a.bool,hasErrorMessage:l.a.bool,id:l.a.string,onToggle:l.a.func,size:l.a.oneOf(["S","M"]),toggle:l.a.func,variant:l.a.oneOf(["primary","secondary"])};var E=e(5),j=e.n(E),D=e(4),I=e.n(D),B=["children"],U=function(s){var b=s.children,T=I()(s,B),z=w(),L=z.expanded,M=z.id;if(!L)return null;var F="accordion-content-".concat(M),A="accordion-label-".concat(M),H="accordion-desc-".concat(M);return d.a.createElement(S.Box,j()({role:"region",id:F,"aria-labelledby":A,"aria-describedby":H},T),b)};U.propTypes={children:l.a.node.isRequired};var q,G,xe=e(32),ye=e.n(xe),we=e(64),ie=e(23),Te=e(41),Oe=["title","description","as","togglePosition","action"],ue=t()(we.TextButton)(q||(q=g()([`
  text-align: left;

  svg {
    width: `,`rem;
    height: `,`rem;

    path {
      fill: `,`;
    }
  }
`])),.875,.875,function(s){var b=s.theme;return s.expanded?b.colors.primary600:b.colors.neutral500}),se=t()(W.Flex)(G||(G=g()([`
  height: `,`;
  border-radius: `,`;

  &:hover {
    svg {
      path {
        fill: `,`;
      }
    }
  }
`])),function(s){var b=s.theme,T=s.size;return b.sizes.accordions[T]},function(s){var b=s.theme;return s.expanded?"".concat(b.borderRadius," ").concat(b.borderRadius," 0 0"):b.borderRadius},function(s){return s.theme.colors.primary600}),te=function(s){var b=s.title,T=s.description,z=s.as,L=s.togglePosition,M=s.action,F=I()(s,Oe),A=Object(h.useRef)(null),H=w(),J=H.onToggle,Z=H.toggle,P=H.expanded,ae=H.id,V=H.size,ze=H.variant,K=H.disabled,pe="accordion-content-".concat(ae),$="accordion-label-".concat(ae),fe="accordion-desc-".concat(ae),ee=V==="M"?6:4,ge=function(Y){var _e=Y.expanded,Re=Y.disabled,ke=Y.variant;return _e?"primary100":Re?"neutral150":ke==="primary"?"neutral0":"neutral100"}({expanded:P,disabled:K,variant:ze}),ne=P?"primary600":"neutral700",me=P?"primary600":"neutral600",Pe=P?"primary200":"neutral200",he="".concat(V==="M"?2:1.5,"rem"),be=function(){K||(Z&&!J?(X.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),Z()):J())},ve=d.a.createElement(W.Flex,{justifyContent:"center",borderRadius:"50%",height:he,width:he,transform:P?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,disabled:K,"aria-hidden":!0,as:"span",background:Pe,cursor:K?"not-allowed":"pointer",onClick:function(){var Y;return A==null||(Y=A.current)===null||Y===void 0?void 0:Y.click()}},d.a.createElement(Te.Icon,{as:ye.a,width:"".concat(V==="M"?11/16:.5,"rem"),color:P?"primary600":"neutral600"}));return L==="left"?d.a.createElement(se,{paddingLeft:ee,paddingRight:ee,background:ge,expanded:P,justifyContent:"space-between",size:V,cursor:K?"not-allowed":""},d.a.createElement(ie.Stack,{horizontal:!0,spacing:3,flex:1},ve,d.a.createElement(ue,j()({ref:A,onClick:be,"aria-disabled":K,"aria-expanded":P,"aria-controls":pe,"aria-labelledby":$,"data-strapi-accordion-toggle":!0,expanded:P,type:"button",flex:1},F),d.a.createElement(d.a.Fragment,null,V==="S"?d.a.createElement(p.Typography,{fontWeight:"bold",as:z,id:$,textColor:ne},b):d.a.createElement(k,{variant:"delta",as:z,id:$,textColor:ne},b),T&&d.a.createElement(p.Typography,{as:"p",id:fe,textColor:me},T)))),M):d.a.createElement(se,{paddingRight:ee,paddingLeft:ee,background:ge,expanded:P,size:V,justifyContent:"space-between",cursor:K?"not-allowed":""},d.a.createElement(ue,j()({ref:A,onClick:be,"aria-disabled":K,"aria-expanded":P,"aria-controls":pe,"aria-labelledby":$,"data-strapi-accordion-toggle":!0,expanded:P,type:"button",flex:1},F),d.a.createElement(d.a.Fragment,null,V==="S"?d.a.createElement(p.Typography,{fontWeight:"bold",as:z,id:$,textColor:ne},b):d.a.createElement(p.Typography,{variant:"delta",as:z,id:$,textColor:ne},b),T&&d.a.createElement(p.Typography,{as:"p",id:fe,textColor:me},T))),d.a.createElement(ie.Stack,{horizontal:!0,spacing:3},ve,M))};te.defaultProps={action:void 0,as:"span",description:void 0,variant:"primary",togglePosition:"right"},te.propTypes={action:l.a.node,as:l.a.string,description:l.a.string,title:l.a.string.isRequired,togglePosition:l.a.oneOf(["right","left"]),variant:l.a.oneOf(["primary","secondary"])};var ce,le,de,Ee=e(80),Se=t()(S.Box)(ce||(ce=g()([`
  border-bottom: 1px solid `,`;
  border-right: 1px solid `,`;
  border-left: 1px solid `,`;
  border-radius: 0 0 `," ",`;
`])),function(s){return s.theme.colors.neutral200},function(s){return s.theme.colors.neutral200},function(s){return s.theme.colors.neutral200},function(s){return s.theme.borderRadius},function(s){return s.theme.borderRadius}),je=t()(S.Box)(le||(le=g()([`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid `,`;
    border-left: 1px solid `,`;
    border-bottom: 1px solid `,`;
  }

  & > *:first-of-type {
    border-top: 1px solid `,`;
    border-radius: `," ",` 0 0;
    & > * {
      border-radius: `," ",` 0 0;
    }

    &:hover {
      border-top: 1px solid `,`;
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid `,`;
  }

  `,`
`])),function(s){return s.theme.colors.neutral200},function(s){return s.theme.colors.neutral200},function(s){return s.theme.colors.neutral200},function(s){return s.theme.colors.neutral200},function(s){return s.theme.borderRadius},function(s){return s.theme.borderRadius},function(s){return s.theme.borderRadius},function(s){return s.theme.borderRadius},function(s){return s.theme.colors.primary600},function(s){return s.theme.colors.primary600},function(s){var b=s.theme,T=s.footer;return`
    &:not(`.concat(T,`) {
      & > *:last-of-type {
        border-radius: 0 0 `).concat(b.borderRadius," ").concat(b.borderRadius,`;
      }
    }
  `)}),Ce=t()(S.Box)(de||(de=g()([`
  svg path {
    fill: `,`;
  }
`])),function(s){return s.theme.colors.neutral500}),oe=function(s){var b=s.children,T=s.footer,z=s.label,L=s.labelAction,M=s.error,F=h.Children.toArray(b).map(function(A){return Object(h.cloneElement)(A,{hasErrorMessage:!1})});return d.a.createElement(Ee.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle"},z&&d.a.createElement(W.Flex,{paddingBottom:1},d.a.createElement(p.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold"},z),L&&d.a.createElement(Ce,{paddingLeft:1},L)),d.a.createElement(je,{footer:T},F),T&&d.a.createElement(Se,null,T),M&&d.a.createElement(S.Box,{paddingTop:1},d.a.createElement(p.Typography,{variant:"pi",textColor:"danger600"},M)))};oe.defaultProps={footer:null,error:void 0,label:null,labelAction:void 0},oe.propTypes={children:l.a.node.isRequired,error:l.a.string,footer:l.a.node,label:l.a.string,labelAction:l.a.node}}])})},98599:function(Q,re,_){(function(X,R){Q.exports=R(_(32735))})(this,function(X){return function(R){var C={};function y(r){if(C[r])return C[r].exports;var u=C[r]={i:r,l:!1,exports:{}};return R[r].call(u.exports,u,u.exports,y),u.l=!0,u.exports}return y.m=R,y.c=C,y.d=function(r,u,e){y.o(r,u)||Object.defineProperty(r,u,{enumerable:!0,get:e})},y.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},y.t=function(r,u){if(1&u&&(r=y(r)),8&u||4&u&&typeof r=="object"&&r&&r.__esModule)return r;var e=Object.create(null);if(y.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&u&&typeof r!="string")for(var a in r)y.d(e,a,function(i){return r[i]}.bind(null,a));return e},y.n=function(r){var u=r&&r.__esModule?function(){return r.default}:function(){return r};return y.d(u,"a",u),u},y.o=function(r,u){return Object.prototype.hasOwnProperty.call(r,u)},y.p="",y(y.s=5)}({0:function(R,C){R.exports=X},5:function(R,C,y){"use strict";y.r(C);var r=y(0);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(e[f]=i[f])}return e}).apply(this,arguments)}C.default=function(e){return r.createElement("svg",u({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}})})},37213:(Q,re,_)=>{var X=_(26460),R=_(88904),C=_(52920),y=_(77236);function r(u,e){var a=y(u)?X:C;return a(u,R(e,3))}Q.exports=r}}]);
