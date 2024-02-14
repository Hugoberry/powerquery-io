---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica una colonna con il nome specificato. I valori e il tipo vengono copiati dalla colonna di origine.


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

Duplicare la colonna denominata <code>columnName</code> nella tabella <code>table</code>. I valori e il tipo della colonna <code>newColumnName</code> vengono copiati dalla colonna <code>columnName</code>.


## Examples

### Example #1 
Duplicare la colonna &#34;a&#34; in una colonna denominata &#34;copied column&#34; nella tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
