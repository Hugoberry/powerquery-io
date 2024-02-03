---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Προσθέτει τους καθορισμένους μήνες στην ημερομηνία.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Επιστρέφει το αποτέλεσμα της <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> μετά την πρόσθεση <code>numberOfMonths</code> μηνών στην τιμή <code>dateTime</code> της <code>datetime</code>.      <ul>        <li><code>dateTime</code>: Η τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> στην οποία προστίθενται μήνες.</li>        <li><code>numberOfMonths</code>: Ο αριθμός των μηνών που θα προστεθούν.</li>      </ul>


## Examples

### Example #1 
Προσθέτει 5 μήνες στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Προσθέτει 18 μήνες στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία και ώρα 14/5/2011 08:15:22 π.μ.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
