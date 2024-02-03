---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Retourneert het einde van het kwartaal.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Retourneert het einde van het kwartaal dat <code>dateTime</code>bevat. Informatie over de tijdzone blijft behouden. <ul> <li><code>dateTime</code>: een <code>datum</code>, <code>datum/tijd</code> of <code>datum/tijdzone</code> waarmee het einde van het kwartaal wordt berekend.</li> </ul>


## Examples

### Example #1 
Het einde van het kwartaal zoeken voor 10 oktober, 2011, 8:00 uur.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
