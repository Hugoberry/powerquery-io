---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Pievieno datumam norādītās nedēļas.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Atgriež <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> rezultātu no <code>numberOfWeeks</code> nedēļu pievienošanas <code>datetime</code> vērtībai <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kam tiek pievienotas nedēļas.</li>      <li><code>numberOfWeeks</code>: pievienojamo nedēļu skaits.</li>      </ul>


## Examples

### Example #1 
Pievienot 2 nedēļas &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
