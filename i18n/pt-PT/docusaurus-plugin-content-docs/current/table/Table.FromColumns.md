---
title: Table.FromColumns
---

# Table.FromColumns


Cria uma tabela a partir de uma lista de colunas e valores especificados.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Remarks

Cria uma tabela do tipo <code>columns</code> a partir de uma lista <code>lists</code> que contém listas aninhadas com os nomes e os valores das colunas.    Se algumas colunas tiverem mais valores do que outras, os valores em falta serão preenchidos com o valor predefinido, "null", se as colunas puderem ser nulas.


## Examples

### Example #1 
Devolver uma tabela a partir de uma lista de nomes de clientes numa lista. Cada valor no item da lista de clientes torna-se um valor de linha, sendo que cada lista torna-se uma coluna.
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
Criar uma tabela a partir de uma lista de colunas e uma lista de nomes de colunas especificadas.
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
Crie uma tabela com um número diferente de colunas por linha. O valor da linha ausente é nulo.
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
