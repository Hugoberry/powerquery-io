---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Lisää määritetyt viikot päivämäärään.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Palauttaa <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-tuloksen siitä, kun <code>numberOfWeeks</code> viikkoa lisätään <code>datetime</code>-arvoon <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo, johon viikot lisätään.</li>      <li><code>numberOfWeeks</code>: lisättävien viikkojen määrä.</li>      </ul>


## Examples

### Example #1 
Lisää kaksi viikkoa &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- tai &lt;code&gt;datetimezone&lt;/code&gt;-arvoon, joka ilmaisee päivämäärää 14.5.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
