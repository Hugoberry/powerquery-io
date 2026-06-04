---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Devolve unha táboa onde todas as columnas se prefixaron co texto indicado.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Devolve unha táboa onde todos os nomes de columnas do `table` proporcionado teñen o prefixo do texto dado, `prefix`, máis un punto no formato `prefixo.NomeDeColumna`.


## Examples

### Example #1
Prefixar as columnas con "MyTable" na táboa.
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
