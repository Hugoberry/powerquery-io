---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Buffrar binärvärdet i minne.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Buffrar binärvärdet i minne. Resultatet av detta anrop är ett stabilt binärvärde, vilket betyder att det har en deterministisk längd och byteordning.


## Examples

### Example #1 
Skapa en stabil version av binärvärdet.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
