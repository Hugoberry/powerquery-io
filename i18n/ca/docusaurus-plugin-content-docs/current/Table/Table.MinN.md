---
title: Table.MinN
---

# Table.MinN


## Description

Retorna les files més petites amb els criteris donats.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Retorna les files més petites de <code>table</code>, donats els <code>comparisonCriteria</code>. Després que s'ordenin les files, s'ha d'especificar el paràmetre <code>countOrCondition</code> per filtrar encara més el resultat. Tingueu en compte que l'algoritme d'ordenació no pot garantir un resultat ordenat fix. El paràmetre <code>countOrCondition</code> pot tenir diverses formes:    <ul>        <li> Si s'especifica un nombre, es retorna una llista d'un màxim de <code>countOrCondition</code> elements en ordre ascendent. </li>        <li> Si s'especifica una condició, es retorna una llista d'elements que inicialment compleixen la condició. Quan un element no compleixi la condició, no es consideraran més elements. </li> </ul>


## Examples

### Example #1 
Cerca la fila amb el valor més petit de la columna [a] amb la condició [a] &lt; 3 a la taula. Les files s&#39;ordenen abans d&#39;aplicar-hi el filtre.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Cerca la fila amb el valor més petit de la columna [a] amb la condició [b] &lt; 0 a la taula. Les files s&#39;ordenen abans d&#39;aplicar-hi el filtre.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
