---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Retorna uma tabela em que todas as colunas sejam prefixadas com o texto especificado.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Retorna uma tabela em que todos os nomes de coluna do `table` fornecidos são prefixados com o texto fornecido, `prefix`, mais um ponto no formato `prefix. ColumnName`.


## Examples

### Example #1
Prefixar as colunas com "MyTable" na tabela.
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
