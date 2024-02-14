---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplica uma coluna com o nome especificado. Os valores e o tipo são copiados da coluna de origem.


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

Duplicar a coluna chamada <code>columnName</code> à tabela <code>table</code>. Os valores e o tipo da coluna <code>newColumnName</code> são copiados da coluna <code>columnName</code>.


## Examples

### Example #1 
Duplicar a coluna &#34;a&#34; para uma coluna chamada &#34;coluna copiada&#34; na tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
