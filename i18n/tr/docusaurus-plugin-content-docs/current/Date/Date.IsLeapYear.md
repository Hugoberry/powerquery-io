---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

Bu tarihin artık yıl içinde olup olmadığını belirtir.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

<code>dateTime</code> verilen datetime değerinin artık yıl içinde olup olmadığını gösterir. <ul>        <li><code>dateTime</code>: Değerlendirilecek <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; ile temsil edilen 2012 yılının artık yıl olup olmadığını belirler.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
