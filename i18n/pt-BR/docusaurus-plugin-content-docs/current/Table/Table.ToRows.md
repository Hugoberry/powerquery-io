---
title: Table.ToRows
---

# Table.ToRows


## Description

Cria uma lista de listas aninhadas de valores de linha a partir de uma tabela.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Cria uma lista de listas aninhadas a partir da tabela, <code>table</code>.  Cada item de lista é uma lista interna que contém os valores de linha.


## Examples

### Example #1 
Criar uma lista dos valores de linha da tabela.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
