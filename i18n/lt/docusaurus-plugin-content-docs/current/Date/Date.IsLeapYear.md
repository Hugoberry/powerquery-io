---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Rodoma, ar ši data patenka į keliamuosius metus.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Rodoma, ar pateikta datos ir laiko reikšmė <code>dateTime</code> patenka į keliamuosius metus. <ul>        <li><code>dateTime</code>: turi būti įvertinta <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.</li>      </ul>


## Examples

### Example #1 
Nustatykite, ar 2012 metai, nurodyti &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt;, yra keliamieji metai.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
