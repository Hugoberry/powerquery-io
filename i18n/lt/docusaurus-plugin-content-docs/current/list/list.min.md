---
title: List.Min
---

# List.Min


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


## Remarks

Pateikiamas minimalus sąrašo `list` elementas arba pasirenkama numatytoji reikšmė `default`, jei sąrašas tuščias. Pasirenkama comparisonCriteria reikšmė, `comparisonCriteria`, gali būti nurodyta norint nustatyti, kaip palyginti sąrašo elementus. Jei šis parametras neapibrėžtas, naudojama numatytoji lyginimo funkcija.


## Examples

### Example #1
Raskite min. reikšmę sąraše \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Raskite min. reikšmę sąraše \{\} arba pateikiama -1, jei jis tuščias.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
