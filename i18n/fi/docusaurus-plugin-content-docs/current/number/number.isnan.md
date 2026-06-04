---
title: Number.IsNaN
---

# Number.IsNaN


Ilmaisee, onko arvo muu kuin luku (NaN).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Ilmaisee, onko arvo muu kuin luku (NaN). Palauttaa arvon `true`, jos `number` vastaa arvoa `Number.NaN`, ja muussa tapauksessa arvon `false`.


## Examples

### Example #1
Tarkista, onko nolla jaettuna nollalla NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Tarkista, onko 1 jaettuna nollalla NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
