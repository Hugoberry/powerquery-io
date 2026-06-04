---
title: Number.IsOdd
---

# Number.IsOdd


Мәннің тақ екендігін көрсетеді.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Мәннің тақ екендігін көрсетеді. Егер `number` тақ сан болса, `true`, олай болмаса `false` мәнін қайтарады.


## Examples

### Example #1
625 санының тақ сан екенін тексеру.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
82 санының тақ сан екенін тексеру.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
