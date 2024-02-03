---
title: Number.FromText
---

# Number.FromText


## Description

根據通用文字格式 (&#34;15&#34;、&#34;3,423.10&#34;、&#34;5.0E-10&#34;) 建立數字。


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

從指定的文字值 <code>text</code> 傳回 <code>number</code> 值。 <ul>  <li><code>text</code>: 數值的文字表示法。表示法必須採用通用數字格式，例如 "15"、"3,423.10" 或 "5.0E-10"。</li>  <li><code>culture</code>: 控制如何解譯 <code>text</code> 的選用文化特性 (Culture) (例如 "zh-TW")。</li> </ul>


## Examples

### Example #1 
取得 &lt;code&gt;&#34;4&#34;&lt;/code&gt; 的數值。
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
取得 &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; 的數值。
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
