---
title: Table.NestedJoin
---

# Table.NestedJoin


Executa uma junção entre tabelas nas colunas fornecidas e produz o resultado de junção em uma nova coluna.


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

Une as linhas de `table1` com as linhas de `table2` com base na igualdade dos valores das colunas de chave selecionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados são inseridos na coluna denominada `newColumnName`.

O `joinKind` opcional especifica o tipo de junção a ser executado. Por padrão, uma junção externa esquerda é executada se um `joinKind` não é especificado.

Um conjunto opcional de `keyEqualityComparers` pode ser incluído para especificar como comparar as colunas de chave. No momento, este recurso é somente para fins de uso interno.


## Examples

### Example #1
Unir duas tabelas usando uma única coluna de chave.
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
