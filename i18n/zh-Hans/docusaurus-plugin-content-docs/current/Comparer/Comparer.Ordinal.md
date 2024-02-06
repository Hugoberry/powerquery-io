---
title: Comparer.Ordinal
---

# Comparer.Ordinal


返回一个使用 Ordinal 规则的比较器函数以比较值。


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

返回比较器函数，该函数使用序号规则比较提供的值 <code>x</code> 和 <code>y</code>。<br />        <br />        比较器函数接受两个参数，并根据第一个值是小于、等于还是大于第二个值返回 -1、0 或 1。    


## Examples

### Example #1 
使用 Ordinal 规则，比较“encyclopædia”和“encyclopaedia”是否相等。请注意，这些与使用 &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; 等效。
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
