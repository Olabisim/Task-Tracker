import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FilterType } from '../models/types';

interface FilterControlsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({ currentFilter, onFilterChange }) => {
  const filters: FilterType[] = ['All', 'Active', 'Completed'];

  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[styles.filterButton, currentFilter === filter && styles.activeFilter]}
          onPress={() => onFilterChange(filter)}
        >
          <Text style={[styles.filterText, currentFilter === filter && styles.activeFilterText]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 5,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  activeFilter: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});
