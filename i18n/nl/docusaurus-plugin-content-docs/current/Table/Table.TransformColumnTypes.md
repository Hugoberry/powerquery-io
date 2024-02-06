---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Past met behulp van een specifieke cultuur type transformatie(s) in de notatie \{ column, type } toe.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Hiermee wordt een tabel van de uitvoer <code>table</code> geretourneerd door de transformatiebewerking toe te passen op de kolommen die zijn opgegeven in de parameter <code>typeTransformations</code> (in de notatie \{ column name, type name}) met behulp van de opgegeven cultuur in de optionele parameter <code>culture</code> (bijvoorbeeld: nl-NL). Als de kolom niet bestaat, wordt er een uitzondering gegenereerd.


## Examples

### Example #1 
De nummerwaarden in kolom [a] vanuit de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; transformeren naar tekstwaarden.
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
