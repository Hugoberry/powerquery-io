---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

Odstrani podatke o časovnem pasu iz dane vrednosti &#34;datetimezone&#34;.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

Vrne vrednost "#datetime" iz <code>dateTimeZone</code>, pri čemer so odstranjeni podatki o časovnem pasu.


## Examples

### Example #1 
Odstranite podatke o časovnem pasu iz vrednosti &#34;#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0)&#34;.
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
