---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

根据指定的区域性和区分大小写返回比较器函数。


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

返回比较器函数，该函数使用 <code>culture</code> 和 <code>ignoreCase</code> 指定的区分大小写来执行比较。<br />      <br />      比较器函数接受两个参数，并根据第一个值是小于、等于还是大于第二个值返回 -1、0 或 1。<br />      <br />      <code>ignoreCase</code> 的默认值为 false。<code>culture</code> 应为 .NET framework 支持的区域设置之一(例如，"en-US")。    


## Examples

### Example #1 
使用 &#34;en-US&#34; 区域设置比较 &#34;a&#34; 和 &#34;A&#34; 以确定这些值是否相等。
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
使用忽略大小写的 &#34;en-US&#34; 区域设置比较 &#34;a&#34; 和 &#34;A&#34; 以确定这些值是否相等。
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
