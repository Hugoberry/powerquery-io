---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Ersetzt Werte innerhalb der angegebenen Eingabe.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Ersetzt den Wert "`old`" in der ursprünglichen Eingabe "`value`" durch den Wert "`new`". Diese Ersetzungsfunktion kann in `List.ReplaceValue` und `Table.ReplaceValue` verwendet werden.


## Examples

### Example #1
Ersetzt den Wert 11 durch den Wert 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
