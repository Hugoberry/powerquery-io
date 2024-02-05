---
title: Record.ToList
---

# Record.ToList


## Description

Returnerar en lista med värden som innehåller fältvärdena från indataposten.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Returnerar en lista med värden som innehåller fältvärdena från indataposten <code>record</code>.


## Examples

### Example #1 
Extrahera fältvärdena från en post.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
