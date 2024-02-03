---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Ilmaisee, onko tämä datetime-arvo kuluvan tunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> kuluvan tunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.      <ul>      <li><code>dateTime</code>: arvioitava <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvalla tunnilla.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
