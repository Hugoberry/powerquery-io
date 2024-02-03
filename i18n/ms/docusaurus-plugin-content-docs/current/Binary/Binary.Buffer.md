---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Menimbal nilai perduaan dalam memori.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Menimbal nilai perduaan dalam memori.  Hasil panggilan ini ialah nilai perduaan yang stabil, yang bermakna ia akan mempunyai panjang kebertentuan dan tertib bait.


## Examples

### Example #1 
Cipta versi stabil bagi nilai perduaan.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
