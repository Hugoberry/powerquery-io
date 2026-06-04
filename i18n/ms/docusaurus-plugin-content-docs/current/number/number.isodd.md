---
title: Number.IsOdd
---

# Number.IsOdd


Menunjukkan sama ada nilai ganjil.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Menunjukkan sama ada nilai ganjil. Mengembalikan `true` jika `number` ialah nombor ganjil, `false` sebaliknya.


## Examples

### Example #1
Semak sama ada 625 ialah nombor ganjil.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Semak sama ada 82 ialah nombor ganjil.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
