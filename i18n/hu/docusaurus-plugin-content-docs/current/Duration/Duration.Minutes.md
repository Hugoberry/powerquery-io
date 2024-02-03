---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Egy időtartam percrészét adja vissza.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

A(z) <code>duration</code> percrészét adja vissza.


## Examples

### Example #1 
A percek számának kinyerése egy időtartamértékből.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
