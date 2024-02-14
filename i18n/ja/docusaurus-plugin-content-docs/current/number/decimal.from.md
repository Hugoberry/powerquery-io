---
title: Decimal.From
---

# Decimal.From


指定された値から 10 進数を作成します。


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

指定された <code>value</code> から10 進型の <code>number</code> 値を返します。指定された <code>value</code> が <code>null</code> である場合、<code>Double.From</code> は <code>null</code> を返します。指定された <code>value</code> が 10 進型の範囲内の <code>number</code> である場合、<code>value</code> が返され、それ以外の場合にはエラーが返されます。<code>value</code> がそれ以外の型である場合には、まずは <code>Number.FromText</code> を参照して <code>number</code> 値に変換されます。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&lt;code&gt;&#34;4.5&#34;&lt;/code&gt; の 10 進数の &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
