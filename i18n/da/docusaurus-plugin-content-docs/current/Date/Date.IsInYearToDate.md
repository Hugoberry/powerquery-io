---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Angiver, om denne dato indtræffer i løbet af det aktuelle år og er på eller før den aktuelle dag i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Angiver, om den anførte datetime-værdi <code>dateTime</code> indtræffer i løbet af det aktuelle år og er på eller før den aktuelle dag i forhold til den aktuelle dag og det aktuelle klokkeslæt i systemet.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, der skal evalueres.</li>      </ul>


## Examples

### Example #1 
Afgør, om det aktuelle systemklokkeslæt ligger i år til dato.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
