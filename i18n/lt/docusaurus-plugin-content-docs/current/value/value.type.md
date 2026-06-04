---
title: Value.Type
---

# Value.Type


Pateikiamas nurodytos reikšmės tipas.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Pateikiamas nurodytos reikšmės tipas.

-   `value`: Reikšmė, kurios tipas pateikiamas.


## Examples

### Example #1
Pateikti nurodyto skaičiaus tipą.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Pateikti nurodytos datos tipą.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Pateikti nurodyto įrašo tipą.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
