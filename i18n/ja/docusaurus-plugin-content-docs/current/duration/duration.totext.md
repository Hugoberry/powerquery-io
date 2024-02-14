---
title: Duration.ToText
---

# Duration.ToText


&#34;d.h:m:s&#34; という形式のテキストを返します。


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

特定の期間の値 <code>duration</code> を "day.hour:mins:sec" 形式のテキスト形式表記で返します。 <ul>        <li><code>duration</code>: テキスト形式表記が計算される<code>期間</code>。</li>  <li><code>format</code>: <i>[省略可能]</i> 推奨されません。NULL 値でない場合はエラーをスローします</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; をテキスト値に変換します。
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
