---
title: Record.Combine
---

# Record.Combine


## Description

Combină înregistrările în lista dată.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Combină înregistrările în lista dată <code>records</code>. Dacă <code>records</code> conţine valori care nu aparţin înregistrării, se returnează o eroare.


## Examples

### Example #1 
Creați o înregistrare combinată din înregistrări.
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
