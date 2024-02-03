---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetime <code>dateTime</code> που δόθηκε. <ul>        <li><code>dateTime</code>: Μια τιμή <code>datetime</code> για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.</li>      </ul>


## Examples

### Example #1 
Μετατρέψτε την τιμή &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; σε μια εγγραφή που περιέχει τις τιμές &#34;Ημερομηνία&#34; και &#34;Ώρα&#34;.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
