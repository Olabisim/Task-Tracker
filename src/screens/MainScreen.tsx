import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useTasks } from '../hooks/useTasks';
import { TaskInput } from '../components/TaskInput';
import { TaskItem } from '../components/TaskItem';
import { FilterControls } from '../components/FilterControls';
import Animated, { FadeInUp, LinearTransition } from 'react-native-reanimated';

export const MainScreen: React.FC = () => {
  const { tasks, filter, setFilter, addTask, toggleTask, loading } = useTasks();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Animated.View entering={FadeInUp.duration(500).springify()}>
          <Text style={styles.headerTitle}>Task Tracker</Text>
        </Animated.View>
        
        <TaskInput onAddTask={addTask} />
        
        <FilterControls currentFilter={filter} onFilterChange={setFilter} />

        {tasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tasks found.</Text>
            <Text style={styles.emptySubText}>
              {filter === 'All' 
                ? 'Add a task above to get started!' 
                : `You have no ${filter.toLowerCase()} tasks.`}
            </Text>
          </View>
        ) : (
          <Animated.FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem task={item} onToggle={toggleTask} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            itemLayoutAnimation={LinearTransition.springify().damping(14)}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600',
    marginBottom: 5,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
  },
  listContent: {
    paddingBottom: 20,
  },
});
