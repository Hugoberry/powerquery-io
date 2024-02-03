---
title: List.Reverse
---

# List.Reverse


## Description

Sąrašo reikšmių išdėstymo tvarka pakeičiama į atvirkštinę.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Pateikiamas sąrašo <code>list</code> reikšmių sąrašas atvirkštine tvarka.


## Examples

### Example #1 
Kurkite sąrašą iš \{1..10} atvirkštine tvarka.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
