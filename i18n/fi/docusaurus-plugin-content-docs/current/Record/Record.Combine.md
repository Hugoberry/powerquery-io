---
title: Record.Combine
---

# Record.Combine


## Description

Yhdistää annetun luettelon tietueet.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Yhdistää annetun kohteen <code>records</code> tietueet. Jos <code>records</code> sisältää muita kuin tietuearvoja, palautetaan virhe.


## Examples

### Example #1 
Luo yhdistetty tietue tietueista.
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
