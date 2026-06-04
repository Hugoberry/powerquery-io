---
title: Table.Last
---

# Table.Last


Devolve a última fila ou un valor predefinido especificado.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Remarks

Devolve a última fila da `table` ou un valor predefinido opcional, `default`, se a táboa está baleira.


## Examples

### Example #1
Buscar a última fila da táboa.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2
Buscar a última fila da táboa `({})` ou devolver \[a = 0, b = 0\] se está baleira.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
