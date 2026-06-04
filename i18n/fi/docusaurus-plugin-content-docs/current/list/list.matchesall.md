---
title: List.MatchesAll
---

# List.MatchesAll


Palauttaa arvon true, jos kaikki luettelon arvot täyttävät ehtofunktion ehdot.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Palauttaa `tosi`\-arvon, jos kaikki luettelon arvot täyttävät ehtofunktion ehdot. Palauttaa muussa tapauksessa `epätosi`\-arvon.

-   `list`: Luettelo, joka sisältää tarkistettavat arvot.
-   `condition`: Ehto, jota verrataan luettelon arvoihin.


## Examples

### Example #1
Selvitä, ovatko luettelon \{11, 12, 13\} kaikki arvot suurempia kuin 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, ovatko luettelon \{1, 2, 3\} kaikki arvot suurempia kuin 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Selvitä, sisältävätkö kaikki luettelon tekstiarvot anna-sanan riippumatta kirjainkoosta.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Tarkista, sisältävätkö kaikki päivämäärät vuoden 2021.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
