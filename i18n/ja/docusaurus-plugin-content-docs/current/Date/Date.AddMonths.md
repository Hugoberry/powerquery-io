---
title: Date.AddMonths
---

# Date.AddMonths


## Description

指定された月を日付に追加します。


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

<code>datetime</code> 値 <code>dateTime</code> に <code>numberOfMonths</code> か月を追加した結果の <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> を返します。      <ul>        <li><code>dateTime</code>: 月が追加される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>        <li><code>numberOfMonths</code>: 追加する月の数。</li>      </ul>


## Examples

### Example #1 
日付 5/14/2011 を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 5 か月を追加します。
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
日付と時刻 5/14/2011 08:15:22 AM を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 18 か月を追加します。
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
