---
title: List.Last
---

# List.Last


Pateikiama paskutinė sąrašo reikšmė arba nurodyta numatytoji, jei tuščia.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Grąžinamas paskutinis nurodyto sąrašo elementas arba pasirinkta numatytoji reikšmė, jei sąrašas tuščias.

-   `list`: tikrinimui skirtas sąrašas.
-   `defaultValue`: (Pasirinktinai) Numatytoji reikšmė, kurią reikia pateikti, jei sąrašas tuščias. Jei sąrašas tuščias ir numatytoji reikšmė nenurodyta, funkcija grąžina `null`.


## Examples

### Example #1
Raskite paskutinę sąrašo reikšmę \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Raskite paskutinę sąrašo reikšmę \{\} arba -1, jeigu jis tuščias.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
