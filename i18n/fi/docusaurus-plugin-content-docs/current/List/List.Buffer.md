---
title: List.Buffer
---

# List.Buffer


## Description

Puskuroi luettelon.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Puskuroi luettelon <code>list</code> muistiin. Tämän kutsun tulos on vakaa luettelo.


## Examples

### Example #1 
Luo vakaa kopio luettelosta \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
