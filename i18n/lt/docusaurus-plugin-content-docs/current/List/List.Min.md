---
title: List.Min
---

# List.Min


## Description

Pateikiama tuščio sąrašo minimali reikšmė arba numatytoji reikšmė.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Pateikiamas minimalus sąrašo <code>list</code> elementas arba pasirenkama numatytoji reikšmė <code>default</code>, jei sąrašas tuščias.    Pasirenkama comparisonCriteria reikšmė, <code>comparisonCriteria</code>, gali būti nurodyta norint nustatyti, kaip palyginti sąrašo elementus. Jei šis parametras neapibrėžtas, naudojama numatytoji lyginimo funkcija.


## Examples

### Example #1 
Raskite min. reikšmę sąraše \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Raskite min. reikšmę sąraše \{} arba pateikiama -1, jei jis tuščias. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
