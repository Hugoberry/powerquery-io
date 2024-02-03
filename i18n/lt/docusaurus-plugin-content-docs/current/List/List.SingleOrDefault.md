---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Pateikiamas sąrašo, kurio ilgis lygus vienam, vienas sąrašo elementas ir numatytoji reikšmė, jei sąrašas tuščias.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Jei sąraše <code>list</code> yra tik vienas elementas, pateikiamas tas elementas.    Jei sąrašas tuščias, funkcija pateikia nulinį rezultatą, nebent yra nurodyta pasirenkama <code>default</code>. Jei sąraše yra daugiau nei vienas elementas, funkcija pateikia klaidą.


## Examples

### Example #1 
Raskite atskirą reikšmę sąraše \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Raskite atskirą reikšmę sąraše \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Raskite atskirą reikšmę sąraše \{}. Jei tuščias, pateikiama -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
