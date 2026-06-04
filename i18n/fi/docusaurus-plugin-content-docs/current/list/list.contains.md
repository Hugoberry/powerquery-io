---
title: List.Contains
---

# List.Contains


Ilmaisee, sisältääkö luettelo arvon.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Ilmaisee, sisältääkö luettelo määritetyn arvon. Palauttaa `true`, jos arvo löytyy luettelosta, `false` muussa tapauksessa.

-   `list`: Haettava luettelo.
-   `value`: Luettelosta haettava arvo.
-   `equationCriteria`: (Valinnainen) Vertailutoiminnon avulla määritetään, ovatko kaksi arvoa yhtä suuret.


## Examples

### Example #1
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5\} luvun 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5\} luvun 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Ohita kirjainkoko ja selvitä, sisältääkö luettelo sanan "rhubarb".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Selvitä, sisältääkö luettelo päivämäärän 8. huhtikuuta 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
