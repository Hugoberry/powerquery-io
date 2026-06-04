---
title: List.ContainsAll
---

# List.ContainsAll


Ilmaisee, missä luettelo sisältää kaikki toisen luettelon arvot.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Ilmaisee, sisältääkö luettelo kaikki toisen luettelon arvot. Palauttaa `true`, jos kaikki arvot löytyvät luettelosta, `false` muussa tapauksessa.

-   `list`: Haettava luettelo.
-   `values`: Ensimmäisestä luettelosta haettavien arvojen luettelo.
-   `equationCriteria`: (Valinnainen) Vertailutoiminnon avulla määritetään, ovatko kaksi arvoa yhtä suuret.


## Examples

### Example #1
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5\} luvut 3 ja 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5\} luvut 5 ja 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Selvitä, sisältääkö luettelo koiran ja hevosen, ja ohita kirjainkoko.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Selvitä, sisältääkö luettelo päivämäärät 8. huhtikuuta 2022 ja 6. heinäkuuta 2021.
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
