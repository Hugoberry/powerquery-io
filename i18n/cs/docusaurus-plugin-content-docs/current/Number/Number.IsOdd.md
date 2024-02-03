---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Značí, zda je hodnota lichá.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Značí, zda je hodnota lichá. Pokud je hodnota <code>number</code> liché číslo, vrátí hodnotu <code>true</code>. Jinak vrátí hodnotu <code>false</code>.


## Examples

### Example #1 
Zjistí, zda je číslo 625 liché.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda je číslo 82 liché.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
