---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Белгілі бір параметрі бар және түр шектеулерін қайтаратын функцияларды білдіретін түрді қайтарады.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

<code>signature</code> бөлімінен <code>function type</code>, <code>ReturnType</code> және <code>Parameters</code> жазбасын және функцияны іске қосу үшін қажет <code>min</code> ең кіші аргументтер санын жасайды.


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
