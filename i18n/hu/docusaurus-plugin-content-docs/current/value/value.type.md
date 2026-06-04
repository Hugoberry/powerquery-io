---
title: Value.Type
---

# Value.Type


A megadott érték típusát adja vissza.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

A megadott érték típusát adja vissza.

-   `value`: A visszaadott típus értéke.


## Examples

### Example #1
A megadott szám típusának visszaadása.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
A megadott dátum típusának visszaadása.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
A megadott rekord típusának visszaadása.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
