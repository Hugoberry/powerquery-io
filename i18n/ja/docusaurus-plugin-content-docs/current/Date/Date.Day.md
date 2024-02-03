---
title: Date.Day
---

# Date.Day


## Description

日付部分を返します。


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

<code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値の日付部分を返します。      <ul>        <li><code>dateTime</code>: 日付部分を抽出する <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 PM という日付と時刻を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値の日付部分を取得します。
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
