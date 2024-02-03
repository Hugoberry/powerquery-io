---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Ilmaisee, onko arvo muu kuin luku (NaN).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Ilmaisee, onko arvo muu kuin luku (NaN). Palauttaa arvon <code>true</code>, jos <code>number</code> on <code>Number.IsNaN</code>, ja muussa tapauksessa arvon <code>false</code>.


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
