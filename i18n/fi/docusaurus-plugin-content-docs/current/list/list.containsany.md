---
title: List.ContainsAny
---

# List.ContainsAny


Ilmaisee, missä luettelo sisältää minkä tahansa toisen luettelon arvoista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Ilmaisee, sisältääkö luettelo mitään toisen luettelon arvoista. Palauttaa `true`, jos arvot löytyvät luettelosta, `false` muussa tapauksessa.

-   `list`: Haettava luettelo.
-   `values`: Ensimmäisestä luettelosta haettavien arvojen luettelo.
-   `equationCriteria`: (Valinnainen) Vertailutoiminnon avulla määritetään, ovatko kaksi arvoa yhtä suuret.


## Examples

### Example #1
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5\} luvun 3 tai 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5\} luvun 6 tai 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Selvitä, sisältääkö luettelo hevosen tai pöllön, ja ohita kirjainkoko.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Selvitä, sisältääkö luettelo päivämäärän 8. huhtikuuta 2022 tai 12. tammikuuta 2021.
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
