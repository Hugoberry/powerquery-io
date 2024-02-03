---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Menunjukkan bahwa nilai adalah NaN (Bukan angka).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Menunjukkan bahwa nilai adalah NaN (Bukan angka). Menghasilkan <code>true</code> jika <code>number</code> setara <code>Number.IsNaN</code>, atau <code>false</code> jika sebaliknya.


## Examples

### Example #1 
Memastikan 0 dibagi 0 adalah NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Memastikan 1 dibagi 0 adalah NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
