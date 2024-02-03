---
title: Logical.FromText
---

# Logical.FromText


## Description

Tworzy wartość logiczną na podstawie wartości tekstowych „true” i „false”.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Tworzy wartość logiczną na podstawie wartości tekstowej <code>text</code> („true” lub „false”). Jeśli parametr <code>text</code> zawiera inny ciąg, jest zwracany wyjątek. W wartości tekstowej <code>text</code> nie jest rozróżniana wielkość znaków.


## Examples

### Example #1 
Utwórz wartość logiczną na podstawie ciągu tekstowego „true”.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Utwórz wartość logiczną na podstawie ciągu tekstowego „a”.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
