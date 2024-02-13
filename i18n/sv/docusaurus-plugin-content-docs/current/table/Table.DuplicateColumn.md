---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplicerar en kolumn med det angivna namnet. Värdena och typen kopieras från källkolumnen.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Duplicera kolumnen med namnet <code>columnName</code> till tabellen <code>table</code>. Värdena och typen för kolumnen <code>newColumnName</code> kopieras från kolumnen <code>columnName</code>.


## Examples

### Example #1 
Duplicera kolumnen &#34;a&#34; till en kolumn med namnet &#34;copied column&#34; i tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
