---
title: Percentage.From
---

# Percentage.From


## Description

指定された値からパーセント値を返します。


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

指定された <code>value</code> から <code>percentage</code> 値を返します。指定された <code>value</code> が <code>null</code> である場合、<code>Percentage.From</code> は <code>null</code> を返します。 指定された <code>value</code> が、後続するパーセント記号のある <code>text</code> である場合、変換された 10 進数が返されます。それ以外の場合、値は <code>Number.From</code> を使って <code>number</code> に変換されます。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; の &lt;code&gt;percentage&lt;/code&gt; 値を取得します。
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
