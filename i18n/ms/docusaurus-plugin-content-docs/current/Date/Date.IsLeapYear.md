---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Menunjukkan sama ada tarikh ini jatuh dalam tahun lompat.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

Menunjukkan sama ada nilai datetime yang ditentukan bagi <code>dateTime</code> ialah tahun lompat.  <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk dinilaikan.</li>      </ul>


## Examples

### Example #1 
Tentukan sama ada tahun 2012, seperti yang diwakili oleh &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; ialah tahun lompat.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
