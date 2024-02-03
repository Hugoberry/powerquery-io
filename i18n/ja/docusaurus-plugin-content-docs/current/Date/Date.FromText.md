---
title: Date.FromText
---

# Date.FromText


## Description

現地、世界共通、カスタムの日付の形式から日付を作成します。


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

テキスト形式の表記 <code>text</code> から <code>date</code> 値を作成します。省略可能な <code>record</code> パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。<code>record</code> には、次のフィールドを含めることができます:<ul>   <li><code>Format</code>: 使用する形式を示す <code>text</code> 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、<code>null</code> を指定すると、ベスト エフォートで日付が解析されます。</li>   <li><code>Culture</code>: <code>Format</code> が null でない場合、<code>Culture</code> が一部の書式指定子を制御します。たとえば、<code>"en-US"</code> で <code>"MMM"</code> は <code>"Jan"、"Feb"、"Mar"、...</code> ですが、<code>"ru-RU"</code> では <code>"MMM"</code> は <code>"янв"、"фев"、"мар"、...</code> です。<code>Format</code> が <code>null</code> の場合、<code>Culture</code> が使用する既定の形式を制御します。<code>Culture</code> が <code>null</code> または省略される場合、<code>Culture.Current</code> が使用されます。</li></ul>従来のワークフローをサポートするため、<code>options</code> をテキスト値にすることもできます。この場合、<code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> の場合と動作が同じになります。


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; を &lt;code&gt;date&lt;/code&gt; 値に変換します。
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
イスラム暦の 1400 年の開始に対応するグレゴリオ暦の日付を探します。
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
