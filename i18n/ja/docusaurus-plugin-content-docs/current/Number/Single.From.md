---
title: Single.From
---

# Single.From


## Description

指定された値から Single (単精度浮動小数点数) を作成します。


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

指定された <code>value</code> から単精度浮動小数点型の <code>number</code> 値を作成します。指定された <code>value</code> が <code>null</code> である場合、<code>Single.From</code> は <code>null</code> を返します。指定された <code>value</code> が単精度浮動小数点型の範囲内の <code>number</code> である場合、<code>value</code> が返され、それ以外の場合にはエラーが返されます。<code>value</code> がそれ以外の型である場合には、まずは <code>Number.FromText</code> を参照して <code>number</code> 値に変換されます。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&lt;code&gt;&#34;1.5&#34;&lt;/code&gt; の Single &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
