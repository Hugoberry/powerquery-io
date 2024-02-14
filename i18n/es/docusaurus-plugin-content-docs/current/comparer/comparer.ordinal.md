---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Devuelve una función de comparador que usa reglas ordinales para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Devuelve una función comparadora que utiliza reglas ordinales para comparar los valores proporcionados <code>x</code> y <code>y</code>.<br />      <br />      Una función comparadora acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo.    


## Examples

### Example #1 
Usando reglas ordinales, compare si &#34;encyclopædia&#34; y &#34;encyclopaedia&#34; son equivalentes. Tenga en cuenta que son equivalentes si se usa &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
