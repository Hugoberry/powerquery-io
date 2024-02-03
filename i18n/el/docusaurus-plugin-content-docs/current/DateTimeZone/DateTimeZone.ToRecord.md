---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetimezone <code>dateTimeZone</code> που δόθηκε. <ul>        <li><code>dateTimeZone</code>: Μια τιμή <code>datetimezone</code> για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.</li>      </ul>


## Examples

### Example #1 
Μετατρέψτε την τιμή &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; σε μια εγγραφή που περιέχει τις τιμές &#34;Ημερομηνία&#34;, &#34;Ώρα&#34; και &#34;Ζώνη&#34;.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
