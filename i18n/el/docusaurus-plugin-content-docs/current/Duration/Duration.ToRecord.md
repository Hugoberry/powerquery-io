---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της διάρκειας.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής διάρκειας, <code>duration</code>.   <ul>        <li><code>duration</code>: Μια <code>duration</code> από την οποία δημιουργείται η εγγραφή.</li>      </ul>


## Examples

### Example #1 
Μετατρέψτε την παράσταση &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; σε μια εγγραφή με τα μέρη της, όπως οι ώρες, οι ημέρες, τα λεπτά και τα δευτερόλεπτα, εάν υπάρχουν.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
