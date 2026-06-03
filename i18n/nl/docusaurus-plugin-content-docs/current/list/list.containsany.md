---
title: List.ContainsAny
---

# List.ContainsAny


Geeft aan of een lijst een van de waarden in een andere lijst bevat.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of de lijst een van de waarden uit een andere lijst bevat. Retourneert `waar` als de waarden in de lijst wordt gevonden, anders `onwaar`.

-   `list`: De lijst die doorzocht moet worden.
-   `values`: De lijst met waarden waarnaar in de eerste lijst moet worden gezocht.
-   `equationCriteria`: (Optioneel) De vergelijker die wordt gebruikt om te bepalen of twee waarden gelijk zijn.


## Examples

### Example #1
Bepaal of de lijst \{1, 2, 3, 4, 5\} 3 of 9 bevat.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Bepaal of de lijst \{1, 2, 3, 4, 5\} 6 of 7 bevat.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Bepaal of de lijst een paard of een uil, terwijl het hoofdlettergebruik wordt genegeerd.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Bepaal of de lijst een datum bevat van 8 april 2022 of 12 januari 2021.
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
