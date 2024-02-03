---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Menunjukkan sama ada nilai ialah NaN (Bukan nombor).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Menunjukkan sama ada nilai ialah NaN (Bukan nombor). Mengembalikan <code>true</code> jika <code>number</code> bersamaan dengan <code>Number.IsNaN</code>, <code>false</code> sebaliknya.


## Examples

### Example #1 
Semak sama ada 0 dibahagikan dengan 0 ialah NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Semak sama ada 1 dibahagikan dengan 0 ialah NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
