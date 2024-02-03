---
title: Time.ToText
---

# Time.ToText


## Description

時刻値のテキスト形式の表記を返します。


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>time</code> のテキスト形式の表記を返します。省略可能な <code>record</code> パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。<code>culture</code> は従来のワークフローでのみ使用されます。<code>record</code> には、次のフィールドを含めることができます:<ul>   <li><code>Format</code>: 使用する形式を示す <code>text</code> 値。https://go.microsoft.com/fwlink/?linkid=2180104 と https://go.microsoft.com/fwlink/?linkid=2180105 を参照してください。このフィールドを省略するか、<code>null</code> を指定すると、<code>Culture</code> によって定義された既定値を使用して日付の形式が設定されます。</li>   <li><code>Culture</code>: <code>Format</code> が null でない場合、<code>Culture</code> が一部の書式指定子を制御します。たとえば、<code>"en-US"</code> では、<code>"tt"</code> は <code>"AM" or "PM"</code>ですが、<code>"ar-EG"</code> <code>"tt"</code> では <code>"ص" or "م"</code> です。<code>Format</code> が <code>null</code> の場合、<code>Culture</code> が既定の形式を制御し使用します。<code>Culture</code> が <code>null</code> または省略される場合、<code>Culture.Current</code> が使用されます。</li></ul>従来のワークフローをサポートするため、<code>options</code> と <code>culture</code> をテキスト値にすることもできます。この場合、<code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> の場合と動作が同じになります。


## Examples

### Example #1 
&lt;code&gt;#time(01, 30, 25)&lt;/code&gt; を &lt;code&gt;text&lt;/code&gt; 値に変換します。&lt;i&gt;結果出力が現在のカルチャに応じて異なる場合があります。&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
カスタム形式とドイツ語のカルチャを使用して変換します。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
標準時間形式を使用して変換します。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
