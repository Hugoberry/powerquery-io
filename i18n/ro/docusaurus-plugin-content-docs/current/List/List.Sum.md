---
title: List.Sum
---

# List.Sum


## Description

Returnează suma elementelor din listă.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Returnează suma valorilor care nu sunt null din listă, <code>list</code>.  Returnează null dacă nu există nicio valoare care nu este null în listă.


## Examples

### Example #1 
Găsiţi suma numerelor din lista &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
