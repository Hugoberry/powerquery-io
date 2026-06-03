---
title: Table.FromRows
---

# Table.FromRows


Crie uma tabela a partir de uma lista de valores de linha e colunas opcionais.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Cria uma tabela a partir da lista `rows`, em que cada elemento da lista é uma lista interna que contém os valores de coluna de uma linha. É possível fornecer uma lista opcional de nomes de coluna, um tipo de tabela ou um número de colunas para `columns`.


## Examples

### Example #1
Devolver uma tabela com a coluna \[CustomerID\] com os valores \{1, 2\} e a coluna \[Name\] com os valores \{"Bob", "Jim"\} e a coluna \[Telefone\] com os valores \{"123-4567", "987-6543"\}.
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
Devolve uma tabela com a coluna \[CustomerID\] com valores \{1, 2\}, coluna \[Nome\] com os valores \{"Bob", "Jim"\}, e a coluna \[Telefone\] com os valores \{"123-4567", "987-6543"\}, em que \[CustomerID\] é do tipo número e \[Nome\] e \[Telefone\] são do tipo texto.
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
