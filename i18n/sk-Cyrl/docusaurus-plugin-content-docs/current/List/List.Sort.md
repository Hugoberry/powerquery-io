---
title: List.Sort
---

# List.Sort


## Description

Zoradí zoznam údajov podľa stanovených kritérií.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Zoradí zoznam údajov, <code>list</code>, podľa stanovených voliteľných kritérií.    Ako kritérium porovnania možno stanoviť voliteľný parameter <code>comparisonCriteria</code>. Môžu sa použiť nasledujúce hodnoty:    <ul>    <li> Ak chcete ovládať poradie, kritériom porovnania môže byť hodnota enumerácie Order. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Na výpočet kľúča, ktorý sa použije na zoradenie, možno použiť funkciu 1 argumentu. </li>    <li> Ak chcete vybrať kľúč a zároveň ovládať poradie, kritériom porovnania môže byť zoznam obsahujúci kľúč aj poradie (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Ak chcete úplne ovládať porovnanie, môžete použiť funkciu 2 argumentov. Do tejto funkcie budú postúpené dve položky zo zoznamu (dve náhodné položky v náhodnom poradí). Funkcia by mala vrátiť jednu z nasledujúcich hodnôt:        <ul>            <li> <code>-1</code>: Prvá položka je menšia ako druhá.</li>            <li> <code>0</code>: Položky sú si rovné.</li>            <li> <code>1</code>: Prvá položka je väčšia ako druhá.</li>        </ul>        Value.Compare je metóda, ktorú možno použiť na delegovanie tejto logiky. </li>    </ul>


## Examples

### Example #1 
Zoraďte zoznam \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Zoraďte zoznam \{2, 3, 1} v zostupnom poradí.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Zoraďte zoznam \{2, 3, 1} v zostupnom poradí použitím metódy Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
