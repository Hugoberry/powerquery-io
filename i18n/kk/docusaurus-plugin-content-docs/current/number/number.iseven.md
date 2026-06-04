---
title: Number.IsEven
---

# Number.IsEven


Мәннің жұп екендігін көрсетеді.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

`number` мәнінің жұп екендігін көрсетеді: ол жұп болса, `true`, олай болмаса `false` мәнін қайтарады.


## Examples

### Example #1
625 санының жұп сан екенін тексеру.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
82 санының жұп сан екенін тексеру.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
