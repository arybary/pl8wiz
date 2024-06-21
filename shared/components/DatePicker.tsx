import React, { useState } from "react";
import { View,  Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "./Button";

interface DatePickerProps {
    mode: "date" | "year";
    value: string;
    onChange: (value: string) => void;
    label: string;
}

export function DatePicker( {mode, value, onChange, label }: DatePickerProps) {
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event: any, selectedDate?: Date) => {
      setShowPicker(Platform.OS === 'ios');
      if (selectedDate) {
        if (mode === "year") {
          const selectedYear = selectedDate.getFullYear().toString();
          onChange(selectedYear);
        } else {
          const formattedDate = selectedDate.toISOString().split('T')[0];
          onChange(formattedDate);
        }
      }
    };
  
    const pickerValue = value ? new Date(value) : new Date();
  
    return (
      <View style={{ flex: 1 }}>
        <Button text={value || label} onPress={() => setShowPicker(true)} />
        {showPicker && (
          <DateTimePicker
            value={pickerValue}
            mode={mode === "year" ? "date" : "date"}
            display="default"
            onChange={handleDateChange}
            maximumDate={mode === "year" ? new Date() : undefined} 
          />
        )}
      </View>
    );
  };