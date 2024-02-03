---
title: Currency.From
---

# Currency.From


## Description

指定された値から通貨の値を返します。


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

指定された <code>value</code> から <code>currency</code> 値を返します。指定された <code>value</code> が <code>null</code> の場合、<code>Currency.From</code> は <code>null</code> を返します。指定された <code>value</code> が通貨の範囲内の <code>number</code> である場合、<code>value</code> の小数部は、小数点以下 4 桁に端数処理返されます。<code>value</code> が他の型の場合、まずは <code>Number.FromText</code> を参照して <code>number</code> 値に変換します。有効な通貨の範囲は、<code>-922,337,203,685,477.5808</code> から <code>922,337,203,685,477.5807</code> です。利用可能な端数処理モードについては、<code>Number.Round</code> をご覧ください。既定は、<code>RoundingMode.ToEven</code> です。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
&lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; の &lt;code&gt;currency&lt;/code&gt; 値を取得します。
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
&lt;code&gt;RoundingMode.Down&lt;/code&gt; を使用して、&lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; の &lt;code&gt;currency&lt;/code&gt; 値を取得します。
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
