---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Devolve uma tabela em que o texto especificado foi adicionado como prefixo a todas as colunas.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Devolve uma tabela na qual todos os nomes de colunas da `table` fornecida são prefixados com o texto indicado, `prefix`, mais um ponto, sob a forma `prefix.ColumnName`.


## Examples

### Example #1
Adicionar o prefixo "MinhaTabela" às colunas existentes na tabela.
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
