---
title: List.Contains
---

# List.Contains


Anger om listan innehåller värdet.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Anger om listan innehåller värdet. Returnerar `sant` om värdet finns i listan, annars `falskt`.

-   `list`: Listan att söka i.
-   `value`: Värdet att söka efter i listan.
-   `equationCriteria`: (Valfritt) Jämförare som används för att avgöra om två värden är lika.


## Examples

### Example #1
Fastställ om listan \{1, 2, 3, 4, 5\} innehåller 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Fastställ om listan \{1, 2, 3, 4, 5\} innehåller 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Om du ignorerar skiftläge fastställer du om listan innehåller "rabarber".
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
Kontrollera om listan innehåller datumet 8 april 2022.
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
