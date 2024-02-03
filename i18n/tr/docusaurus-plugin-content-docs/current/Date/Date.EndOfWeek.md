---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Haftanın sonunu döndürür.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code> içeren bulunan haftanın sonunu döndürür.    Bu işlev, bu göreli hesaplama için haftanın ilk günü olarak ayarlamak üzere isteğe bağlı <code>Day</code> <code>firstDayOfWeek</code> değerini alır. Varsayılan değer: <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Kendisinden itibaren haftanın son gününün hesaplandığı <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>        <li><code>firstDayOfWeek</code>: <i>[İsteğe bağlı]</i> Haftanın ilk gününü temsil eden bir <code>Day.Type</code> değeri. Olası değerler: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> ve <code>Day.Saturday.</code>. Varsayılan değer: <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
14.05.2011 için haftanın sonunu alır.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Haftanın ilk günü Pazar olmak üzere 17.05.2011 17:00:00 -7:00 için haftanın sonunu alır.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
