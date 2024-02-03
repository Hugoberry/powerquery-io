---
title: Binary.Range
---

# Binary.Range


## Description

Returnerer et undersæt af den binære værdi med start ved en forskydning.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Returnerer et undersæt af den binære værdi med start ved forskydningen <code>binary</code>. En valgfri parameter, <code>offset</code>, angiver den maksimale længde i undersættet.


## Examples

### Example #1 
Returnerer et undersæt af den binære værdi med start ved forskydning 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Returnerer et undersæt med længde 2 fra forskydning 6 af den binære værdi.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
