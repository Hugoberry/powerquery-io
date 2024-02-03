---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Pievieno datumam norādītos ceturkšņus.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Atgriež <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> rezultātu no <code>numberOfQuarters</code> ceturkšņu pievienošanas <code>datetime</code> vērtībai <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kam tiek pievienoti ceturkšņi.</li>      <li><code>numberOfQuarters</code>: pievienojamo ceturkšņu skaits.</li>      </ul>


## Examples

### Example #1 
Pievienojiet 1 ceturksni &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; vai &lt;code&gt;datetimezone&lt;/code&gt; vērtībai, kas apzīmē datumu 14.05.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
