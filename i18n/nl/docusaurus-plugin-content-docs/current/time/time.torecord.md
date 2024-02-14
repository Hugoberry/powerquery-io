---
title: Time.ToRecord
---

# Time.ToRecord


Retourneert een record die onderdelen van de tijdwaarde bevat.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Hiermee wordt een record met de onderdelen van de opgegeven Time-waarde, <code>time</code> geretourneerd. <ul> <li><code>time</code>: een <code>time</code>-waarde op basis waarvan de record of de onderdelen daarvan moeten worden berekend.</li> </ul>


## Examples

### Example #1 
De waarde voor de &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; converteren naar een record die waarden voor tijd bevat.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
