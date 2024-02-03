---
title: Date.Day
---

# Date.Day


## Description

Returnerar dagkomponenten.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Returnerar dagkomponenten i ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde.      <ul>        <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som dagkomponenten extraheras från.</li>      </ul>


## Examples

### Example #1 
Hämta dagkomponenten i ett &lt;code&gt;date&lt;/code&gt;-, &lt;code&gt;datetime&lt;/code&gt;- eller &lt;code&gt;datetimezone&lt;/code&gt;-värde som representerar datumet och tiden motsvarande den 14 maj 2011 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
