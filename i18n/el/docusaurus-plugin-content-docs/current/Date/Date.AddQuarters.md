---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Προσθέτει τα καθορισμένα τρίμηνα στην ημερομηνία.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Επιστρέφει το αποτέλεσμα της <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> μετά την πρόσθεση <code>numberOfQuarters</code> τριμήνων στην τιμή <code>dateTime</code> της <code>datetime</code>.      <ul>      <li><code>dateTime</code>: Η τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> στην οποία προστίθενται τρίμηνα.</li>      <li><code>numberOfQuarters</code>: Ο αριθμός των τριμήνων που θα προστεθούν.</li>      </ul>


## Examples

### Example #1 
Προσθέτει 1 τρίμηνο στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
