---
title: Duration.Hours
---

# Duration.Hours


## Description

Egy időtartam órarészét adja vissza.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

A(z) <code>duration</code> órarészét adja vissza.


## Examples

### Example #1 
Az órák számának kinyerése egy időtartamértékből.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
