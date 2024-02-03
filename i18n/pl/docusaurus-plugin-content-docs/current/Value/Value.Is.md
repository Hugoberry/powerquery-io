---
title: Value.Is
---

# Value.Is


## Description

Określa, czy wartość jest zgodna z określonym typem.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Określa, czy wartość jest zgodna z określonym typem. Jest to odpowiednik operatora „is” w M, z wyjątkiem tego, że może akceptować odwołania do typu identyfikatora, takie jak Number.Type.


## Examples

### Example #1 
Porównaj dwa sposoby ustalania, czy liczba jest zgodna z liczbą typów.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
