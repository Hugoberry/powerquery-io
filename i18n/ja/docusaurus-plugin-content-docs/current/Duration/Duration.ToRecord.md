---
title: Duration.ToRecord
---

# Duration.ToRecord


期間の部分を含むレコードを返します。


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

duration 値 <code>duration</code> の部分を含むレコードを返します。  <ul>        <li><code>duration</code>: レコードの作成元になる <code>duration</code>。</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; を、その部分のレコードに変換します。これには、日、時間、分、および秒が含まれます (該当する場合)。
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
