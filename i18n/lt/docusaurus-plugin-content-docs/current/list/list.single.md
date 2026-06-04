---
title: List.Single
---

# List.Single


Pateikiamas sąrašo, kurio ilgis lygus vienam, vienas sąrašo elementas, kitu atveju pateikiama klaida.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Jei sąraše `list` yra tik vienas elementas, pateikiamas tas elementas. Jei yra daugiau nei vienas elementas arba jei sąrašas tuščias, funkcija pateikia klaidą.


## Examples

### Example #1
Raskite atskirą reikšmę sąraše \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Raskite atskirą reikšmę sąraše \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
