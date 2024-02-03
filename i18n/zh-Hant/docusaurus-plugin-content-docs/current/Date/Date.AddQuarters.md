---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

將日期加上指定的季數。


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

傳回將 <code>datetime</code> 值 <code>dateTime</code> 加上 <code>numberOfQuarters</code> 季後所產生的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code>。      <ul>      <li><code>dateTime</code>: 要加上季數的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>numberOfQuarters</code>: 要加上的季數。</li>      </ul>


## Examples

### Example #1 
將代表 5/14/2011 這個日期的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值加 1 季。
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
