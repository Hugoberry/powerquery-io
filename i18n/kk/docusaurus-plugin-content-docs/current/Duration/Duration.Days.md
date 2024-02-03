---
title: Duration.Days
---

# Duration.Days


## Description

Ұзақтықтың күндер бөлігін қайтарады.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

<code>duration</code> күндер бөлігін қайтарады.


## Examples

### Example #1 
Екі күн арасындағы күндер санын шығарып алады.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
