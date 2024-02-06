---
title: Duration.FromText
---

# Duration.FromText


从文本形式的占用时间格式(d.h:m:s)返回持续时间值。


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

从指定文本 <code>text</code> 返回持续时间值。此函数可分析以下格式: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (包括所有范围)<br />        ddd: 天数。<br />        hh: 小时数，介于 0 到 23 之间。<br />        mm: 分钟数，介于 0 到 59 之间。<br />        ss: 秒数，介于 0 到 59 之间。<br />        ff: 秒的小数部分，介于 0 到 9999999 之间。


## Examples

### Example #1 
将 &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; 转换为 &lt;code&gt;duration&lt;/code&gt; 值。
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
