---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Applica le trasformazioni del tipo nel formato \{ column, type } utilizzando impostazioni cultura specifiche.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Restituisce una tabella dall'input <code>table</code> applicando l'operazione di trasformazione alle colonne specificate nel parametro <code>typeTransformations</code>, con il formato \{ column name, type name}, usando le impostazioni cultura specificate nel parametro facoltativo <code>culture</code>, ad esempio "it-IT".    Se la colonna non esiste, verrà generata un'eccezione.


## Examples

### Example #1 
Trasformare i valori numerici nella colonna [a] in valori di testo dalla tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
