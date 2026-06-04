---
title: Record.ToList
---

# Record.ToList


Кіріс жазбаның өріс мәндерін қамтитын мәндер тізімін қайтарады.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Кіріс `record` ішіндегі өріс мәндерін қамтитын мәндер тізімін қайтарады.


## Examples

### Example #1
Жазбадан өріс мәндерін шығарып алу.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
