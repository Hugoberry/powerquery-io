---
title: Table.IsEmpty
---

# Table.IsEmpty


Indicare se la tabella contiene righe.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Indica se `table` contiene righe. Restituisce `true` se non sono presenti righe, ad esempio se la tabella è vuota, in caso contrario `false`.


## Examples

### Example #1
Determinare se la tabella è vuota.
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
Determinare se la tabella `({})` è vuota.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
