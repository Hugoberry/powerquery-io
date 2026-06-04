---
title: Logical.ToText
---

# Logical.ToText


Vrátí textovou hodnotu True nebo False na základě předané logické hodnoty.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Vytvoří textovou hodnotu z logické hodnoty `logicalValue` – buď `true`, nebo `false`. Pokud `logicalValue` není logická hodnota, vyvolá se chyba.


## Examples

### Example #1
Vytvoří textovou hodnotu z logické hodnoty `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
