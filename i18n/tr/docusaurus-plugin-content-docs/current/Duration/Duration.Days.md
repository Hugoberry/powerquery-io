---
title: Duration.Days
---

# Duration.Days


## Description

Sürenin gün kısmını döndürür.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

<code>duration</code> için gün kısmını döndürür


## Examples

### Example #1 
İki tarih arasındaki gün sayısını ayıklar.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
