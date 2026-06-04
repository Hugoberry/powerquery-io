---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Vraća tabelu čije sve kolone imaju prefiks u vidu datog teksta.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Vraća tabelu u kojoj sva imena kolona iz navedenog `table` imaju prefiks u vidu datog teksta, `prefix`, plus tačku u obliku `prefix.ColumnName`.


## Examples

### Example #1
Dodavanje prefiksa kolonama sa izrazom „MojaTabela“ u tabeli.
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
