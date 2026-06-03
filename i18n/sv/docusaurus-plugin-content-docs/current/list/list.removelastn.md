---
title: List.RemoveLastN
---

# List.RemoveLastN


Returnerar en lista som tar bort angivet antal element från slutet av listan.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnerar en lista som tar bort de sista `countOrCondition` elementen från slutet av listan `list`. Om `list` har färre än `countOrCondition` element returneras en tom lista.

-   Om ett tal anges tas upp till så många objekt bort.
-   Om ett villkor anges tas alla efterföljande matchande objekt i slutet av `list` bort.
-   Om den här parametern är null tas endast ett objekt bort.


## Examples

### Example #1
Skapa en lista från \{1, 2, 3, 4, 5\} utan de sista 3 talen.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Skapa en lista från \{5, 4, 2, 6, 4\} som slutar med ett tal som är mindre än 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
