---
title: List.Buffer
---

# List.Buffer


## Description

Gemmer en liste i buffer.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Bufferlagrer listen <code>list</code> i hukommelsen. Resultatet af dette kald er en stabil liste.


## Examples

### Example #1 
Opret en stabil kopi af listen \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
