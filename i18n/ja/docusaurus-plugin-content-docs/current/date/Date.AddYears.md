---
title: Date.AddYears
---

# Date.AddYears


指定された年を日付に追加します。


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

<code>datetime</code> 値 <code>dateTime</code> に <code>numberOfYears</code> を追加した結果の <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> を返します。      <ul>        <li><code>dateTime</code>: 年が追加される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>        <li><code>numberOfYears</code>: 追加する年の数。</li>      </ul>


## Examples

### Example #1 
日付 5/14/2011 を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 4 年を追加します。
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
日付と時刻 5/14/2011 08:15:22 AM を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 10 年を追加します。
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
