---
title: Number.IsNaN
---

# Number.IsNaN


Navodi da li vrednost nije broj.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Navodi da li vrednost nije broj. Vraća `true` ako je `number` ekvivalentno vrednosti `Number.NaN`, a `false` ako nije.


## Examples

### Example #1
Provera da li 0 podeljeno sa 0 nije broj.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Provera da li 1 podeljeno sa 0 nije broj.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
