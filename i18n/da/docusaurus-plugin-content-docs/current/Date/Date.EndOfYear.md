---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Returnerer slutningen af året.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Returnerer slutningen af det år, der indeholder <code>dateTime</code>, herunder brøkdele af sekunder. oplysninger om tidszone bevares.      <ul>      <li><code>dateTime</code>: En værdi af typen <code>date</code>, <code>datetime</code> eller <code>datetimezone</code> som årets slutning beregnes ud fra.</li>      </ul>


## Examples

### Example #1 
Hent årets slutning for 14-05-2011, 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Hent timens slutning for 17-05-2011, 17:00:00-7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
