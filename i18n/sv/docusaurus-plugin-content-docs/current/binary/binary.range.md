---
title: Binary.Range
---

# Binary.Range


Returnerar en delmängd av binärvärdet med start vid en förskjutning.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Returnerar en delmängd av binärvärdet med början vid förskjutningen <code>binary</code>. En valfri parameter, <code>offset</code>, anger maxlängden för delmängden.


## Examples

### Example #1 
Returnerar en delmängd av binärvärdet med start vid förskjutning 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Returnerar en delmängd med längden 2 från förskjutningen 6 av binärvärdet.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
