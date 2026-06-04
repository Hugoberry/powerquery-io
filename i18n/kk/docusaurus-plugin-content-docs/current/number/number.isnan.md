---
title: Number.IsNaN
---

# Number.IsNaN


Мәннің сан еместігін көрсетеді.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Мәннің сан еместігін көрсетеді. Егер `number` `Number.NaN` тең болса `true`, олай болмаса `false` мәнін қайтарады.


## Examples

### Example #1
0 санына бөлінген 0 мәнінің сан еместігін тексеру.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
0 санына бөлінген 1 мәнінің сан еместігін тексеру.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
