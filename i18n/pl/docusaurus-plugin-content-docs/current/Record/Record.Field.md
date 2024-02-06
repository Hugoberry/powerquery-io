---
title: Record.Field
---

# Record.Field


Zwraca wartość określonego pola w rekordzie.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Zwraca wartość określonego pola <code>field</code> w rekordzie <code>record</code>. Jeśli nie można odnaleźć pola, zwracany jest wyjątek.


## Examples

### Example #1 
Znajdź wartość pola „CustomerID” w rekordzie.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
