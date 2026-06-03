---
title: List.ContainsAll
---

# List.ContainsAll


Geeft aan of een lijst alle waarden in een andere lijst bevat.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of de lijst alle waarden uit een andere lijst bevat. Retourneert `waar` als alle waarden in de lijst wordt gevonden, anders `onwaar`.

-   `list`: De lijst die doorzocht moet worden.
-   `values`: De lijst met waarden waarnaar in de eerste lijst moet worden gezocht.
-   `equationCriteria`: (Optioneel) De vergelijker die wordt gebruikt om te bepalen of twee waarden gelijk zijn.


## Examples

### Example #1
Bepaal of de lijst \{1, 2, 3, 4, 5\} 3 en 4 bevat.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Bepaal of de lijst \{1, 2, 3, 4, 5\} 5 en 6 bevat.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Bepaal of de lijst een hond en een paard bevat, terwijl het hoofdlettergebruik wordt genegeerd.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Bepaal of de lijst de datums 8 april 2022 en 6 juli 2021 bevat.
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
