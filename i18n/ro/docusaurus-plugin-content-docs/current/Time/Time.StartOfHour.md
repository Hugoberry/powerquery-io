---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Returnează începutul orei.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Returnează începutul orei reprezentat de <code>dateTime</code>.    <code>dateTime</code> trebuie să fie o valoare <code>time</code>, <code>datetime</code> sau <code>datetimezone</code>.


## Examples

### Example #1 
Găsiți începutul orei pentru 10 octombrie 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
