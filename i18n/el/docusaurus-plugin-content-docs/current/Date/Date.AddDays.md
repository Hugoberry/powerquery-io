---
title: Date.AddDays
---

# Date.AddDays


## Description

Προσθέτει τις καθορισμένες ημέρες στην ημερομηνία.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Επιστρέφει το αποτέλεσμα της <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> μετά την πρόσθεση <code>numberOfDays</code> ημερών στην τιμή <code>dateTime</code> της <code>datetime</code>.      <ul>      <li><code>dateTime</code>: Η τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> στην οποία προστίθενται ημέρες.</li>      <li><code>numberOfDays</code>: Ο αριθμός των ημερών που θα προστεθούν.</li>      </ul>


## Examples

### Example #1 
Προσθέτει 5 ημέρες στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
