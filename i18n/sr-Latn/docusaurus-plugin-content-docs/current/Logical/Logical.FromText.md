---
title: Logical.FromText
---

# Logical.FromText


## Description

Kreira logičku vrednost od tekstualnih vrednosti „true“ i „false“.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Kreira logičku vrednost od tekstualne vrednosti <code>text</code>, bilo „true“ ili „false“. Ako <code>text</code> sadrži drugačiju nisku, vraća se izuzetak. Tekstualna vrednost <code>text</code> ne razlikuje mala i velika slova.


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
