---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Palauttaa tunnin alun.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Palauttaa <code>dateTime</code>edustaman tunnin alun. <code>dateTime</code> on oltava <code>time</code><code>datetime</code> tai <code>datetimezone</code> arvo.


## Examples

### Example #1 
Selvitä tunnin alku kohteelle 10. lokakuuta 2011 klo 8.10.32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
