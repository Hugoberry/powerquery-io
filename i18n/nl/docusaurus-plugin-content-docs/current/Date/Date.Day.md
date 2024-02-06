---
title: Date.Day
---

# Date.Day


Retourneert het daggedeelte.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Hiermee wordt de dagcomponent van een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde geretourneerd. <ul> <li><code>dateTime</code>: een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde op basis waarvan de dagcomponent wordt geëxtraheerd.</li> </ul>


## Examples

### Example #1 
Het daggedeelte van een waarde voor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; of &lt;code&gt;datetimezone&lt;/code&gt; ophalen die de datum 14/5/2011 en de tijd 05:00:00 PM vertegenwoordigt.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
