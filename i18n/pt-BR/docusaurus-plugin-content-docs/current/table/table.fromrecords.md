---
title: Table.FromRecords
---

# Table.FromRecords


Converte uma lista de registros em uma tabela.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Converte uma lista especificada de registros em uma tabela.

-   `records`: A lista de registros a ser convertida em tabela.
-   `columns`: (Opcional) Uma lista com os nomes das colunas da tabela ou o tipo da tabela.
-   `missingField`: (Opcional) Especifica como lidar com campos ausentes em uma linha. Use um dos seguintes valores:
    -   `MissingField.Error`: Qualquer campo ausente gera um erro (padrão).
    -   `MissingField.UseNull`: Qualquer campo ausente é incluído como valor `null`.
      
    Usar `MissingField.Ignore` neste parâmetro gera um erro.


## Examples

### Example #1
Cria uma tabela a partir dos registros usando os nomes de campo dos registros como nomes de coluna.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Cria uma tabela a partir dos registros com colunas de tipo e seleciona as colunas de número.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Crie uma tabela com o nome, a inicial do nome do meio e o sobrenome dos clientes a partir dos registros especificados. Se algum dos valores estiver ausente, substitua o valor por `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
