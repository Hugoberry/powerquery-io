---
title: Date.AddDays
---

# Date.AddDays


指定された日を日付に追加します。


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

<code>datetime</code> 値 <code>dateTime</code> に <code>numberOfDays</code> 日を追加した結果の <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> を返します。      <ul>      <li><code>dateTime</code>: 日が追加される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      <li><code>numberOfDays</code>: 追加する日数。</li>      </ul>


## Examples

### Example #1 
日付 5/14/2011 を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 5 日を追加します。
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
