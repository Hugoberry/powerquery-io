---
title: Date.AddDays
---

# Date.AddDays


## Description

Pievieno datumam norādītās dienas.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Atgriež rezultātu <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> no <code>numberOfDays</code> dienu pievienošanas <code>datetime</code> vērtībai <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kam tiek pievienotas dienas.</li>      <li><code>numberOfDays</code>: pievienojamo dienu skaits.</li>      </ul>


## Examples

### Example #1 
Pievienojiet 5 dienas &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
