---
title: Date.AddDays
---

# Date.AddDays


## Description

Voegt de opgegeven dagen toe aan de datum.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Retourneert het resultaat van <code>date</code>, <code>datetime</code> of <code>datetimezone</code> dat volgt uit het toevoegen van <code>numberOfDays</code> dagen aan de <code>datetime</code>waarde <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: de waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code> waaraan dagen worden toegevoegd.</li>      <li><code>numberOfDays</code>: het aantal dagen dat u wilt toevoegen.</li>      </ul>


## Examples

### Example #1 
5 dagen aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
