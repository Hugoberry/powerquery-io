---
title: Table.FromRecords
---

# Table.FromRecords


Converte uma lista de registos numa tabela.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Converte uma lista especificada de registos numa tabela.

-   `records`: a lista de registos a converter numa tabela.
-   `columns`: (opcional) uma lista dos nomes das colunas da tabela ou o tipo da tabela.
-   `missingField`: (opcional) especifica como processar campos em falta numa linha. Utilize um dos valores seguintes:
    -   `MissingField.Error`: quaisquer campos em falta produzem um erro (predefinição).
    -   `MissingField.UseNull`: quaisquer campos em falta são incluídos como valores `null`.
      
    A utilização de `MissingField.Ignore` neste parâmetro produz um erro.


## Examples

### Example #1
Criar uma tabela a partir de registos, utilizando nomes de campos de registo como nomes de colunas.
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
Criar uma tabela a partir de registos com colunas de tipo definido e selecionar as colunas numéricas.
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
Criar uma tabela que contenha o nome próprio, a inicial do meio e o apelido dos clientes a partir dos registos especificados. Se algum dos valores estiver em falta, substitua o valor por `null`.
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
