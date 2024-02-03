---
title: List.Transform
---

# List.Transform


## Description

Retourneert een nieuwe lijst met de waarden die op basis van deze lijst zijn berekend.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Retourneert een nieuwe lijst met waarden door de transformatiefunctie <code>transform</code> op de lijst <code>list</code> toe te passen.


## Examples

### Example #1 
Het getal 1 aan elke waarde in de lijst \{1, 2} toevoegen.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
