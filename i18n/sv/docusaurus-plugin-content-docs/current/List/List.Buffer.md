---
title: List.Buffer
---

# List.Buffer


## Description

Buffrar en lista.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Buffrar listan <code>list</code> i minnet. Resultatet från det här anropet är en stabil lista.


## Examples

### Example #1 
Skapa en stabil kopia av listan \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
