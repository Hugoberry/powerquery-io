---
title: List.Sort
---

# List.Sort


Sortează o listă de date conform criteriilor specificate.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Sortează o listă de date, `list`, conform criteriilor opționale specificate. Un parametru opțional, `comparisonCriteria`, poate fi specificat drept criteriu de comparație. Acesta poate lua următoarele valori:

-   Pentru a controla ordinea, criteriul de comparație poate fi o valoare de enumerare Order. (`Order.Descending`, `Order.Ascending`).
-   Pentru a calcula o cheie de utilizat pentru sortare, se poate utiliza o funcție de 1 argument.
-   Pentru a selecta atât o cheie, cât și o ordine de control, criteriul de comparație poate fi o listă care conține cheia și ordinea (`{each 1 / _, Order.Descending}`).
-   Pentru a controla complet comparația, se poate utiliza o funcție de 2 argumente (precum Value.Compare). Această funcție va primi două elemente din listă (oricare două elemente, în orice ordine). Funcția trebuie să returneze una dintre următoarele valori:
    -   `-1`: Primul element este mai mic decât al doilea element.
    -   `0`: Elementele sunt egale.
    -   `1`: Primul element este mai mare decât al doilea element.


## Examples

### Example #1
Sortaţi lista \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sortaţi lista \{2, 3, 1\} în ordine descrescătoare.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Sortaţi lista \{2, 3, 1\} în ordine descrescătoare utilizând metoda Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
