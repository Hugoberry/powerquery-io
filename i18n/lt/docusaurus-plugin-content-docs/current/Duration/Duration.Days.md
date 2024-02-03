---
title: Duration.Days
---

# Duration.Days


## Description

Pateikia trukmės dienų dalį.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Pateikia <code>duration</code>dienų dalį.


## Examples

### Example #1 
Išskleiskite dienų skaičių tarp dviejų datų.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
