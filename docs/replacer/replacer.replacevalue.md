---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Replaces values within the provided input.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Replaces the <code>old</code> value in the original <code>value</code> with the <code>new</code> value. This replacer function can be used in <code>List.ReplaceValue</code> and <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Replace the value 11 with the value 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
