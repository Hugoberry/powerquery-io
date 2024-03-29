---
title: Table.FromColumns
---

# Table.FromColumns


Cria uma tabela a partir de uma lista de colunas e valores especificado.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Remarks

Cria uma tabela do tipo <code>columns</code> por meio de uma lista <code>lists</code> que contém listas aninhadas com os nomes e valores de coluna.    Se algumas colunas tiverem mais valores que outras, os valores ausentes serão preenchidos com o valor padrão, 'null', se as colunas permitirem valores nulos.


## Examples

### Example #1 
Retornar uma tabela a partir de uma lista de nomes de clientes em uma lista. Todos os valores da lista de clientes se tornam um valor de linha, e todas as listas se tornam uma coluna.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Crie uma tabela a partir de uma lista de colunas especificada e de uma lista de nomes de coluna.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Criar uma tabela com um número diferente de colunas por linha. O valor da coluna ausente é nulo.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
