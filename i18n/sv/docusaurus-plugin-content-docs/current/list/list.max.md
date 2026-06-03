---
title: List.Max
---

# List.Max


Returnerar det största värdet eller standardvärdet för en tom lista.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Returnerar det maximala objektet i listan eller det valfria standardvärdet om listan är tom.

-   `list`: Listan med värden.
-   `default`: (Valfritt) Det värde som ska returneras om listan är tom.
-   `comparisonCriteria`: (Valfritt) En funktion som används för att transformera värdena innan de jämförs. Om den här parametern är `null` jämförs värdena utan omvandling.
-   `includeNulls`: (Valfritt) Anger om `null` värden i listan ska tas med i beräkningen av det maximala objektet. Standardvärdet är `true`.


## Examples

### Example #1
Hitta maxvärdet i den angivna listan.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Hitta maxvärdet i den angivna listan eller returnera -1 om det är tomt.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Leta reda på objektet i en lista med textvärden som varar i alfabetisk ordning. Om listan är tom returnerar du "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Hitta det senaste datumet från en lista över tyska datum. Om listan är tom returnerar du 1 januari 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
