---
title: Duration.Hours
---

# Duration.Hours


## Description

Mengembalikan bahagian jam bagi tempoh.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Mengembalikan bahagian jam bagi <code>duration</code>.


## Examples

### Example #1 
Mengekstrak jam daripada nilai tempoh.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
