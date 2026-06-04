---
title: Record.ToList
---

# Record.ToList


A bemeneti rekord mezőértékeit tartalmazó értéklistát ad vissza.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

A bemeneti `record` mezőértékeit tartalmazó értéklistát ad vissza.


## Examples

### Example #1
A mezőértékek kigyűjtése egy rekordból
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
