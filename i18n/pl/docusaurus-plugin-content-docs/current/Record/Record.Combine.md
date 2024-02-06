---
title: Record.Combine
---

# Record.Combine


Łączy rekordy na danej liście.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Łączy rekordy na danej liście <code>records</code>. Jeśli parametr <code>records</code> zawiera wartości niebędące rekordem, jest zwracany błąd.


## Examples

### Example #1 
Utwórz połączony rekord na podstawie rekordów.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
