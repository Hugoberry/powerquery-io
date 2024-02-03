---
title: List.Transform
---

# List.Transform


## Description

Pateikiamas naujas sąrašas reikšmių, apskaičiuotų iš šio sąrašo.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Pateikiamas naujas sąrašas reikšmių, taikant transformavimo funkciją <code>transform</code> sąrašui <code>list</code>.


## Examples

### Example #1 
Pridėkite 1 prie kiekvienos reikšmės sąraše \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
