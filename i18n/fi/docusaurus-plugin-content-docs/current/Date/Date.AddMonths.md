---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Lisää määritetyt kuukaudet päivämäärään.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Palauttaa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-tuloksen siitä, kun <code>numberOfMonths</code> kuukautta lisätään <code>datetime</code>-arvoon <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, johon kuukaudet lisätään.</li>        <li><code>numberOfMonths</code>: lisättävien kuukausien määrä.</li>      </ul>


## Examples

### Example #1 
Lisää viisi kuukautta &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Lisää 18 kuukautta &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää ja aikaa 14.5.2011 8.15.22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
