---
title: Byte.From
---

# Byte.From


指定された値から 8 ビット整数を作成します。


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

指定された <code>value</code> から 8 ビット整数の <code>number</code> 値を返します。指定された <code>value</code> が <code>null</code> である場合、<code>Byte.From</code> は <code>null</code> を返します。指定された <code>value</code> が 8 ビット整数の範囲内の <code>number</code> で、小数部がない場合には、<code>value</code> が返されます。小数部がある場合には、指定されている端数処理モードで数値が端数処理されます。既定の端数処理モードは <code>RoundingMode.ToEven</code> です。<code>value</code> がそれ以外の型である場合には、<code>Number.FromText</code> を使用して <code>number</code> 値に変換されます。利用可能な端数処理モードについては、<code>Number.Round</code> をご覧ください。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; の 8 ビット整数 &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt; を使用して、&lt;code&gt;&#34;4.5&#34;&lt;/code&gt; の 8 ビット整数 &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
