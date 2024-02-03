---
title: Record.Combine
---

# Record.Combine


## Description

Sujungiami nurodyto sąrašo įrašai.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Sujungiami nurodyto <code>records</code> įrašai. Jei <code>records</code> yra ne įrašo reikšmių, pateikiama klaida.


## Examples

### Example #1 
Sukurkite sujungtą įrašą iš įrašų.
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
