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

Hiermee wordt een record met de onderdelen van de opgegeven Time-waarde, `time` geretourneerd.

-   `time`: een `time`\-waarde op basis waarvan de record of de onderdelen daarvan moeten worden berekend.


## Examples

### Example #1
De waarde voor de `#time(11, 56, 2)` converteren naar een record die waarden voor tijd bevat.
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
