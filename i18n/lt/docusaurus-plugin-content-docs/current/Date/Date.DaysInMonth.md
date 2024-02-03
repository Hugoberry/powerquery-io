---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Pateikiamas skaičius nuo 28 iki 31, rodantis mėnesio dienų skaičių.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Mėnesio dienų skaičius pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmėje <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, kurios mėnesio dienų skaičius pateikiamas.</li>      </ul>


## Examples

### Example #1 
Gruodžio dienų skaičius, pateikiamas &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
