---
title: List.Range
---

# List.Range


Returnerar en delmängd av listan med början från en förskjutning.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Returnerar en delmängd av listan med början från förskjutningen <code>list</code>. En valfri parameter, <code>offset</code>, anger det högsta antalet objekt i delmängden.


## Examples

### Example #1 
Hitta delmängden med början vid förskjutningen 6 i listan med talen 1 till och med 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Hitta delmängden med längden 2 från förskjutningen 6, från listan med talen 1 till och med 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
