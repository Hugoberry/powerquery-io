---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Sağlanan girdideki değerleri değiştirir.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Asıl <code>value</code> içindeki <code>old</code> değerini <code>new</code> değeri ile değiştirir. Bu değiştirici işlevi <code>List.ReplaceValue</code> ve <code>Table.ReplaceValue</code> içinde kullanılabilir.


## Examples

### Example #1 
11 değerini 10 değeri ile değiştirir.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
