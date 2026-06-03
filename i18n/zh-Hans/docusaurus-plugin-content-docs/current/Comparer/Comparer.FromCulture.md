---
title: Comparer.FromCulture
---

# Comparer.FromCulture


根据指定的区域性和区分大小写返回比较器函数。


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

返回比较器函数，该函数使用 `culture` 和 `ignoreCase` 指定的区分大小写来执行比较。  
  
比较器函数接受两个参数，并根据第一个值是小于、等于还是大于第二个值返回 -1、0 或 1。  
  
`ignoreCase` 的默认值为 false。`culture` 应为 .NET framework 支持的区域设置之一(例如，"en-US")。


## Examples

### Example #1
使用 "en-US" 区域设置比较 "a" 和 "A" 以确定这些值是否相等。
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
使用忽略大小写的 "en-US" 区域设置比较 "a" 和 "A" 以确定这些值是否相等。
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
