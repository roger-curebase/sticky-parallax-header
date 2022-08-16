"use strict";(self.webpackChunkreact_native_sticky_parallax_header_docs=self.webpackChunkreact_native_sticky_parallax_header_docs||[]).push([[3953],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(a),k=n,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return a?r.createElement(c,i(i({ref:e},u),{},{components:a})):r.createElement(c,i({ref:e},u))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7600:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:4},d="Avatar Header",p={unversionedId:"headers/avatar-header",id:"headers/avatar-header",title:"Avatar Header",description:"Avatar Header Gif",source:"@site/docs/headers/avatar-header.md",sourceDirName:"headers",slug:"/headers/avatar-header",permalink:"/sticky-parallax-header/docs/next/headers/avatar-header",draft:!1,editUrl:"https://github.com/netguru/sticky-parallax-header/tree/master/docs/docs/headers/avatar-header.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Details Header",permalink:"/sticky-parallax-header/docs/next/headers/details-header"},next:{title:"Custom Sticky Header",permalink:"/sticky-parallax-header/docs/next/headers/custom-header"}},u={},m=[{value:"Example usage",id:"example-usage",level:2},{value:"Props",id:"props",level:2},{value:"AvatarHeaderScrollView props",id:"avatarheaderscrollview-props",level:3},{value:"AvatarHeaderFlatList props",id:"avatarheaderflatlist-props",level:3},{value:"AvatarHeaderFlatList props",id:"avatarheaderflatlist-props-1",level:3},{value:"Shared AvatarHeader props",id:"shared-avatarheader-props",level:3}],s={toc:m};function k(t){var e=t.components,o=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"avatar-header"},"Avatar Header"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Avatar Header Gif",src:a(3341).Z,width:"244",height:"480"})),(0,l.kt)("h2",{id:"example-usage"},"Example usage"),(0,l.kt)("p",null,"Check out AvatarHeader examples for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/netguru/sticky-parallax-header/blob/master/example/src/screens/additionalExamples/AvatarHeaderScrollViewExample.tsx"},"ScrollView"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/netguru/sticky-parallax-header/blob/master/example/src/screens/additionalExamples/AvatarHeaderFlatListExample.tsx"},"FlatList"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/netguru/sticky-parallax-header/blob/master/example/src/screens/additionalExamples/AvatarHeaderSectionListExample.tsx"},"SectionList")," & ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/netguru/sticky-parallax-header/blob/master/example/src/screens/additionalExamples/AvatarHeaderFlashListExample.tsx"},"FlashList")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const AvatarHeaderScrollViewExample: React.FC = () => {\n  const navigation = useNavigation();\n\n  function goBack() {\n    navigation.goBack();\n  }\n\n  const isDarkTheme = useColorScheme() === 'dark';\n\n  return (\n    <>\n      <AvatarHeaderScrollView\n        leftTopIcon={iconCloseWhite}\n        leftTopIconOnPress={goBack}\n        rightTopIcon={IconMenu}\n        contentContainerStyle={[\n          isDarkTheme ? screenStyles.darkBackground : screenStyles.lightBackground,\n        ]}\n        containerStyle={screenStyles.stretchContainer}\n        backgroundColor={Brandon.color}\n        hasBorderRadius\n        image={Brandon.image}\n        subtitle={Brandon.about}\n        title={Brandon.author}\n        titleStyle={screenStyles.text}\n        showsVerticalScrollIndicator={false}>\n        <View style={styles.content}>\n          {Brandon.cards.map((data, i, arr) => (\n            <QuizCard data={data} num={i} key={data.question} cardsAmount={arr.length} />\n          ))}\n        </View>\n      </AvatarHeaderScrollView>\n      <StatusBar barStyle=\"light-content\" backgroundColor={Brandon.color} translucent />\n    </>\n  );\n};\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"avatarheaderscrollview-props"},"AvatarHeaderScrollView props"),(0,l.kt)("p",null,"Inherits ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/next/scrollview#props"},"ScrollViewProps")," and ",(0,l.kt)("a",{parentName:"p",href:"#shared-avatarheader-props"},"Shared AvatarHeader props")),(0,l.kt)("h3",{id:"avatarheaderflatlist-props"},"AvatarHeaderFlatList props"),(0,l.kt)("p",null,"Inherits ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/next/flatlist#props"},"FlatListProps")," and ",(0,l.kt)("a",{parentName:"p",href:"#shared-avatarheader-props"},"Shared AvatarHeader props")),(0,l.kt)("h3",{id:"avatarheaderflatlist-props-1"},"AvatarHeaderFlatList props"),(0,l.kt)("p",null,"Inherits ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/next/sectionlist#props"},"SectionListProps")," and ",(0,l.kt)("a",{parentName:"p",href:"#shared-avatarheader-props"},"Shared AvatarHeader props")),(0,l.kt)("h3",{id:"shared-avatarheader-props"},"Shared AvatarHeader props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"color - ",(0,l.kt)("inlineCode",{parentName:"td"},"ColorValue")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundImage"),(0,l.kt)("td",{parentName:"tr",align:null},"image source - ",(0,l.kt)("inlineCode",{parentName:"td"},"ImageSourcePropType")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"style - ",(0,l.kt)("inlineCode",{parentName:"td"},"StyleProp<ViewStyle>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableSafeAreaTopInset"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leftTopIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"render function or image source"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leftTopIconAccessibilityLabel"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leftTopIconOnPress"),(0,l.kt)("td",{parentName:"tr",align:null},"function - ",(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leftTopIconTestID"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hasBorderRadius"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"image source - ",(0,l.kt)("inlineCode",{parentName:"td"},"ImageSourcePropType")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onHeaderLayout"),(0,l.kt)("td",{parentName:"tr",align:null},"function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: LayoutChangeEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMomentumScrollBegin"),(0,l.kt)("td",{parentName:"tr",align:null},"worklet function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: NativeScrollEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onMomentumScrollEnd"),(0,l.kt)("td",{parentName:"tr",align:null},"worklet function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: NativeScrollEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onScroll"),(0,l.kt)("td",{parentName:"tr",align:null},"worklet function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: NativeScrollEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onScrollBeginDrag"),(0,l.kt)("td",{parentName:"tr",align:null},"worklet function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: NativeScrollEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onScrollEndDrag"),(0,l.kt)("td",{parentName:"tr",align:null},"worklet function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: NativeScrollEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTabsLayout"),(0,l.kt)("td",{parentName:"tr",align:null},"function - ",(0,l.kt)("inlineCode",{parentName:"td"},"(e: LayoutChangeEvent) => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTopReached"),(0,l.kt)("td",{parentName:"tr",align:null},"function - ",(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parallaxHeight"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"53% of screen's height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderHeaderBar"),(0,l.kt)("td",{parentName:"tr",align:null},"render function"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rightTopIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"render function or image source"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rightTopIconAccessibilityLabel"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rightTopIconOnPress"),(0,l.kt)("td",{parentName:"tr",align:null},"function - ",(0,l.kt)("inlineCode",{parentName:"td"},"() => void")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rightTopIconTestID"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapStartThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapStopThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapToEdge"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stickyTabs"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subtitle"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subtitleStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"style - ",(0,l.kt)("inlineCode",{parentName:"td"},"StyleProp<TextStyle>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subtitleTestID"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tabsContainerBackgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"color - ",(0,l.kt)("inlineCode",{parentName:"td"},"ColorValue")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"titleStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"style - ",(0,l.kt)("inlineCode",{parentName:"td"},"StyleProp<TextStyle>")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"titleTestID"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}k.isMDXComponent=!0},3341:function(t,e,a){e.Z=a.p+"assets/images/readme_Avatar-e91628246039c74f45846f35a996753e.gif"}}]);