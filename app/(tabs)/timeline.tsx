<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>视觉化时间流管理</Text>
    </View>
=======
import React, { useMemo } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Timeline, CalendarProvider } from 'react-native-calendars';
import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia';

// Sample data for Rigid and Flexible events
const INITIAL_EVENTS = [
  {
    start: '2026-01-14 09:00:00',
    end: '2026-01-14 10:30:00',
    title: '数学模型研究 (Rigid)',
    summary: '深度学习中的非线性动力学',
    color: '#ff3b30', // Red for Rigid
  },
  {
    start: '2026-01-14 11:00:00',
    end: '2026-01-14 12:00:00',
    title: '英语口语练习 (Flexible)',
    summary: 'AI 辅助发音纠正',
    color: '#34c759', // Green for Flexible
  },
  {
    start: '2026-01-14 14:00:00',
    end: '2026-01-14 15:30:00',
    title: '物理实验模拟 (Rigid)',
    summary: '量子纠缠可视化',
    color: '#ff3b30',
  },
  {
    start: '2026-01-14 16:00:00',
    end: '2026-01-14 17:00:00',
    title: '自由阅读 (Flexible)',
    summary: '《Sherlock 的逻辑》',
    color: '#34c759',
  },
];

export default function TimelineScreen() {
  const currentTimestamp = '2026-01-14';

  return (
    <SafeAreaView style={styles.container}>
      <CalendarProvider date={currentTimestamp}>
        <View style={styles.timelineWrapper}>
          <Timeline
            format24h={true}
            events={INITIAL_EVENTS}
            scrollToFirst={true}
            start={8}
            end={22}
            theme={{
              calendarBackground: '#1c1c1e',
              dayTextColor: '#fff',
              todayTextColor: '#0a84ff',
              monthTextColor: '#fff',
            }}
          />
          {/* Skia Scanning Line Decoration */}
          <Canvas style={styles.skiaOverlay}>
            <Rect x={0} y={0} width={2} height={1000}>
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, 1000)}
                colors={['#0a84ff', 'transparent']}
              />
            </Rect>
          </Canvas>
        </View>
      </CalendarProvider>
    </SafeAreaView>
>>>>>>> ff44c4c (feat: initial implementation of Sherlock Assistant core pillars)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
<<<<<<< HEAD
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
=======
  },
  timelineWrapper: {
    flex: 1,
    marginTop: 10,
  },
  skiaOverlay: {
    position: 'absolute',
    left: 80, // Align with the timeline structure
    top: 0,
    bottom: 0,
    width: 2,
    pointerEvents: 'none',
>>>>>>> ff44c4c (feat: initial implementation of Sherlock Assistant core pillars)
  },
});
