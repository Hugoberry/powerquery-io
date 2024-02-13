---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplique une colonne portant le nom spécifié. Les valeurs et le type sont copiés de la colonne source.


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

Duplique la colonne nommée <code>columnName</code> sur la table <code>table</code>. Les valeurs et le type de la colonne <code>newColumnName</code> sont copiés de la colonne <code>columnName</code>.


## Examples

### Example #1 
Duplique la colonne &#34; a &#34; sur une colonne nommée &#34; colonne copiée &#34; dans la table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
