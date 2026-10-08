import React from 'react'; import { TextInput,StyleSheet } from 'react-native'; import { colors } from '../constants/colors';
export default function SearchBar({value,onChangeText}) { return <TextInput value={value} onChangeText={onChangeText} placeholder="Search store or description" placeholderTextColor={colors.muted} style={s.input} />; }
const s=StyleSheet.create({input:{backgroundColor:colors.surface,borderRadius:14,paddingHorizontal:16,paddingVertical:13,borderWidth:1,borderColor:colors.border,color:colors.ink,marginBottom:12}});
