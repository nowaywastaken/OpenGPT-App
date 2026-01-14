<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>设置与声纹锁管理</Text>
    </View>
=======
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Mic, Shield, CheckCircle, AlertCircle } from 'lucide-react-native';

export default function SettingsScreen() {
  const [isVoiceLockEnabled, setIsVoiceLockEnabled] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState<'none' | 'enrolling' | 'completed'>('none');

  const handleEnroll = () => {
    setEnrollmentStatus('enrolling');
    // Simulate enrollment process
    setTimeout(() => {
      setEnrollmentStatus('completed');
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>设置</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>安全与隐私</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Shield color="#0a84ff" size={22} />
              <Text style={styles.settingText}>声纹锁 (Eagle)</Text>
            </View>
            <Switch 
              value={isVoiceLockEnabled} 
              onValueChange={setIsVoiceLockEnabled}
              trackColor={{ false: '#3a3a3c', true: '#34c759' }}
            />
          </View>

          {isVoiceLockEnabled && (
            <View style={styles.voiceSection}>
              <Text style={styles.voiceDescription}>
                声纹锁通过识别您的生物声纹来保护应用。它完全在本地运行，保护您的隐私。
              </Text>

              {enrollmentStatus === 'none' && (
                <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
                  <Mic color="#fff" size={20} />
                  <Text style={styles.enrollButtonText}>开始声纹录入</Text>
                </TouchableOpacity>
              )}

              {enrollmentStatus === 'enrolling' && (
                <View style={styles.statusBox}>
                  <Text style={styles.statusText}>请读出屏幕上的文字... (录入中)</Text>
                  <Text style={styles.enrollText}>"Sherlock, 保护我的思绪。"</Text>
                </View>
              )}

              {enrollmentStatus === 'completed' && (
                <View style={styles.statusBox}>
                  <View style={styles.completedHeader}>
                    <CheckCircle color="#34c759" size={20} />
                    <Text style={[styles.statusText, { color: '#34c759' }]}>声纹录入完成</Text>
                  </View>
                  <Text style={styles.voiceMeta}>错误拒绝率 (FRR): 3.2% (良好)</Text>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>关于</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>版本</Text>
            <Text style={styles.settingValue}>v1.0.0-alpha</Text>
          </View>
        </View>
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
    fontWeight: '600',
  },
=======
  },
  scrollContent: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#8e8e93',
    textTransform: 'uppercase',
    marginBottom: 8,
    marginLeft: 4,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1c1c1e',
    padding: 16,
    borderRadius: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
  },
  settingValue: {
    color: '#8e8e93',
    fontSize: 16,
  },
  voiceSection: {
    marginTop: 12,
    backgroundColor: '#1c1c1e',
    padding: 16,
    borderRadius: 12,
  },
  voiceDescription: {
    color: '#8e8e93',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  enrollButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#0a84ff',
    padding: 12,
    borderRadius: 8,
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  statusBox: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#2c2c2e',
    borderRadius: 8,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  enrollText: {
    color: '#0a84ff',
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  completedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  voiceMeta: {
    color: '#8e8e93',
    fontSize: 12,
  },
>>>>>>> ff44c4c (feat: initial implementation of Sherlock Assistant core pillars)
});
