---
title: Date.AddQuarters
---

# Date.AddQuarters


指定された四半期を日付に追加します。


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

<code>datetime</code> 値 <code>dateTime</code> に <code>numberOfQuarters</code> 四半期を追加した結果の <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> を返します。      <ul>      <li><code>dateTime</code>: 四半期が追加される <code>date</code>、<code>datetime</code>、または <code>datetimezone</code> 値。</li>      <li><code>numberOfQuarters</code>: 追加する四半期の数。</li>      </ul>


## Examples

### Example #1 
日付 5/14/2011 を表す &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt;、または &lt;code&gt;datetimezone&lt;/code&gt; 値に 1 四半期を追加します。
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
