---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Returnerar en lista som hoppar över angivet antal element i början av listan.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnerar en lista som tar bort det första elementet i listan `list`. Om `list` är en tom lista returneras en tom lista. Den här funktionen tar en valfri parameter, `countOrCondition`, för att stödja borttagning av flera värden enligt listan nedan.

-   Om ett tal anges tas upp till så många objekt bort.
-   Om ett villkor anges tas alla efterföljande matchande objekt i början av `list` bort.
-   Om den här parametern är null observeras standardbeteendet.


## Examples

### Example #1
Skapa en lista från \{1, 2, 3, 4, 5\} utan de första 3 talen.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Skapa en lista från \{5, 4, 2, 6, 1\} som börjar med ett tal som är mindre än 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
