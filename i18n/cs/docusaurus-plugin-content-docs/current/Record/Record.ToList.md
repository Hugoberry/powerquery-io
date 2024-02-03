---
title: Record.ToList
---

# Record.ToList


## Description

Vrátí seznam hodnot obsahující hodnoty polí vstupního záznamu.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Vrátí seznam hodnot obsahující hodnoty polí ze vstupu <code>record</code>.


## Examples

### Example #1 
Extrahuje hodnoty polí ze záznamu.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
