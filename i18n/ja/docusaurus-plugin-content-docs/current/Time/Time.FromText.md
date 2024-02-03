---
title: Time.FromText
---

# Time.FromText


## Description

現地、世界共通、カスタムの時刻の形式から時刻を作成します。


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

テキスト形式の表記 <code>text</code> から <code>time</code> 値を作成します。省略可能な <code>record</code> パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。<code>record</code> には、次のフィールドを含めることができます:<ul>   <li><code>Format</code>: 使用する形式を示す <code>text</code> 値。https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、<code>null</code> を指定すると、ベスト エフォートで日付が解析されます。</li>   <li><code>Culture</code>: <code>Format</code> が null でない場合、<code>Culture</code> が一部の書式指定子を制御します。たとえば、<code>"en-US"</code> で <code>"MMM"</code> は <code>"Jan"、"Feb"、"Mar"、...</code> ですが、<code>"ru-RU"</code> では <code>"MMM"</code> は <code>"янв"、"фев"、"мар"、...</code> です。<code>Format</code> が <code>null</code> の場合、<code>Culture</code> が既定の形式を制御し使用します。<code>Culture</code> が <code>null</code> または省略される場合、<code>Culture.Current</code> が使用されます。</li></ul>従来のワークフローをサポートするため、<code>options</code> をテキスト値にすることもできます。この場合、<code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> の場合と動作が同じになります。


## Examples

### Example #1 
&lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; を時刻値に変換します。
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt; を Time 値に変換します。
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt; を Time 値に変換します。
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
