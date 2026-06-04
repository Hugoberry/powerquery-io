---
title: Record.Combine
---

# Record.Combine


Tiek apvienoti norādītajā sarakstā ietvertie ieraksti.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Tiek apvienoti norādītajā sarakstā `records` ietvertie ieraksti. Ja sarakstā `records` ir ietvertas vērtības, kas nav ieraksti, tiek atgriezta kļūda.


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
