---
title: List.MaxN
---

# List.MaxN


## Description

Retorna el valor o els valors màxims de la llista. S&#39;ha d&#39;especificar el nombre de valors que es retornaran o la condició de filtració.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Retorna els valors màxims de la llista, <code>list</code>.    Després d'ordenar les files, es poden especificar paràmetres opcionals per filtrar encara més el resultat. El paràmetre opcional, <code>countOrCondition</code>, especifica el nombre de valors que es retornaran o una condició de filtre. El paràmetre opcional, <code>comparisonCriteria</code>, especifica la manera de comparar els valors de la llista. <ul>        <li> <code>list</code>: llista de valors.</li>        <li> <code>countOrCondition</code>: si s'especifica un nombre, es retorna una llista amb, com a màxim, <code>countOrCondition</code> elements en ordre ascendent. Si s'especifica una condició, es retorna una llista dels elements que, inicialment, compleixen la condició. Quan un element no compleix la condició, no se'n consideren més.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Valor opcional <code>comparisonCriteria</code> que es pot especificar per determinar la manera de comparar els elements de la llista. Si aquest paràmetre és nul, s'utilitza el comparador per defecte. </li></ul>



## Category
List.Ordering
