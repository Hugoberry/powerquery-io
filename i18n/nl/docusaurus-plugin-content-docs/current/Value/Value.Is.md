---
title: Value.Is
---

# Value.Is


## Description

Hiermee wordt bepaald of een waarde compatibel is met het opgegeven type.


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

Hiermee wordt bepaald of een waarde compatibel is met het opgegeven type. Dit is gelijk aan de operator 'is' in M, met de uitzondering dat het id-typeverwijzingen zoals Number.Type kan accepteren.


## Examples

### Example #1 
Vergelijk twee manieren om te bepalen of een getal compatibel is met het type Getal.
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
