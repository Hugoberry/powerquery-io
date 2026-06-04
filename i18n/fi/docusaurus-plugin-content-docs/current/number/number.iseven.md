---
title: Number.IsEven
---

# Number.IsEven


Ilmaisee, onko arvo parillinen.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Ilmaisee, onko arvo `number` parillinen, palauttamalla arvon `true`, jos se on parillinen, ja muussa tapauksessa arvon `false`.


## Examples

### Example #1
Tarkista, onko 625 parillinen luku.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Tarkista, onko 82 parillinen luku.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
