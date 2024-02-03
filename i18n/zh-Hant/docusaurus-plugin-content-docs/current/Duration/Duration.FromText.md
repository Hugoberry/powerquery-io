---
title: Duration.FromText
---

# Duration.FromText


## Description

從文字的經過時間格式 (d.h:m:s) 傳回持續時間值。


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

從指定的文字 <code>text</code> 傳回持續時間值。這個函數可剖析下列格式: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (內含所有範圍)<br />        ddd: 天數。<br />        hh: 小時數，介於 0 到 23 之間。<br />        mm: 分鐘數，介於 0 到 59 之間。<br />        ss: 秒數，介於 0 到 59 之間。<br />        ff: 小數秒數，介於 0 到 9999999 之間。


## Examples

### Example #1 
將 &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; 轉換成 &lt;code&gt;duration&lt;/code&gt; 值。
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
