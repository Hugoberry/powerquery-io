---
title: Number.From
---

# Number.From


指定された値から数値を作成します。


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

指定された <code>value</code> から <code>number</code> 値を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。指定された <code>value</code> が <code>null</code> の場合、<code>Number.From</code> は <code>null</code> を返します。指定された <code>value</code> が <code>number</code> の場合、<code>value</code> が返されます。次の型の値を <code>number</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト形式の表記からの <code>number</code> 値。一般的なテキスト形式が処理の対象になります ("15"、"3,423.10"、"5.0E-10")。詳細については <code>Number.FromText</code> を参照してください。</li>        <li><code>logical</code>: <code>true</code> の場合は 1、<code>false</code> の場合は 0。</li>        <li><code>datetime</code>: 相当する OLE オートメーション日付を含む倍精度浮動小数点数。</li>        <li><code>datetimezone</code>: <code>value</code> のローカルな日付および時刻に相当する OLE オートメーション日付を含む倍精度浮動小数点数。</li>        <li><code>date</code>: 相当する OLE オートメーション日付を含む倍精度浮動小数点数。</li>        <li><code>time</code>: 小数の日数で表されます。</li>        <li><code>duration</code>: 整数と小数の日数で表されます。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; の &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; の &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; の &lt;code&gt;number&lt;/code&gt; 値を取得します。
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
