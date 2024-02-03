---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Ilmaisee, onko tämä päivämäärä karkausvuotena.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Ilmaisee, onko annettu datetime-arvo <code>dateTime</code> karkausvuotena. <ul>        <li><code>dateTime</code>: laskettava <code>date</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvo.</li>      </ul>


## Examples

### Example #1 
Selvitä, onko vuosi 2012 kohteen &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; ilmaisemana karkausvuosi.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
