---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής Time.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής Time <code>time</code> που δόθηκε. <ul>        <li><code>time</code>: Μια τιμή της <code>time</code> για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.</li>      </ul>


## Examples

### Example #1 
Μετατρέψτε την τιμή &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; σε μια εγγραφή που περιέχει τιμές ώρας.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
