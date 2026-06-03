---
title: Table.Last
---

# Table.Last


Restituisce l'ultima riga o un valore predefinito specificato.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Remarks

Restituisce l'ultima riga di `table` o il valore predefinito facoltativo `default`, se la tabella è vuota.


## Examples

### Example #1
Trovare l'ultima riga della tabella.
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
Trovare l'ultima riga della tabella `({})` o restituire \[a = 0, b = 0\] se vuota.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
