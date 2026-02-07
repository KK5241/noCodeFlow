/**
 * 规范化搜索文本，去除首尾空格并转换为小写
 * @param value - 原始搜索文本
 * @returns 规范化后的搜索文本
 */
export const normalizeSearchText = (value: string) => value.trim().toLowerCase();
