---
title: List.ContainsAll
---

# List.ContainsAll


Anger om en lista innehåller alla värdena i en annan lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Anger om listan inkluderar all värdena från en annan lista. Returnerar `sant` om alla värdena finns i listan, annars `falskt`.

-   `list`: Listan att söka i.
-   `values`: Listan med värden att söka efter i den första listan.
-   `equationCriteria`: (Valfritt) Jämförare som används för att avgöra om två värden är lika.


## Examples

### Example #1
Fastställ om listan \{1, 2, 3, 4, 5\} innehåller 3 och 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Fastställ om listan \{1, 2, 3, 4, 5\} innehåller 5 och 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Kontrollera om listan innehåller en hund och en häst, och ignorera skiftläge.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Kontrollera om listan innehåller datumen 8 april 2022 och 6 juli 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
