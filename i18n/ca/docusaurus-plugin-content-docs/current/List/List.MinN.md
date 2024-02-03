---
title: List.MinN
---

# List.MinN


## Description

Retorna el valor o els valors mínims de la llista. Es pot especificar el nombre de valors que es retornaran o la condició de filtració.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Retorna els valors mínims de la llista, <code>list</code>.    El paràmetre, <code>countOrCondition</code>, especifica el nombre de valors que es retornarà o una condició de filtre. El paràmetre opcional, <code>comparisonCriteria</code>, especifica el mode de comparació dels valors de la llista. <ul>        <li> <code>list</code>: llista de valors.</li>        <li> <code>countOrCondition</code>: si s'especifica un nombre, es retorna una llista amb, com a màxim, <code>countOrCondition</code> elements en ordre ascendent. Si s'especifica una condició, es retorna una llista d'elements que, d'entrada, compleixen les condicions. Quan un element no compleix la condició, no se'n consideren més. Si aquest paràmetre és nul, es retorna el valor únic més petit de la llista.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Valor opcional <code>comparisonCriteria</code> que es pot especificar per determinar la manera de comparar els elements de la llista. Si aquest paràmetre és nul, es fa servir el comparador per defecte. </li></ul>


## Examples

### Example #1 
Troba els 5 valor més petits de la llista &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
