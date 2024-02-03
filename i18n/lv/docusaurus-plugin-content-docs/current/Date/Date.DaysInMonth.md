---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Atgriež skaitli no 28 līdz 31, kas norāda dienu skaitu mēnesī.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Atgriež dienu skaitu mēnesī <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtībā <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība, kam tiek atgriezts dienu skaits mēnesī.</li>      </ul>


## Examples

### Example #1 
Decembra mēneša dienu skaits, norādīts ar &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
