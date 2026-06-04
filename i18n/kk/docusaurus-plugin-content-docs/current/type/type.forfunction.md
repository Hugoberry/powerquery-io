---
title: Type.ForFunction
---

# Type.ForFunction


Белгілі бір параметрі бар және түр шектеулерін қайтаратын функцияларды білдіретін түрді қайтарады.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

`signature` бөлімінен `function type`, `ReturnType` және `Parameters` жазбасын және функцияны іске қосу үшін қажет `min` ең кіші аргументтер санын жасайды.


## Examples

### Example #1
X деп аталатын сандық параметрді алатын және санды қайтаратын функция үшін түрді жасайды.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
