---
title: List.Sort
---

# List.Sort


Sorteert een lijst met gegevens volgens de opgegeven criteria.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Hiermee wordt een lijst met gegevens, `list`, gesorteerd volgens de optionele criteria die zijn opgegeven. Er kan een optionele parameter, `comparisonCriteria`, worden opgegeven als vergelijkingscriterium. Deze kan de volgende waarden aannemen:

-   Om de volgorde te bepalen kan het vergelijkingscriterium een opsommingswaarde voor de volgorde zijn. (`Order.Descending`, `Order.Ascending`).
-   Voor het berekenen van een sleutel voor de sortering kan een functie van één argument worden gebruikt.
-   Voor zowel het selecteren van een sleutel als het bepalen van de volgorde kan het vergelijkingscriterium een lijst zijn met de sleutel en de volgorde (`{each 1 / _, Order.Descending}`).
-   Voor het volledig bepalen van de vergelijking kan een functie met twee argumenten worden gebruikt. Aan deze functie worden twee item van een lijst doorgegeven (twee willekeurige items in een willekeurige volgorde). De functie moet een van de volgende waarden retourneren:
    -   `-1`: het eerste item is kleiner dan het tweede item.
    -   `0`: de items zijn gelijk.
    -   `1`: het eerste item is groter dan het tweede item.


## Examples

### Example #1
De lijst \{2, 3, 1\} sorteren.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
De lijst \{2, 3, 1\} in aflopende volgorde sorteren.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
De lijst \{2, 3, 1\} met behulp van de methode Value.Compare in aflopende volgorde sorteren.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
