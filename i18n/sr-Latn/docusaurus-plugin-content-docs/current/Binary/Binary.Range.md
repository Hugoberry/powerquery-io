---
title: Binary.Range
---

# Binary.Range


## Description

Vraća podskup binarne vrednosti koji počinje od pomaka.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Vraća podskup binarnih vrednosti koji počinje od pomaka <code>binary</code>. Opcionalan parametar, <code>offset</code>, određuje maksimalnu dužinu podskupa.


## Examples

### Example #1 
Vraća podskup binarnih vrednosti koji počinje od pomaka 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Vraća podskup dužine 2 od pomaka 6 binarne vrednosti.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
