---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Navodi da li vrednost nije broj.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Navodi da li vrednost nije broj. Vraća <code>true</code> ako je <code>number</code> ekvivalentno vrednosti <code>Number.IsNaN</code>, a <code>false</code> ako nije.


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
