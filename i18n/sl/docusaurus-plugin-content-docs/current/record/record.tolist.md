---
title: Record.ToList
---

# Record.ToList


Vrne seznam vrednosti, ki vsebuje vrednosti polj iz vhodnega zapisa.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Vrne seznam vrednosti, ki vsebuje vrednosti polj iz vnosa `record`.


## Examples

### Example #1
Izvlecite vrednosti polj iz zapisa.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
