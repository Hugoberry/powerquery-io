---
title: List.ContainsAll
---

# List.ContainsAll


Angiver, om en liste indeholder alle værdierne på en anden liste.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Angiver, om listen indeholder alle værdierne fra en anden liste. Returnerer `true` hvis alle værdierne findes på listen, `false` ellers.

-   `list`: Den liste, der skal søges i.
-   `values`: Listen over værdier, der skal søges efter på den første liste.
-   `equationCriteria`: (Valgfrit) Sammenligningsfunktionen, der bruges til at bestemme, om to værdier er ens.


## Examples

### Example #1
Find ud af, om listen \{1, 2, 3, 4, 5\} indeholder 3 og 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Find ud af, om listen \{1, 2, 3, 4, 5\} indeholder 5 og 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Find ud af, om listen indeholder en hund og en hest, mens du ignorerer etuiet.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Find ud af, om listen indeholder datoerne 8. april 2022 og 6. juli 2021.
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
