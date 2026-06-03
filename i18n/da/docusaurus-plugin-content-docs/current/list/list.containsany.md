---
title: List.ContainsAny
---

# List.ContainsAny


Angiver, om en liste indeholder en af værdierne på en anden liste.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Angiver, om listen indeholder nogen af værdierne fra en anden liste. Returnerer `true` hvis værdierne findes på listen, `false` ellers.

-   `list`: Den liste, der skal søges i.
-   `values`: Listen over værdier, der skal søges efter på den første liste.
-   `equationCriteria`: (Valgfrit) Sammenligningsfunktionen, der bruges til at bestemme, om to værdier er ens.


## Examples

### Example #1
Find ud af, om listen \{1, 2, 3, 4, 5\} indeholder 3 eller 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Find ud af, om listen \{1, 2, 3, 4, 5\} indeholder 6 eller 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Find ud af, om listen indeholder en hest eller en ugle, mens du ignorerer etuiet.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Find ud af, om listen indeholder en dato fra 8. april 2022 eller 12. januar 2021.
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
