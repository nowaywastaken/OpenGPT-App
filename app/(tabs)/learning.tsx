<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';

export default function LearningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>游戏化逻辑互动学习</Text>
    </View>
=======
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import KaTeX from 'react-native-katex';
import { GestureHandlerRootView, DraggableFlatList, ScaleDecorator } from 'react-native-draggable-flatlist';

// Sample data for a Parsons Problem (Ordering steps of a limit proof)
const INITIAL_STEPS = [
  { id: '1', latex: '\\lim_{n \\to \\infty} \\frac{1}{n} = 0', text: '目标结论' },
  { id: '2', latex: 'n > N \\implies \\frac{1}{n} < \\frac{1}{N}', text: '不等式放大' },
  { id: '3', latex: '\\forall \\epsilon > 0, \\exists N = \\lceil \\frac{1}{\\epsilon} \\rceil', text: '定义 N' },
  { id: '4', latex: '\\left| \\frac{1}{n} - 0 \\right| < \\epsilon', text: '收敛判据' },
];

export default function LearningScreen() {
  const [steps, setSteps] = useState(INITIAL_STEPS);

  // Note: For a real Parsons problem, we would shuffle the steps first.
  // Here we just show the interaction potential.

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>逻辑补全：极限定义证明</Text>
          <Text style={styles.description}>请将下列推导步骤按照正确逻辑顺序排列：</Text>
        </View>

        <View style={styles.problemContainer}>
          {steps.map((step, index) => (
            <View key={step.id} style={styles.stepCard}>
              <View style={styles.stepHeader}>
                <Text style={styles.stepNumber}>步骤 {index + 1}</Text>
              </View>
              <KaTeX
                expression={step.latex}
                style={styles.katex}
                displayMode={true}
              />
              <Text style={styles.stepText}>{step.text}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>提交校验</Text>
        </TouchableOpacity>
      </ScrollView>
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
=======
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#8e8e93',
    lineHeight: 22,
  },
  problemContainer: {
    gap: 16,
  },
  stepCard: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#38383a',
  },
  stepHeader: {
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 12,
    color: '#0a84ff',
    fontWeight: '600',
  },
  katex: {
    height: 60,
    backgroundColor: 'transparent',
  },
  stepText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  verifyButton: {
    backgroundColor: '#0a84ff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
>>>>>>> ff44c4c (feat: initial implementation of Sherlock Assistant core pillars)
    fontWeight: '600',
  },
});
