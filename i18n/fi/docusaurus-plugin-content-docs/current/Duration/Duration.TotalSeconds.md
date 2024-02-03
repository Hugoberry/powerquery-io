---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Palauttaa tämän keston kattamat sekunnit yhteensä.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> kattamat sekunnit yhteensä.


## Examples

### Example #1 
Selvitä kestoarvon kattamat sekunnit yhteensä.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
