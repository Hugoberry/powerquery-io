---
title: Record.Combine
---

# Record.Combine


Összevonja a rekordokat a megadott listán.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Összevonja a rekordokat a megadott `records` listán. Ha a(z) `records` rekordtól eltérő értékeket tartalmaz, a függvény hibát ad vissza.


## Examples

### Example #1
Létrehoz egy összevont rekordot a rekordokból.
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
