---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Voegt de opgegeven kwartalen toe aan de datum.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Retourneert het resultaat van <code>date</code>, <code>datetime</code> of <code>datetimezone</code> dat volgt uit het toevoegen van <code>numberOfQuarters</code> kwartalen aan de <code>datetime</code>waarde <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: de waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code> waaraan kwartalen worden toegevoegd.</li>      <li><code>numberOfQuarters</code>: het aantal kwartalen dat u wilt toevoegen.</li>      </ul>


## Examples

### Example #1 
1 kwartaal aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
