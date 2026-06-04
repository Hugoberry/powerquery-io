---
title: List.Sum
---

# List.Sum


Тізімдегі элементтердің қосындысын қайтарады.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

`list` тізіміндегі null емес мәндердің қосындысын қайтарады. Тізімде мәні нөл емес мәндер жоқ болса, нөл мәнін қайтарады.


## Examples

### Example #1
`{1, 2, 3}` тізіміндегі сандардың қосындысын анықтау.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
