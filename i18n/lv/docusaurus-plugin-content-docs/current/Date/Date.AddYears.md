---
title: Date.AddYears
---

# Date.AddYears


## Description

Pievieno datumam norādītos gadus.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Atgriež <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> rezultātu no <code>numberOfYears</code> pievienošanas <code>datetime</code> vērtībai <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kam tiek pievienoti gadi.</li>        <li><code>numberOfYears</code>: pievienojamo gadu skaits.</li>      </ul>


## Examples

### Example #1 
Pievienojiet 4 gadus &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Pievienojiet 10 gadus &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu un laiku 14.05.2011. plkst. 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
