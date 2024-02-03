---
title: Binary.Range
---

# Binary.Range


## Description

Hiermee wordt een subset van de binaire waarde geretourneerd, te beginnen bij een marge.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Hiermee wordt een subset van de binaire waarde geretourneerd, te beginnen bij de marge <code>binary</code>. Met een optionele parameter, <code>offset</code>, wordt de maximale lengte van de subset ingesteld.


## Examples

### Example #1 
Hiermee wordt een subset van de binaire waarde geretourneerd, te beginnen bij marge 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Hiermee wordt een subset met lengte 2 geretourneerd vanaf marge 6 van de binaire waarde.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
