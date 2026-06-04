---
title: Value.Type
---

# Value.Type


Palauttaa annetun arvon tyypin.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Palauttaa annetun arvon tyypin.

-   `value`: Arvo, jonka tyyppi palautetaan.


## Examples

### Example #1
Palauta määritetyn luvun tyyppi.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Palauta määritetyn päivämäärän tyyppi.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Palauta määritetyn tietueen tyyppi.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
