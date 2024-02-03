---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Προσθέτει τις καθορισμένες εβδομάδες στην ημερομηνία.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Επιστρέφει το αποτέλεσμα της <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> μετά την πρόσθεση <code>numberOfWeeks</code> εβδομάδων στην τιμή <code>dateTime</code> της <code>datetime</code>.      <ul>      <li><code>dateTime</code>: Η τιμή <code>date</code>, <code>datetime</code> ή <code>datetimezone</code> στην οποία προστίθενται εβδομάδες.</li>      <li><code>numberOfWeeks</code>: Ο αριθμός των εβδομάδων που θα προστεθούν.</li>      </ul>


## Examples

### Example #1 
Προσθέτει 2 εβδομάδες στην &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ή &lt;code&gt;datetimezone&lt;/code&gt; αναπαριστώντας την ημερομηνία 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
