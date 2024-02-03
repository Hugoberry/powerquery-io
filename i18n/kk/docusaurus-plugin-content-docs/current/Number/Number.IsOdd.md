---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Мәннің тақ екендігін көрсетеді.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Мәннің тақ екендігін көрсетеді. Егер <code>number</code> тақ сан болса, <code>true</code>, олай болмаса <code>false</code> мәнін қайтарады.


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
