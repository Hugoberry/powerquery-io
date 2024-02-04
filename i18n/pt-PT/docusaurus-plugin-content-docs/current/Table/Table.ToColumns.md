---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Cria uma lista de listas aninhadas de valores de coluna de uma tabela.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Cria uma lista de listas aninhadas de valores de coluna da tabela, <code>table</code>.  Cada item de lista é uma lista interior que contém os valores das colunas.


## Examples

### Example #1 
Criar uma lista dos valores das colunas da tabela.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
