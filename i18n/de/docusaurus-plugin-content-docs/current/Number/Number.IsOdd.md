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

Gibt an, ob es sich um einen ungeraden Wert handelt. Gibt <code>true</code> zurück, wenn "<code>number</code>" eine ungerade Zahl ist. Andernfalls wird <code>false</code> zurückgegeben.


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
