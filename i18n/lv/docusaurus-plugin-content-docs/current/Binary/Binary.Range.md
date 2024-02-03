---
title: Binary.Range
---

# Binary.Range


## Description

Atgriež binārās vērtības apakškopu, kas sākas atbilstoši norādītajai nobīdei.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Atgriež binārās vērtības apakškopu, kas sākas atbilstoši nobīdei <code>binary</code>. Izmantojot papildu parametru <code>offset</code>, var iestatīt maksimālo apakškopas garumu.


## Examples

### Example #1 
Atgriež binārās vērtības apakškopu, kas sākas ar nobīdi 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Atgriež binārās vērtības apakškopu ar garumu 2, sākot ar nobīdi 6.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
