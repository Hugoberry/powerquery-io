---
title: Value.Type
---

# Value.Type


Returnează tipul valorii date.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Returnează tipul valorii date.

-   `value`: Valoarea al cărei tip este returnat.


## Examples

### Example #1
Returnați tipul numărului specificat.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Returnați tipul datei specificate.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Returnați tipul înregistrării specificate.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
