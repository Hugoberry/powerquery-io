---
title: Record.ToList
---

# Record.ToList


## Description

Returnerer en liste over værdier, der indeholder feltværdierne fra inputposten.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Returnerer en liste over værdier, der indeholder feltværdierne fra inputtet <code>record</code>.


## Examples

### Example #1 
Udtræk feltværdierne fra en post.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
