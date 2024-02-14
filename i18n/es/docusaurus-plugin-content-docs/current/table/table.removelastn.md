---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Devuelve una tabla en la que se han quitado las N últimas filas.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Devuelve una tabla que no contiene las <code>countOrCondition</code> últimas filas de la tabla <code>table</code>.        El número de filas quitadas depende del parámetro opcional <code>countOrCondition</code>.    <ul>    <li>Si se omite <code>countOrCondition</code>, solo se quita la última fila. </li>    <li>Si <code>countOrCondition</code> es un número, se quitarán esas filas (empezando por la parte inferior). </li>    <li>Si <code>countOrCondition</code> es una condición, se quitarán las filas que la cumplan hasta que una no lo haga.</li>    </ul>


## Examples

### Example #1 
Quitar la última fila de la tabla.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Quitar las últimas filas donde [CustomerID] &gt; 0 de la tabla.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
