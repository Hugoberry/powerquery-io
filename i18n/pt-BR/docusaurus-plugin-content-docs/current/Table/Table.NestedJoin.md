---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Une as linhas de <code>table1</code> com as linhas de <code>table2</code> com base na igualdade dos valores das colunas de chave selecionadas por <code>key1</code> (para <code>table1</code>) e <code>key2</code> (para <code>table2</code>). Os resultados são inseridos na coluna denominada <code>newColumnName</code>.<br />O <code>joinKind</code> opcional especifica o tipo de junção a ser executado. Por padrão, uma junção externa esquerda é executada se um <code>joinKind</code> não é especificado.<br />Um conjunto opcional de <code>keyEqualityComparers</code> pode ser incluído para especificar como comparar as colunas de chave. No momento, este recurso é somente para fins de uso interno.<br />  


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
