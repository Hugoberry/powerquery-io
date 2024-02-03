---
title: Record.ToList
---

# Record.ToList


## Description

Vráti zoznam hodnôt obsahujúci hodnoty polí vstupného záznamu.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Vráti zoznam hodnôt obsahujúci hodnoty polí zo vstupu <code>record</code>.


## Examples

### Example #1 
Extrahujte hodnoty polí zo záznamu.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
