---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Ersetzt Werte innerhalb der angegebenen Eingabe.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Ersetzt den Wert "<code>old</code>" in der ursprünglichen Eingabe "<code>value</code>" durch den Wert "<code>new</code>". Diese Ersetzungsfunktion kann in <code>List.ReplaceValue</code> und <code>Table.ReplaceValue</code> verwendet werden.


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
