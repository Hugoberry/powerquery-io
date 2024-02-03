---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Ilmaisee, onko tämä datetime-kohde kuluvan sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko määritetty datetime-arvo <code>dateTime</code> kuluvan sekunnin aikana järjestelmän nykyisen päivämäärän ja ajan määrittämänä.      <ul>      <li><code>dateTime</code>: arvioitava <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko nykyinen järjestelmän aika kuluvalla sekunnilla.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
