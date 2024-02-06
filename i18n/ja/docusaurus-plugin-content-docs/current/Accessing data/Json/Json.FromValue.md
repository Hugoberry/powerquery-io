---
title: Json.FromValue
---

# Json.FromValue


指定された値の JSON 表現を生成します。


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

<code>encoding</code> で指定したテキスト コーディングで指定した値 <code>value</code> の JSON 表記を生成します。<code>encoding</code> が省略される場合は UTF8 が使用されます。ビジュアルは次のように表されます:<br /> <ul>        <li>Null、テキストおよび論理の値は対応する JSON 型 として表されます。</li>        <li>数値は JSON内の数値として表されます。ただし、<code>#infinity</code>、<code>-#infinity</code> および <code>#nan</code> は null に変換されます。</li>        <li>リストは JSON アレイとして表されます</li>        <li>レコードは JSON オブジェクトとして表されます</li>        <li>テーブルはオブジェクトのアレイとして表されます</li>        <li>日付、時間、日時、日付タイムゾーンおよび期間は ISO-8601 テキストとして表されます</li>        <li>バイナリ値はエンコードされた Base 64 テキストとして表されます</li>        <li>型と関数はエラーを生成します</li> </ul>


## Examples

### Example #1 
複合値を JSON に変換します。
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
