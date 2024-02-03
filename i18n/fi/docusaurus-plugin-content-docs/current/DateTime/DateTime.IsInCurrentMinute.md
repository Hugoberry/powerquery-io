---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Ilmaisee, onko tämä datetime-kohde kuluvan minuutin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> kuluvan minuutin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.      <ul>      <li><code>dateTime</code>: arvioitava <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvalla minuutilla.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
