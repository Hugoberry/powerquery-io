---
title: Duration.Hours
---

# Duration.Hours


## Description

Pateikia trukmės valandų dalį.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Pateikiama <code>duration</code>valandų dalis.


## Examples

### Example #1 
Išskleiskite valandas iš trukmės reikšmės.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
