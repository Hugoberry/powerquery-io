---
title: Table.IsEmpty
---

# Table.IsEmpty


Indica se a táboa contén filas.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Indica se a `table` contén filas. Devolve `true` se non hai filas (p. ex., a táboa está baleira), se non, `false`.


## Examples

### Example #1
Determinar se a táboa está baleira.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Determinar se a táboa `({})` está baleira.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
