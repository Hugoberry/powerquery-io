---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Executa unha asociación entre táboas en columnas fornecidas e produce o resultado da unión nunha nova columna.


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

Une as filas de <code>table1</code> coas filas de <code>table2</code> baseándose na igualdade dos valores das columnas clave seleccionadas por <code>key1</code> (para <code>table1</code>) e <code>key2</code> (para <code>table2</code>). Os resultados introdúcense na columna denominada <code>newColumnName</code>.<br />O <code>joinKind</code> opcional especifica o tipo de combinación que realizar. Por defecto, execútase unha combinación externa esquerda se non se especifica ningún <code>joinKind</code>.<br />Pode incluírse un conxunto opcional de <code>keyEqualityComparers</code> para especificar como realizar a comparación coas columnas clave. Esta funcionalidade só está pensada para uso interno actualmente.<br />  


## Examples

### Example #1 
Une dúas táboas usando unha única columna clave.
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
