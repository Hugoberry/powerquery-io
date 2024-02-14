---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Ordinal 規則を使用して値を比較する比較関数を返します。


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

序数規則を使用して指定された値 <code>x</code> と <code>y</code> を比較する比較関数を返します。<br />        <br />        比較関数は 2 つの引数を承認し、最初の値が 2 番目の値以下であるか、等しいか、大きいかに基づいて -1、0、または 1 を返します。    


## Examples

### Example #1 
Ordinal 規則を使用して、「encyclopædia」と「encyclopaedia」が等しいかどうか比較します。&lt;code&gt;Comparer.FromCulture(&#34;en-us&#34;)&lt;/code&gt; を使用するとこれらは等しくなることに注意してください。 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
