---
title: List.Last
---

# List.Last


## Description

Pateikiama paskutinė sąrašo reikšmė arba nurodyta numatytoji, jei tuščia.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Pateikiamas paskutinis sąrašo elementas <code>list</code> arba pasirinktinė numatytoji reikšmė, <code>defaultValue</code>, jei sąrašas tuščias.    Jei sąrašas tuščias ir numatytoji reikšmė nenurodyta, funkcija pateikia <code>null</code>.


## Examples

### Example #1 
Raskite paskutinę sąrašo reikšmę \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Raskite paskutinę sąrašo reikšmę \{} arba -1, jeigu jis tuščias.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
