---
title: Table.NestedJoin
---

# Table.NestedJoin


Efetua uma junção entre as tabelas nas colunas fornecidas e produz o resultado da junção numa nova coluna.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Associa as linhas de `table1` com as linhas de `table2` com base na igualdade dos valores das colunas chave selecionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados são introduzidos na coluna com o nome `newColumnName`.

O `joinKind` opcional especifica o tipo de associação a efetuar. Por predefinição, é efetuada uma associação externa à esquerda se não for especificado um `joinKind`.

Pode ser incluído um conjunto otimizado de `keyEqualityComparers` para especificar como comparar as colunas chave. Atualmente, esta funcionalidade destina-se apenas a utilização interna.


## Examples

### Example #1
Associe duas tabelas com uma única coluna de chaves.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
