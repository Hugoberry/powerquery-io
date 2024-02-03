---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Binārā vērtība tiek ievietota atmiņas buferī.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Binārā vērtība tiek ievietota atmiņas buferī.  Šī izsaukuma rezultāts ir stabila bināra vērtība, kas nozīmē, ka tai ir noteikts garums un baitu secība.


## Examples

### Example #1 
Izveidot stabilu binārās vērtības versiju.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
