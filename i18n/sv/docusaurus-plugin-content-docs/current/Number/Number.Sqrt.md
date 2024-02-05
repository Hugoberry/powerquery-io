---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Returnerar kvadratroten ur talet.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Returnerar kvadratroten ur <code>number</code>.    Om <code>number</code> är null returnerar <code>Number.Sqrt</code> null. Om det är ett negativt värde returneras <code>Number.NaN</code> (inte ett tal).


## Examples

### Example #1 
Hitta kvadratroten ur 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Hitta kvadratroten ur 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
