---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

將日期加上指定的週數。


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

傳回將 <code>datetime</code> 值 <code>dateTime</code> 加上 <code>numberOfWeeks</code> 週後所產生的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code>。      <ul>      <li><code>dateTime</code>: 要加上週數的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>numberOfWeeks</code>: 要加上的週數。</li>      </ul>


## Examples

### Example #1 
將代表 5/14/2011 這個日期的 &lt;code&gt;date&lt;/code&gt;、&lt;code&gt;datetime&lt;/code&gt; 或 &lt;code&gt;datetimezone&lt;/code&gt; 值加 2 週。
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
