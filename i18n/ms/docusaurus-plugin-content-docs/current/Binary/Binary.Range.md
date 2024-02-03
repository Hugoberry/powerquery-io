---
title: Binary.Range
---

# Binary.Range


## Description

Mengembalikan subset nilai perduaan yang bermula pada ofset.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Mengembalikan subset nilai perduaan yang bermula pada ofset <code>binary</code>. Parameter pilihan, <code>offset</code>, menetapkan panjang maksimum subset.


## Examples

### Example #1 
Mengembalikan subset nilai perduaan yang bermula pada ofset 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Mengembalikan subset panjang 2 daripada ofset 6 bagi nilai perduaan.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
