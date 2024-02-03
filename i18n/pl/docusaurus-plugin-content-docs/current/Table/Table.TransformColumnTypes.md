---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Stosuje przekształcenia typów w formie \{ column, type }, używając określonej kultury.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Zwraca tabelę powstałą w wyniku zastosowania do kolumn tabeli wejściowej <code>table</code> operacji przekształcania określonych w parametrze <code>typeTransformations</code> (używany format to \{ column name, type name}), z użyciem kultury określonej w opcjonalnym parametrze <code>culture</code> (np. „en-US”).    Jeśli kolumna nie istnieje, jest zgłaszany wyjątek.


## Examples

### Example #1 
Przekształć wartości liczbowe w kolumnie [a] tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; na wartości tekstowe.
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
