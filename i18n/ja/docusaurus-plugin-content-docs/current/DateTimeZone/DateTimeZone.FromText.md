---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

現地、世界共通、カスタムの datetimezone 形式から datetimezone を作成します。


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

テキスト形式の表記 <code>text</code> から <code>datetimezone</code> 値を作成します。省略可能な <code>record</code> パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。<code>record</code> には、次のフィールドを含めることができます:<ul>   <li><code>Format</code>: 使用する形式を示す <code>text</code> 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、<code>null</code> を指定すると、ベスト エフォートで日付が解析されます。</li>   <li><code>Culture</code>: <code>Format</code> が null でない場合、<code>Culture</code> が一部の書式指定子を制御します。たとえば、<code>"en-US"</code> で <code>"MMM"</code> は <code>"Jan"、"Feb"、"Mar"、...</code> ですが、<code>"ru-RU"</code> では <code>"MMM"</code> は <code>"янв"、"фев"、"мар"、...</code> です。<code>Format</code> が <code>null</code> の場合、<code>Culture</code> が使用する既定の形式を制御します。<code>Culture</code> が <code>null</code> または省略される場合、<code>Culture.Current</code> が使用されます。</li></ul>従来のワークフローをサポートするため、<code>options</code> をテキスト値にすることもできます。この場合、<code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> の場合と動作が同じになります。


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; を &lt;code&gt;datetimezone&lt;/code&gt; 値に変換します。
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
ISO 8601 を使用して変換します。
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
