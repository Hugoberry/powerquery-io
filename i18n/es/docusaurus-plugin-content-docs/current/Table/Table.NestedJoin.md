---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

Realiza una combinación de las tablas en las columnas proporcionadas y genera el resultado de la combinación en una nueva columna.


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

Combina las filas de <code>table1</code> con las filas de <code>table2</code> según la igualdad de los valores de las columnas clave seleccionadas por <code>key1</code> (para <code>table1</code>) y <code>key2</code> (para <code>table2</code>). Los resultados se especifican en la columna denominada <code>newColumnName</code>.<br />El valor opcional <code>joinKind</code> especifica el tipo de unión que se debe realizar. De manera predeterminada, se efectuará una combinación externa izquierda en caso de no especificar <code>joinKind</code>.<br />Se puede incluir un conjunto de <code>keyEqualityComparers</code> opcional para especificar cómo comparar las columnas clave. Actualmente, esta característica solo está diseñada para uso interno.<br />  


## Examples

### Example #1 
Una dos tablas con una única columna de clave.
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
