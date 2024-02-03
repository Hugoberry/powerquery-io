---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Menunjukkan apakah nilai bersifat ganjil.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Menunjukkan apakah nilai bersifat ganjil. Menghasilkan <code>true</code> jika <code>number</code> adalah bilangan ganjil, <code>false</code> jika sebaliknya.


## Examples

### Example #1 
Memastikan 625 adalah bilangan ganjil.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Memastikan 82 adalah bilangan ganjil.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
