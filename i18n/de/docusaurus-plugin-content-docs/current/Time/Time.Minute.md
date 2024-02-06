---
title: Time.Minute
---

# Time.Minute


Gibt die Minutenkomponente zurück.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Gibt die Minutenkomponente des angegebenen <code>time</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Werts "<code>dateTime</code>" zurück.


## Examples

### Example #1 
Ermittelt die Minute in &#34;#datetime(2011, 12, 31, 9, 15, 36)&#34;.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
