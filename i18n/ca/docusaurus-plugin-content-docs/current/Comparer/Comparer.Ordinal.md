---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Retorna una funció de comparador que utilitza normes ordinals per comparar valors.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Retorna una funció de comparador que utilitza normes ordinals per comparar els valors proporcionats <code>x</code> i <code>y</code>.<br />      <br />      Una funció de comparador accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor és menor, igual o superior al segon.    


## Examples

### Example #1 
Mitjançant les normes ordinals, compareu si &#34;encyclopædia&#34; i &#34;encyclopaedia&#34; són equivalents. Tingueu en compte que són equivalents amb &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
