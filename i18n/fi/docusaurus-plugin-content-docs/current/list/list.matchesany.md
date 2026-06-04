---
title: List.MatchesAny
---

# List.MatchesAny


Palauttaa arvon true, jos mikä tahansa arvo täyttää ehtofunktion ehdot.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Palauttaa `tosi`\-arvon, jos jokin luettelon arvoista täyttää ehtofunktion ehdot, muuten palauttaa `epätosi`\-arvon.

-   `list`: Luettelo, joka sisältää tarkistettavat arvot.
-   `condition`: Ehto, jota verrataan luettelon arvoihin.


## Examples

### Example #1
Selvitä, onko jokin luettelon \{9, 10, 11\} arvoista suurempi kuin 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, onko jokin luettelon \{1, 2, 3\} arvoista suurempi kuin 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Selvitä, sisältääkö jokin luettelon tekstiarvoista kissa-sanan riippumatta kirjainkoosta.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Selvitä, sisältääkö jokin päivämääristä vuoden 2021.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
