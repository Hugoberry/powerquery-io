---
title: Record.ToList
---

# Record.ToList


## Description

Returnează o listă de valori ce conţine valorile pentru câmp ale înregistrării introduse.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Returnează o listă de valori ce conţine valorile pentru câmp din datele introduse <code>record</code>.


## Examples

### Example #1 
Extrageţi valorile pentru câmp dintr-o înregistrare.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
