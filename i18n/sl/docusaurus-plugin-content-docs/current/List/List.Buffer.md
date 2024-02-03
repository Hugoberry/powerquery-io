---
title: List.Buffer
---

# List.Buffer


## Description

Shrani seznam v medpomnilnik.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Shrani seznam <code>list</code> v medpomnilnik. Rezultat tega klica je trajen seznam.


## Examples

### Example #1 
Ustvarite trajno kopijo seznama \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
