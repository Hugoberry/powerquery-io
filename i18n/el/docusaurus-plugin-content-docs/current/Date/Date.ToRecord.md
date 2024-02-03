---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Επιστρέφει μια εγγραφή που περιέχει τμήματα της τιμής ημερομηνίας.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα τιμής της ημερομηνίας <code>date</code> που δόθηκε. <ul>        <li><code>date</code>: Μια τιμή της <code>date</code> για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.</li>      </ul>


## Examples

### Example #1 
Μετατρέψτε την τιμή &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; σε μια εγγραφή που περιέχει τμήματα από την τιμή ημερομηνίας.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
