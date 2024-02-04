---
title: Value.Is
---

# Value.Is


## Description

Bestimmt, ob ein Wert mit dem angegebenen Typ kompatibel ist.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Bestimmt, ob ein Wert mit dem angegebenen Typ kompatibel ist. Dies entspricht dem Operator „is“ in M, mit der Ausnahme, dass er Verweise des Bezeichnertyps wie „Number.Type“ akzeptieren kann.


## Examples

### Example #1 
Vergleichen Sie zwei Möglichkeiten, um festzustellen, ob eine Zahl mit dem Typ „number“ kompatibel ist.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
