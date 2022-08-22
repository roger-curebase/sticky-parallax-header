import * as React from 'react';
import type { LayoutChangeEvent, ListRenderItemInfo } from 'react-native';
import {
  FlatList,
  I18nManager,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { colors, commonStyles } from '../../../constants';
import type { Tab, TabsConfig } from '../../common/SharedProps';

export interface TabsProps extends TabsConfig {
  activeTab: number;
  onTabPressed: (index: number) => void;
  scrollValue: Animated.SharedValue<number>;
}

const UNDERLINE_PADDING = 20;

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabPressed,
  scrollValue,
  tabsContainerBackgroundColor,
  tabsContainerStyle,
  tabTextContainerStyle,
  tabTextContainerActiveStyle,
  tabWrapperStyle,
  tabUnderlineColor,
  tabTextActiveStyle,
  tabTextStyle,
  tabsContainerHorizontalPadding,
}) => {
  const { width } = useWindowDimensions();
  const horizontalFlatListRef = React.useRef<FlatList>(null);

  const currentPositionX = React.useRef(0);
  const tabsWidth = React.useRef(tabs.map((_) => 0));

  /** For some weird reason, inverted prop is not handled correctly, when applied directly with FlatList */
  const isInverted = Platform.OS === 'android' ? I18nManager.isRTL : undefined;

  const adjustPrevious = React.useCallback(
    (page: number) => {
      const lastHidden = Math.floor(currentPositionX.current / (width * 0.3));

      if (page <= lastHidden) {
        currentPositionX.current = width * 0.3 * page;
        horizontalFlatListRef.current?.scrollToOffset({ offset: currentPositionX.current });
      }
    },
    [width]
  );

  const adjustNext = React.useCallback(
    (page: number) => {
      const invisibleX = width + currentPositionX.current - width * 0.3 * (page + 1);

      if (invisibleX < 0) {
        currentPositionX.current = currentPositionX.current - invisibleX;
        horizontalFlatListRef.current?.scrollToOffset?.({ offset: currentPositionX.current });
      }
    },
    [width]
  );

  const scrollToTab = React.useCallback(
    (page: number) => {
      if (tabs.length > 3) {
        if (page === 0) {
          horizontalFlatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
          currentPositionX.current = 0;
        } else if (page !== tabs.length - 1) {
          adjustPrevious(page - 1);
          adjustNext(page + 1);
        } else {
          horizontalFlatListRef.current?.scrollToEnd?.({ animated: true });
          currentPositionX.current = width * 0.3 * tabs.length - width;
        }
      }
    },
    [adjustNext, adjustPrevious, tabs.length, width]
  );

  const scrollToTabRef = React.useRef(scrollToTab);

  React.useEffect(() => {
    scrollToTabRef.current = scrollToTab;
  }, [scrollToTab]);

  React.useEffect(() => {
    scrollToTabRef.current(activeTab);
  }, [activeTab]);

  React.useEffect(() => {
    horizontalFlatListRef.current?.scrollToOffset({ offset: 1 });
    horizontalFlatListRef.current?.scrollToOffset({ offset: 0 });
  }, []);

  const onTabLayout = React.useCallback(
    (page: number) => (e: LayoutChangeEvent) => {
      tabsWidth.current[page] = e.nativeEvent.layout.width;
    },
    []
  );

  const onTabPress = React.useCallback(
    (page: number) => {
      return function () {
        scrollToTab(page);
        onTabPressed(page);
      };
    },
    [onTabPressed, scrollToTab]
  );

  const renderIcon = React.useCallback(
    (icon: Tab['icon'], page: number) => {
      const isActive = activeTab === page;

      if (typeof icon === 'function') {
        return icon(isActive);
      }

      return icon;
    },
    [activeTab]
  );

  const HORIZONTAL_PADDINGS = tabsContainerHorizontalPadding ?? UNDERLINE_PADDING;
  const allSizes =
    tabsWidth.current.every((it) => !!it) && tabsWidth.current.length > 0 && tabUnderlineColor;
  const inputRanges = allSizes ? [0] : [0, 1];
  const outputRanges = allSizes ? [HORIZONTAL_PADDINGS] : [HORIZONTAL_PADDINGS, 100];

  const tabUnderlineAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor:
        typeof tabUnderlineColor === 'string' ||
        typeof tabUnderlineColor === 'number' ||
        typeof tabUnderlineColor === 'symbol'
          ? tabUnderlineColor
          : tabUnderlineColor?.value,
      transform: [{ translateX: interpolate(scrollValue.value, inputRanges, outputRanges) }],
    };
  });

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor:
        typeof tabsContainerBackgroundColor === 'string' ||
        typeof tabsContainerBackgroundColor === 'number' ||
        typeof tabsContainerBackgroundColor === 'symbol'
          ? tabsContainerBackgroundColor
          : tabsContainerBackgroundColor?.value,
    };
  });

  const renderItem = React.useCallback(
    ({ item: tab, index: page }: ListRenderItemInfo<Tab>) => {
      const isTabActive = activeTab === page;
      const tabKey = tab.title || `tab ${page}`;
      const tabTestID = tab.testID || `${tabKey}TestID`;

      return (
        <Pressable
          accessibilityLabel={tabKey}
          accessibilityRole="button"
          key={tabKey}
          onLayout={onTabLayout(page)}
          onPress={onTabPress(page)}
          style={({ pressed }) => [
            /** Handle inverted prop here */
            isInverted && styles.inversionStyle,
            styles.tabsWrapper,
            tabWrapperStyle,
            styles.noMargins,
            pressed && styles.pressed,
          ]}
          testID={tabTestID}>
          <View
            style={[
              styles.tabContainer,
              styles.tabTextContainerStyle,
              tabTextContainerStyle,
              isTabActive && styles.tabTextContainerActiveStyle,
              isTabActive && tabTextContainerActiveStyle,
            ]}>
            {renderIcon(tab.icon, page)}
            {tab.title ? (
              <Text style={[styles.tabText, tabTextStyle, isTabActive && tabTextActiveStyle]}>
                {tab.title}
              </Text>
            ) : null}
          </View>
        </Pressable>
      );
    },
    [
      activeTab,
      isInverted,
      onTabLayout,
      onTabPress,
      renderIcon,
      tabTextActiveStyle,
      tabTextContainerActiveStyle,
      tabTextContainerStyle,
      tabTextStyle,
      tabWrapperStyle,
    ]
  );

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <FlatList<Tab>
        ref={horizontalFlatListRef}
        bounces={false}
        contentContainerStyle={[
          styles.contentContainer,
          Platform.OS === 'android'
            ? I18nManager.isRTL
              ? commonStyles.rowReverse
              : commonStyles.row
            : null,
          tabsContainerStyle,
          styles.noMargins,
          { paddingHorizontal: HORIZONTAL_PADDINGS },
        ]}
        data={tabs}
        horizontal
        keyExtractor={(_, i) => `${i}`}
        onScrollEndDrag={(event) => (currentPositionX.current = event.nativeEvent.contentOffset.x)}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={[
          styles.nestedStyle,
          /** Handle inverted prop here */
          isInverted && styles.inversionStyle,
        ]}
      />
      {tabUnderlineColor ? (
        <Animated.View
          style={[
            styles.tabUnderlineStyles,
            {
              width: tabsWidth.current[activeTab],
            },
            tabUnderlineAnimatedStyle,
          ]}
        />
      ) : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  contentContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inversionStyle: {
    transform: [{ scaleX: -1 }],
  },
  nestedStyle: {
    alignSelf: 'stretch',
  },
  noMargins: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  pressed: {
    opacity: 0.9,
  },
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: colors.white,
    textAlign: 'left',
  },
  tabUnderlineStyles: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 6,
    height: 3,
  },
  tabsWrapper: {
    paddingVertical: 12,
  },
  tabTextContainerStyle: {
    backgroundColor: colors.transparent,
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: colors.darkMint,
  },
});
