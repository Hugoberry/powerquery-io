---
title: Number.Log
---

# Number.Log


## Description

Trả về logarit của số cho cơ số được chỉ định (mặc định là e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Trả về lô-ga-rít của số <code>number</code> cho cơ số <code>base</code> được chỉ định. Nếu <code>base</code> không được chỉ định, giá trị mặc định sẽ là Number.E.    Nếu <code>number</code> là giá trị null thì <code>Number.Log</code> sẽ trả về giá trị null.


## Examples

### Example #1 
Nhận lô-ga-rít cơ số 10 của 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Nhận lô-ga-rít cơ số e của 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
