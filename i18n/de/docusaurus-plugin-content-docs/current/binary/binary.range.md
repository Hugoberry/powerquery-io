---
title: Binary.Range
---

# Binary.Range


Gibt eine Teilmenge des Binärwerts ab einem Offset zurück.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Gibt eine Teilmenge des Binärwerts ab dem Offset "<code>binary</code>" zurück. Die maximale Länge der Teilmenge kann mithilfe eines optionalen Parameters (<code>offset</code>) festgelegt werden.


## Examples

### Example #1 
Gibt eine Teilmenge des Binärwerts ab Offset 6 zurück.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Gibt eine Teilmenge des Binärwerts mit der Länge 2 ab Offset 6 zurück.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
