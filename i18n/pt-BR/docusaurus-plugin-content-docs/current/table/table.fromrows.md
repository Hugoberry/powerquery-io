---
title: Table.FromRows
---

# Table.FromRows


Cria uma tabela de uma lista de valores de linha e colunas opcionais.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Cria uma tabela usando a lista `rows` em que cada elemento da lista é uma lista interna que contém os valores de coluna para uma única linha. Uma lista opcional de nomes de coluna, um tipo de tabela ou um número de colunas pode ser fornecido para `columns`.


## Examples

### Example #1
Retornar uma tabela com a coluna \[CustomerID\] com valores \{1, 2\}, a coluna \[Name\] com valores \{"Bob", "Jim"\} e a coluna \[Phone\] com valores \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Retornar uma tabela com a coluna \[CustomerID\] com valores \{1, 2\}, a coluna \[Name\] com valores \{"Bob", "Jim"\} e a coluna \[Phone\] com valores \{"123-4567", "987-6543"\}, em que \[CustomerID\] é um tipo de número e \[Name\] e \[Phone\] são tipos de texto.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
