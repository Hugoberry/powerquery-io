---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

返回使用 Ordinal 规则来比较值的不区分大小写的比较器函数。


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

返回不区分大小写的比较器函数，该函数使用序号规则比较提供的值 <code>x</code> 和 <code>y</code>。<br />        <br />        比较器函数接受两个参数，并根据第一个值是小于、等于还是大于第二个值返回 -1、0 或 1。    


## Examples

### Example #1 
使用不区分大小写的 Ordinal 规则，比较 &#34;Abc&#34; 和 &#34;abc&#34;。请注意，通过使用 &lt;code&gt;Comparer.Ordinal&lt;/code&gt;，&#34;Abc&#34; 要小于 &#34;abc&#34;。
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
