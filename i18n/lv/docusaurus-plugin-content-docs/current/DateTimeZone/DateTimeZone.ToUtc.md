---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Pārveido laika joslas komponentu uz UTC laika joslu.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Vērtības datetime <code>dateTimeZone</code> laika joslas informāciju maina uz UTC jeb universālā laika joslas informāciju.    Ja vērtībai <code>dateTimeZone</code> nav laika joslas komponenta, tiek pievienota informācija par UTC laika joslu.


## Examples

### Example #1 
Mainiet informāciju par laika joslu vērtībai #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) uz UTC laika joslu.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
