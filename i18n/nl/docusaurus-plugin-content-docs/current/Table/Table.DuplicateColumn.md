---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Dupliceert een kolom met de opgegeven naam. De waarden en het type worden uit de bronkolom gekopieerd.


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

De kolom genaamd <code>columnName</code> naar de tabel <code>table</code> dupliceren. De waarden en het type worden uit kolom <code>newColumnName</code> naar kolom <code>columnName</code> gekopieerd.


## Examples

### Example #1 
De kolom &#34;a&#34; dupliceren naar een kolom met de naam &#34;gekopieerde kolom&#34; in de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
