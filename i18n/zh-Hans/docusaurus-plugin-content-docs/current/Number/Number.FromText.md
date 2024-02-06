---
title: Number.FromText
---

# Number.FromText


从通用文本格式(&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;)创建数。


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

从给定的文本值 <code>text</code> 返回 <code>number</code> 值。 <ul>  <li><code>text</code>: 数值的文本表示形式。表示形式必须采用通用数字格式，例如 "15"、"3,423.10" 或 "5.0E-10"。</li>  <li><code>culture</code>: 控制 <code>text</code> 的解释方式的可选区域性(例如 "en-US")。</li> </ul>


## Examples

### Example #1 
获取 &lt;code&gt;&#34;4&#34;&lt;/code&gt; 的数值。
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
获取 &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; 的数值。
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
