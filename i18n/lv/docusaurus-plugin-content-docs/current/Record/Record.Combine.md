---
title: Record.Combine
---

# Record.Combine


## Description

Tiek apvienoti norādītajā sarakstā ietvertie ieraksti.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Tiek apvienoti norādītajā sarakstā <code>records</code> ietvertie ieraksti. Ja sarakstā <code>records</code> ir ietvertas vērtības, kas nav ieraksti, tiek atgriezta kļūda.


## Examples

### Example #1 
Izveidojiet apvienotu ierakstu no ierakstiem.
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
