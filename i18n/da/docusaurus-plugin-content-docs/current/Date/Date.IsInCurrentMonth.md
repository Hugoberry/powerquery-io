---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Angiver, om denne dato indtræffer i løbet af den aktuelle måned i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af den aktuelle måned i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, der skal evalueres.</li>      </ul>


## Examples

### Example #1 
Afgør, om det aktuelle systemklokkeslæt ligger i den aktuelle måned.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
