---
title: Logical.FromText
---

# Logical.FromText


Kreira logičku vrednost od tekstualnih vrednosti „true“ i „false“.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Kreira logičku vrednost od tekstualne vrednosti `text`, bilo „true“ ili „false“. Ako `text` sadrži drugačiju nisku, prijavljuje se greška. Tekstualna vrednost `text` ne razlikuje mala i velika slova.


## Examples

### Example #1
Kreiranje logičke vrednosti od tekstualne niske „true“.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Kreiranje logičke vrednosti od tekstualne niske „a“.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
