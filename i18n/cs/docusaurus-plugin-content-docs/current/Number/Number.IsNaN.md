---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Značí, zda je hodnota typu NaN (není číslo).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Značí, zda je hodnota typu NaN (není číslo). Pokud hodnota <code>number</code> odpovídá výsledku volání funkce <code>Number.IsNaN</code>, vrátí hodnotu <code>true</code>. Jinak vrátí hodnotu <code>false</code>.


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
