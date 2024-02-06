---
title: Comparer.Ordinal
---

# Comparer.Ordinal


傳回使用 Ordinal 規則比較值的比較子函數。


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

傳回比較子函數，此函數會使用序數規則來比較提供的值 <code>x</code> 和 <code>y</code>。<br />      <br />      比較子函數接受兩個引數，並根據第一個值小於、等於或大於秒數，傳回 -1、0 或 1。    


## Examples

### Example #1 
使用 Ordinal 規則，比較 &#34;encyclopædia&#34; 和 &#34;encyclopaedia&#34; 是否相等。請注意，使用 &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; 的結果為相等。
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
