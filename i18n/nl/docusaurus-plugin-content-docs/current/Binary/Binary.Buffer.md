---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Buffert de binaire waarde in het geheugen.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Buffert de binaire waarde in het geheugen. Het resultaat van deze aanroep is een stabiele binaire waarde, wat inhoudt dat deze een deterministische lengte en volgorde van de bytes heeft.


## Examples

### Example #1 
Een stabiele versie van de binaire waarde maken.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
