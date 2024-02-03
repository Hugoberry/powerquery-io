---
title: List.First
---

# List.First


## Description

Pateikiama pirmoji sąrašo reikšmė arba nurodoma numatytoji, jei tuščia.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Pateikiamas pirmasis sąrašo elementas <code>list</code> arba pasirenkama numatytoji reikšmė, <code>defaultValue</code>, jei sąrašas tuščias.    Jei sąrašas tuščias ir numatytoji reikšmė nenurodyta, funkcija pateikia <code>null</code>.


## Examples

### Example #1 
Rasti pirmą sąrašo reikšmę \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Raskite pirmąją sąrašo reikšmę \{}. Jei sąrašas yra tuščias, pateikiama -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
