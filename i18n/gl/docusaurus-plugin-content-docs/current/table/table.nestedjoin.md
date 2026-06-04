---
title: Table.NestedJoin
---

# Table.NestedJoin


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


## Remarks

Une as filas de `table1` coas filas de `table2` baseándose na igualdade dos valores das columnas clave seleccionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados introdúcense na columna denominada `newColumnName`.

O `joinKind` opcional especifica o tipo de combinación que realizar. Por defecto, execútase unha combinación externa esquerda se non se especifica ningún `joinKind`.

Pode incluírse un conxunto opcional de `keyEqualityComparers` para especificar como realizar a comparación coas columnas clave. Esta funcionalidade só está pensada para uso interno actualmente.


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
