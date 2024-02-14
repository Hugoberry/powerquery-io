---
title: Record.ToList
---

# Record.ToList


Zwraca listę wartości zawierającą wartości pól rekordu wejściowego.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Zwraca listę wartości zawierającą wartości pól z rekordu wejściowego <code>record</code>.


## Examples

### Example #1 
Wyodrębnij wartości pól z rekordu.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
