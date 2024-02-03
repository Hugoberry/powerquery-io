---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Pievieno datumam norādītos mēnešus.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Atgriež <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> rezultātu no <code>numberOfMonths</code> mēnešu pievienošanas <code>datetime</code> vērtībai <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kam tiek pievienoti mēneši.</li>        <li><code>numberOfMonths</code>: pievienojamo mēnešu skaits.</li>      </ul>


## Examples

### Example #1 
Pievienojiet 5 mēnešus &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Pievienojiet 18 mēnešus &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu un laiku 14.05.2011. plkst. 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
