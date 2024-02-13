---
title: Date.ToRecord
---

# Date.ToRecord


Retourneert een record die onderdelen van de datumwaarde bevat.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Hiermee wordt een record geretourneerd met de onderdelen van de opgegeven date-waarde, <code>date</code>. <ul> <li><code>date</code>: een <code>date</code>-waarde op basis waarvan de record of de onderdelen daarvan moeten worden berekend.</li> </ul>


## Examples

### Example #1 
De waarde voor de &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; omzetten naar een record die gedeelten van de datumwaarde bevat.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
