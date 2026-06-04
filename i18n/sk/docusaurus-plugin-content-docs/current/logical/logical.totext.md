---
title: Logical.ToText
---

# Logical.ToText


Vráti textovú hodnotu True alebo False s danou logickou hodnotou.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Vytvorí textovú hodnotu z logickej hodnoty `logicalValue`, a to buď `true`, alebo `false`. Ak `logicalValue` nie je logická hodnota, vyvolá sa chyba.


## Examples

### Example #1
Vytvorte textovú hodnotu z logickej hodnoty `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
