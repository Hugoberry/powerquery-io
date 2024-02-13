---
title: List.Transform
---

# List.Transform


Returnerer en ny liste over de værdier, der er beregnet på listen.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Returnerer en ny liste over værdier ved at anvende transformationsfunktionen <code>transform</code> på listen <code>list</code>.


## Examples

### Example #1 
Føj 1 til de enkelte værdier på listen \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
