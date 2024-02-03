---
title: Record.Combine
---

# Record.Combine


## Description

Združi zapise na danem seznamu.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Združi zapise na danem seznamu <code>records</code>. Če seznam <code>records</code> vsebuje vrednosti brez zapisov, je vrnjena napaka.


## Examples

### Example #1 
Ustvarite združen zapis iz zapisov.
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
