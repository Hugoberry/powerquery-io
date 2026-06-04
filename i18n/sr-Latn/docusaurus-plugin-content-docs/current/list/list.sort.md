---
title: List.Sort
---

# List.Sort


Sortira listu podataka prema navedenim kriterijumima.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sortira listu podataka, `list`, prema navedenim opcionalnim kriterijumima. Može se navesti opcionalni parametar, `comparisonCriteria`, kao kriterijum poređenja. Može da uzme jednu od sledećih vrednosti:

-   Da bi se kontrolisao redosled, kriterijum poređenja može da bude Order enum vrednost. (`Order.Descending`, `Order.Ascending`).
-   Da bi se izračunao ključ koji će se koristiti za sortiranje, može se koristiti funkcija sa 1 argumentom.
-   Da bi se izabrao ključ i kontrolisao redosled, kriterijum poređenja može da bude lista koja sadrži ključ i redosled (`{each 1 / _, Order.Descending}`).
-   Za potpunu kontrolu poređenja, može se koristiti funkcija od 2 argumenta (kao što je Value.Compare). Ovoj funkciji će biti prosleđene dve stavke sa liste (bilo koje dve stavke, bilo kojim redosledom). Funkcija treba da vrati jednu od sledećih vrednosti:
    -   `-1`: Prva stavka je manja od druge stavke.
    -   `0`: Stavke su jednake.
    -   `1`: Prva stavka je veća od druge stavke.


## Examples

### Example #1
Sortiranje liste \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sortiranje liste \{2, 3, 1\} po opadajućem redosledu.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Sortiranje liste \{2, 3, 1\} po opadajućem redosledu pomoću metoda Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
