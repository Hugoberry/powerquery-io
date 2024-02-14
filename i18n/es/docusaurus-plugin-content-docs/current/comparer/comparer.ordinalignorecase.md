---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Devuelve una función de comparador que no distingue mayúsculas de minúsculas y que usa reglas ordinales para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Devuelve una función comparadora que no distingue entre mayúsculas y minúsculas y que utiliza reglas ordinales para comparar los valores proporcionados <code>x</code> y <code>y</code>.<br />        <br />        Una función comparadora acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo.    


## Examples

### Example #1 
Usando reglas ordinales que no distinguen mayúsculas de minúsculas, compare &#34;Abc&#34; con &#34;abc&#34;. Observe que &#34;Abc&#34; es menor que &#34;abc&#34; usando &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
