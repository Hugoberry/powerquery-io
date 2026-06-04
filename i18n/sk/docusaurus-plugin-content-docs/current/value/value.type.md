---
title: Value.Type
---

# Value.Type


Vráti typ danej hodnoty.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Vráti typ danej hodnoty.

-   `value`: Hodnota, ktorej typ sa vráti.


## Examples

### Example #1
Vráti typ zadaného čísla.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Vráti typ zadaného dátumu.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Vráti typ zadaného záznamu.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
