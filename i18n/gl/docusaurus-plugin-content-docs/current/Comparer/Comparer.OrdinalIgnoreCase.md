---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Devolve unha función de comparación que non diferencia maiúsculas de minúsculas e que usa regras ordinais para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Devolve unha función de comparación que non distingue entre maiúsculas e minúsculas que usa regras ordinais para comparar os valores proporcionados <code>x</code> e <code>y</code>.<br />         <br />         Unha función de comparación acepta dous argumentos e devolve -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou maior que o segundo.    


## Examples

### Example #1 
Mediante as regras ordinais que non diferencian maiúsculas de minúsculas, compare &#34;Abc&#34; con &#34;abc&#34;. Teña en conta que &#34;Abc&#34; é inferior a &#34;abc&#34; mediante &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
