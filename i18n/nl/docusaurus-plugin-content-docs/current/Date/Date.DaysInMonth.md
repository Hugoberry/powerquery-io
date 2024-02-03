---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Retourneert een getal tussen 28 en 31 dat het aantal dagen in de maand aangeeft.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Hiermee wordt het aantal dagen in de maand geretourneerd in de <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde <code>dateTime</code>. <ul> <li><code>dateTime</code>: een <code>date</code>-, <code>datetime</code>- of <code>datetimezone</code>-waarde waarvoor het aantal dagen in de maand wordt geretourneerd.</li> </ul>


## Examples

### Example #1 
Aantal dagen in de maand december zoals wordt weergegeven met &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
