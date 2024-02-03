---
title: List.Single
---

# List.Single


## Description

Pateikiamas sąrašo, kurio ilgis lygus vienam, vienas sąrašo elementas, kitu atveju pateikiama išimtis.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Jei sąraše <code>list</code> yra tik vienas elementas, pateikiamas tas elementas.    Jei yra daugiau nei vienas elementas arba jei sąrašas tuščias, funkcija pateikia išimtį.


## Examples

### Example #1 
Raskite atskirą reikšmę sąraše \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Raskite atskirą reikšmę sąraše \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
