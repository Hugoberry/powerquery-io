---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Retourne une fonction de comparaison ne respectant pas la casse, qui utilise les règles ordinales pour comparer des valeurs.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Retourne une fonction de comparaison qui ne respecte pas la casse, qui utilise des règles ordinales pour comparer les valeurs fournies <code>x</code> et <code>y</code>.<br />        <br />        Une fonction de comparaison accepte deux arguments et retourne -1, 0 ou 1 en fonction de la valeur inférieure, égale ou supérieure à la seconde.    


## Examples

### Example #1 
En utilisant des règles ordinales ne respectant pas la casse, comparez &#34; Abc &#34; avec &#34; abc &#34;. Notez que &#34; Abc &#34; est plus petit que &#34; abc &#34; avec &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
