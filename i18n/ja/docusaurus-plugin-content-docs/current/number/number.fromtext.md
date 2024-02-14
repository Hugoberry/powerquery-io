---
title: Number.FromText
---

# Number.FromText


一般的なテキスト形式 (&#34;15&#34;、&#34;3,423.10&#34;、&#34;5.0E-10&#34;) から数値を作成します。


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

指定されたテキスト値 <code>text</code> から <code>number</code> 値を返します。 <ul>  <li><code>text</code>: 数値のテキスト形式の表記。この表記は、一般的な数値形式 ("15"、"3,423.10"、"5.0E-10" など) である必要があります。</li>  <li><code>culture</code>: <code>text</code> を解釈する方法を制御する省略可能なカルチャ (例: "en-US")。</li> </ul>


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; の数値を取得します。
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; の数値を取得します。
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
