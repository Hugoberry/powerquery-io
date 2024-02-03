---
title: List.Max
---

# List.Max


## Description

Pateikiama didžiausia reikšmė arba numatytoji tuščio sąrašo reikšmė.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Pateikiamas maksimalus sąrašo <code>list</code> elementas arba pasirenkama numatytoji reikšmė <code>default</code>, jei sąrašas tuščias. Pasirenkama comparisonCriteria reikšmė, <code>comparisonCriteria</code>, gali būti nurodyta norint nustatyti, kaip palyginti sąrašo elementus. Jei šis parametras neapibrėžtas, naudojama numatytoji lyginimo funkcija.


## Examples

### Example #1 
Raskite maks. reikšmę sąraše \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Raskite maks. reikšmę sąraše \{} arba pateikiama -1, jei jis tuščias. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
