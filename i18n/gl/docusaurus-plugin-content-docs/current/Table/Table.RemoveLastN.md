---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Devolve unha táboa coas últimas N filas eliminadas.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Devolve unha táboa que non contén as últimas <code>countOrCondition</code> filas da táboa <code>table</code>.        O número de filas eliminadas depende do parámetro opcional <code>countOrCondition</code>.    <ul>    <li> Se <code>countOrCondition</code> se omite, só se elimina a última fila. </li>    <li> Se <code>countOrCondition</code> é un número, eliminarase ese número de filas (comezando pola parte inferior). </li>    <li> Se <code>countOrCondition</code> é unha condición, eliminaranse as filas que cumpran a condición ata que unha fila non a cumpra.</li>    </ul>


## Examples

### Example #1 
Eliminar a última fila da táboa.
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
Eliminar as últimas filas onde [CustomerID] &gt; 2 da táboa.
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
