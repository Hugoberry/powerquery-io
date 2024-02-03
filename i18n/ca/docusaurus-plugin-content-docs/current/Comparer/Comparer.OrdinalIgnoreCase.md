---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Retorna una funció de comparador sense distinció de majúscules i minúscules que utilitza normes ordinals per comparar valors.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Retorna una funció de comparador que no distingeix entre majúscules i minúscules que utilitza normes ordinals per comparar els valors proporcionats <code>x</code> i <code>y</code>.<br />        <br />      Una funció de comparador accepta dos arguments i retorna -1, 0 o 1 en funció de si el primer valor és menor, igual o superior al segon.    


## Examples

### Example #1 
Utilitzeu normes ordinals sense distinció de majúscules i minúscules per comparar &#34;Abc&#34; amb &#34;abc&#34;. Nota: &#34;Abc&#34; és menys que &#34;abc&#34; amb &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
