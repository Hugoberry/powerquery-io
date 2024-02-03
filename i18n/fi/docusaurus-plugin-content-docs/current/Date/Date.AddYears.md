---
title: Date.AddYears
---

# Date.AddYears


## Description

Lisää määritetyt vuodet päivämäärään.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Palauttaa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-tuloksen siitä, kun <code>numberOfYears</code> lisätään <code>datetime</code>-arvoon <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, johon vuodet lisätään.</li>        <li><code>numberOfYears</code>: lisättävien vuosien määrä.</li>      </ul>


## Examples

### Example #1 
Lisää neljä vuotta &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Lisää 10 vuotta &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää ja aikaa 14.5.2011 8.15.22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
