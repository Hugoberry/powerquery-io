---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Returnerer slutningen af kvartalet.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Returnerer slutningen af det kvartal, der indeholder <code>dateTime</code>. Oplysninger om tidszone bevares.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code>, som slutningen af kvartalet beregnes ud fra.</li>      </ul>


## Examples

### Example #1 
Find slutningen af kvartalet for 10. oktober 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
