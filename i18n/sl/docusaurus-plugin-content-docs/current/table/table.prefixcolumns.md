---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Vrne tabelo, v kateri je pred vsemi stolpci navedeno dano besedilo.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Vrne tabelo, v kateri imajo vsa imena stolpcev iz `table` predpono z danim besedilom, `prefix` in piko v obliki `prefix.ColumnName`.


## Examples

### Example #1
Pred stolpci v tabeli navedite"MojaTabela".
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
