---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

指定された週を日付に追加します。


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

<code>datetime</code> 値 <code>dateTime</code> に <code>numberOfWeeks</code> 週間を追加した結果の <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> を返します。      <ul>      <li><code>dateTime</code>: 週が追加される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      <li><code>numberOfWeeks</code>: 追加する週の数。</li>      </ul>


## Examples

### Example #1 
日付 5/14/2011 を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 2 週間を追加します。
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
