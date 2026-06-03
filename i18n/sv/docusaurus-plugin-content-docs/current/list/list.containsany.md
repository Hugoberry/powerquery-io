---
title: List.ContainsAny
---

# List.ContainsAny


Anger om en lista innehåller något av värdena i en annan lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Anger om listan innehåller något av värdena från en annan lista. Returnerar `sant` om värdena finns i listan, annars `falskt`.

-   `list`: Listan att söka i.
-   `values`: Listan med värden att söka efter i den första listan.
-   `equationCriteria`: (Valfritt) Jämförare som används för att avgöra om två värden är lika.


## Examples

### Example #1
Fastställ om listan \{1, 2, 3, 4, 5\} innehåller 3 och 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Fastställ om listan \{1, 2, 3, 4, 5\} innehåller 6 och 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Kontrollera om listan innehåller en häst och en hund, och ignorera skiftläge.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Kontrollera om listan innehåller ett datum från 8 april 2022 eller 12 januari 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
