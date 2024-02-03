---
title: Record.Combine
---

# Record.Combine


## Description

Kombinovanje zapisa iz date liste.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Kombinovanje zapisa iz datog <code>records</code>. Ako <code>records</code> sadrži vrednosti koje nisu iz zapisa, vraća se greška.


## Examples

### Example #1 
Kreiranje kombinovanog zapisa od zapisa.
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
