---
title: List.Buffer
---

# List.Buffer


## Description

Buforuje listę.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Buforuje listę <code>list</code> w pamięci. Wynikiem tego wywołania jest stabilna lista.


## Examples

### Example #1 
Utwórz stabilną kopię listy \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
