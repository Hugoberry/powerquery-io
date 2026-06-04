---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Substitúe os valores dentro da entrada fornecida.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Substitúe o valor `old` dentro do `value` orixinal co valor `new`. Esta función de substitución pódese utilizar en `List.ReplaceValue` e `Table.ReplaceValue`.


## Examples

### Example #1
Substituír o valor 11 co valor 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
