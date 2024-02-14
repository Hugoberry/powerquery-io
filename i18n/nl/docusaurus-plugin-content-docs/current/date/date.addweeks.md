---
title: Date.AddWeeks
---

# Date.AddWeeks


Voegt de opgegeven weken toe aan de datum.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Retourneert het resultaat van <code>date</code>, <code>datetime</code> of <code>datetimezone</code> dat volgt uit het toevoegen van <code>numberOfWeeks</code> weken aan de <code>datetime</code>waarde <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: de waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code> waaraan weken worden toegevoegd.</li>      <li><code>numberOfWeeks</code>: het aantal weken dat u wilt toevoegen.</li>      </ul>


## Examples

### Example #1 
2 weken aan de waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; toevoegen die de waarde 14/5/2011 vertegenwoordigt.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
