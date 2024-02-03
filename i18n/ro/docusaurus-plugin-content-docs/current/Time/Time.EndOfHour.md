---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

Returnează sfârșitul orei.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

Returnează sfârșitul orei reprezentat de <code>dateTime</code>, inclusiv secundele fracționare. Informațiile legate de fusul orar sunt păstrate.      <ul>        <li><code>dateTime</code>: o valoare <code>time</code>, <code>datetime</code> sau <code>datetimezone</code>, din care este calculat sfârșitul orei.</li>      </ul>


## Examples

### Example #1 
Obţineţi sfârşitul orei pentru 14/05/2011 17:00:00.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
Obţineţi sfârşitul orei pentru 17/05/2011 17:00:00 – 7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
