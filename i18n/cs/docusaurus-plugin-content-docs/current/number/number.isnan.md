---
title: Number.IsNaN
---

# Number.IsNaN


Značí, zda je hodnota typu NaN (není číslo).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Značí, zda je hodnota typu NaN (není číslo). Pokud hodnota `number` odpovídá výsledku volání funkce `Number.NaN`, vrátí hodnotu `true`, jinak vrátí hodnotu `false`.


## Examples

### Example #1
Zjistí, zda je výsledkem dělení hodnoty 0 hodnotou 0 hodnota typu NaN (není číslo).
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Zjistí, zda je výsledkem dělení hodnoty 1 hodnotou 0 hodnota typu NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
