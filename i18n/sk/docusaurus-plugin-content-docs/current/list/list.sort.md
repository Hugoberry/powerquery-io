---
title: List.Sort
---

# List.Sort


Zoradí zoznam údajov podľa stanovených kritérií.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Zoradí zoznam údajov, `list`, podľa voliteľných kritérií, ktoré sú uvedené. Ako voliteľný parameter možno určiť kritérium porovnania, `comparisonCriteria`. Môže nadobúdať nasledujúce hodnoty:

-   Ak chcete určiť poradie, kritérium porovnania môže byť hodnota výčtu Order. (`Order.Descending`, `Order.Ascending`).
-   Na výpočet kľúča, ktorý sa použije na zoradenie, môže byť použitá funkcia s jedným argumentom.
-   Ak chcete vybrať kľúč a zároveň určiť poradie, kritérium porovnania môže byť zoznam obsahujúci kľúč a poradie (`{each 1 / _, Order.Descending}`).
-   Na úplné ovládanie porovnania je možné použiť funkciu s dvoma argumentmi (napríklad Value.Compare). Do tejto funkcie sa odovzdajú dve položky zo zoznamu (akékoľvek dve položky, v ľubovoľnom poradí). Funkcia by mala vrátiť jednu z nasledujúcich hodnôt:
    -   `-1`: Prvá položka je menšia ako druhá.
    -   `0`: Položky sú si rovné.
    -   `1`: Prvá položka je väčšia ako druhá.


## Examples

### Example #1
Zoraďte zoznam \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Zoraďte zoznam \{2, 3, 1\} v zostupnom poradí.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Zoraďte zoznam \{2, 3, 1\} v zostupnom poradí použitím metódy Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
