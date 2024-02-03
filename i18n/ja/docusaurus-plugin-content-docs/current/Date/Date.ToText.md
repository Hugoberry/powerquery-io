---
title: Date.ToText
---

# Date.ToText


## Description

日付値のテキスト形式の表記を返します。


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>date</code> のテキスト形式の表記を返します。省略可能な <code>record</code> パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。<code>culture</code> は従来のワークフローでのみ使用されます。<code>record</code> には、次のフィールドを含めることができます:<ul>   <li><code>Format</code>: 使用する形式を示す <code>text</code> 値。詳細については、https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、<code>null</code> を指定すると、<code>Culture</code> によって定義された既定値を使用して日付の形式が設定されます。</li>   <li><code>Culture</code>: <code>Format</code> が null でない場合、<code>Culture</code> が一部の書式指定子を制御します。たとえば、<code>"en-US"</code> で <code>"MMM"</code> は <code>"Jan"、"Feb"、"Mar"、...</code> ですが、<code>"ru-RU"</code> では <code>"MMM"</code> は <code>"янв"、"фев"、"мар"、...</code> です。<code>Format</code> が <code>null</code> の場合、<code>Culture</code> が使用する既定の形式を制御します。<code>Culture</code> が <code>null</code> または省略される場合、<code>Culture.Current</code> が使用されます。</li></ul>従来のワークフローをサポートするため、<code>options</code> と <code>culture</code> をテキスト値にすることもできます。この場合、<code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> の場合と動作が同じになります。


## Examples

### Example #1 
&lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; を &lt;code&gt;text&lt;/code&gt; 値に変換します。&lt;i&gt;結果出力が現在のカルチャに応じて異なる場合があります。&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
グレゴリオ暦の 2000 年 1 月 1 日に対応するイスラム暦の年を探します。
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
