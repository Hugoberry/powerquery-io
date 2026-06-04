---
title: List.Sort
---

# List.Sort


Razvrsti seznam podatkov glede na navedene kriterije.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Razvrstite seznam podatkov, `list`, glede na navedene izbirne kriterije. Kot kriterij primerjave lahko določite izbirni parameter `comparisonCriteria`. To ima lahko sledeče vrednosti:

-   Kriterij primerjave za nadzor vrstnega reda je lahko vrednost"Order enum". (`Order.Descending`, `Order.Ascending`).
-   Za izračunavanje ključa za razvrščanje lahko uporabite funkcijo z enim argumentom.
-   Če želite izbrati ključ in nadzorovati vrstni red, lahko kot kriterij primerjave določite seznam, ki vsebuje ključ in vrstni red (`{each 1 / _, Order.Descending}`).
-   Če želite v celoti nadzorovati primerjavo, lahko uporabite funkcijo z dvema argumentoma (kot npr. Value.Compare). Tej funkciji bosta posredovana dva elementa s seznama (poljubna dva elementa v poljubnem vrstnem redu). Funkcija mora vrniti eno od sledečih vrednosti:
    -   `-1`: Prvi element je manjši od drugega elementa.
    -   `0`: Elementi so enaki.
    -   `1`: Prvi element je večji od drugega elementa.


## Examples

### Example #1
Razvrstite seznam \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Razvrstite seznam \{2, 3, 1\} v padajočem vrstnem redu.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Razvrstite seznam \{2, 3, 1\} v padajočem vrstnem redu z metodo"Value.Compare".
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
