---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

月の日数を表す 28 ～ 31 の数値を返します。


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

<code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値 <code>dateTime</code> での月の日数を返します。 <ul>        <li><code>dateTime</code>: 月の日数が返される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; によって表される 12 月の日数です。
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
