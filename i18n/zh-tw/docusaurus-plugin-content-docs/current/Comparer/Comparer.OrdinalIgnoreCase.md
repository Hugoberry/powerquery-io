---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

傳回不區分大小寫的比較子函數，該函數會使用序數規則來比較值。


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

傳回不區分大小寫的比較子函數，此函數會使用序數規則來比較提供的值 <code>x</code> 和 <code>y</code>。<br />        <br />        比較函數會接受兩個引數，並根據第一個值小於、等於或大於第二個值，來傳回 -1、0 或 1。    


## Examples

### Example #1 
使用不區分大小寫的序數規則來比較 &#34;Abc&#34; 和 &#34;abc&#34;。請注意，使用 &lt;code&gt;Comparer.Ordinal&lt;/code&gt; 時，&#34;Abc&#34; 小於 &#34;abc&#34;。
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
