---
title: Number.IsOdd
---

# Number.IsOdd


Gibt an, ob es sich um einen ungeraden Wert handelt.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Gibt an, ob es sich um einen ungeraden Wert handelt. Gibt `true` zurück, wenn "`number`" eine ungerade Zahl ist. Andernfalls wird `false` zurückgegeben.


## Examples

### Example #1
Überprüft, ob 625 eine ungerade Zahl ist.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Überprüft, ob 82 eine ungerade Zahl ist.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
