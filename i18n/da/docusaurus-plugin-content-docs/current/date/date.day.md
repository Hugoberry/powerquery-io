---
title: Date.Day
---

# Date.Day


Returnerer dagskomponenten.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Returnerer dagskomponenten for en værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som dagskomponenten er hentet fra.</li>      </ul>


## Examples

### Example #1 
Hent dagskomponenten for en værdi af typen &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; eller &lt;code&gt;datetimezone&lt;/code&gt;, som repræsenterer datoen og klokkeslættet 14-05-2011, 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
