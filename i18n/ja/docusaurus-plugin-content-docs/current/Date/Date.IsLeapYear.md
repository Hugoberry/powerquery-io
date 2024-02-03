---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

この日付がうるう年に該当するかどうかを示します。


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

指定された datetime 値 <code>dateTime</code> がうるう年に該当するかどうかを示します。 <ul>        <li><code>dateTime</code>: 評価される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; によって表されている 2012 年がうるう年かどうかを判断します。
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
