---
title: Record.Combine
---

# Record.Combine


## Description

Összevonja a rekordokat a megadott listán.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Összevonja a rekordokat a megadott <code>records</code> listán. Ha a(z) <code>records</code> rekordtól eltérő értékeket tartalmaz, a függvény hibát ad vissza.


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
