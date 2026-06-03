---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Vervangt waarden binnen de aangeleverde invoer.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Vervangt de waarde `old` in de oorspronkelijke `value` door de waarde `new`. Deze vervangingsfunctie kan worden gebruikt in `List.ReplaceValue` en `Table.ReplaceValue`.


## Examples

### Example #1
De waarde 11 vervangen door de waarde 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
