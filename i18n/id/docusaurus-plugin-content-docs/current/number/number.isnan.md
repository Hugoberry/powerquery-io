---
title: Number.IsNaN
---

# Number.IsNaN


Menunjukkan bahwa nilai adalah NaN (Bukan angka).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Menunjukkan bahwa nilai adalah NaN (Bukan angka). Menghasilkan `true` jika `number` setara `Number.NaN`, atau `false` jika sebaliknya.


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
