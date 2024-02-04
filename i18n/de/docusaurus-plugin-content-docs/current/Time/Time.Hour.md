---
title: Time.Hour
---

# Time.Hour


## Description

Gibt die Stundenkomponente zurück.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Gibt die Stundenkomponente des angegebenen <code>time</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Werts "<code>dateTime</code>" zurück.


## Examples

### Example #1 
Ermittelt die Stunde in &#34;#datetime(2011, 12, 31, 9, 15, 36)&#34;.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
