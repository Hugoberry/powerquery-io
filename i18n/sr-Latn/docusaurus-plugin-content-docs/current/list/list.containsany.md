---
title: List.ContainsAny
---

# List.ContainsAny


Navodi da li lista obuhvata bilo koju vrednost iz druge liste.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Označava da li lista sadrži neku od vrednosti iz druge liste. Vraća vrednost `true` ako se vrednosti pronađu u listi, u suprotnom vraća vrednost `false`.

-   `list`: Lista koja se pretražuje.
-   `values`: Lista vrednosti koja se traži u prvoj listi.
-   `equationCriteria`: (Opcionalno) Upoređivač koji se koristi kako bi se utvrdilo da li su dve vrednosti jednake.


## Examples

### Example #1
Odredite da li lista \{1, 2, 3, 4, 5\} sadrži 3 i 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Odredite da li lista \{1, 2, 3, 4, 5\} sadrži 6 i 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Odredite da li lista sadrži konja ili sovu, zanemarujući velika i mala slova.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Odredite da li lista sadrži datume 8. april 2022. ili 12. januar 2021.
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
