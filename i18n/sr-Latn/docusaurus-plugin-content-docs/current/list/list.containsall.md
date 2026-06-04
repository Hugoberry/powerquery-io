---
title: List.ContainsAll
---

# List.ContainsAll


Navodi da li lista obuhvata sve vrednosti iz druge liste.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Označava da li lista uključuje sve vrednosti iz druge liste. Vraća vrednost `true` ako se sve vrednosti pronađu u listi, u suprotnom vraća vrednost `false`.

-   `list`: Lista koja se pretražuje.
-   `values`: Lista vrednosti koja se traži u prvoj listi.
-   `equationCriteria`: (Opcionalno) Upoređivač koji se koristi kako bi se utvrdilo da li su dve vrednosti jednake.


## Examples

### Example #1
Odredite da li lista \{1, 2, 3, 4, 5\} sadrži 3 i 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Odredite da li lista \{1, 2, 3, 4, 5\} sadrži 5 i 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Odredite da li lista sadrži psa i konja, zanemarujući velika i mala slova.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Odredite da li lista sadrži datume 8. april 2022. i 6. juli 2021.
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
