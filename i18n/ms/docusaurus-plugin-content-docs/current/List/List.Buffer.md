---
title: List.Buffer
---

# List.Buffer


## Description

Menimbal senarai.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Menimbal senarai <code>list</code> dalam memori. Hasil panggilan ini ialah senarai yang stabil.


## Examples

### Example #1 
Cipta salinan stabil bagi senarai \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
