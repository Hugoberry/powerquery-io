---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Devolve unha función de comparador que utiliza regras ordinais para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Devolve unha función de comparación que usa regras ordinais para comparar os valores proporcionados <code>x</code> e <code>y</code>.<br />         <br />         Unha función de comparación acepta dous argumentos e devolve -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou maior que o segundo.    


## Examples

### Example #1 
Mediante regras ordinais, compara se &#34;encyclopædia&#34; e &#34;encyclopaedia&#34; son equivalentes. Ten en conta que son equivalentes utilizando &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
