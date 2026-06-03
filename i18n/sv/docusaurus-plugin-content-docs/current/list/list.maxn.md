---
title: List.MaxN
---

# List.MaxN


Returnerar de största värdena i listan. Antalet värden som ska returneras eller ett filtervillkor måste anges.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Returnerar maxvärdena i den angivna listan. När raderna har sorterats kan du ange valfria parametrar för att ytterligare filtrera resultatet.

-   `list`: Listan med värden.
-   `countOrCondition`: Anger antalet värden som ska returneras eller ett filtervillkor. Om ett tal anges returneras en lista med upp till `countOrCondition` objekt i fallande ordning. Om ett villkor anges innehåller den returnerade listan alla objekt som uppfyller villkoret.
-   `comparisonCriteria`: (Valfritt) En funktion som används för att transformera värdena innan de jämförs. Om den här parametern är `null` jämförs värdena utan omvandling.
-   `includeNulls`: (Valfritt) Anger om `null` värden i listan ska tas med i beräkningen av det maximala objektet. Standardvärdet är `true`.


## Examples

### Example #1
Hitta de 5 främsta värdena i den angivna listan.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Hitta orden med fler än 3 tecken.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Hitta de tre senaste datumen från en lista över tyska datum.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
