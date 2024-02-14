---
title: Text.Combine
---

# Text.Combine


一連のテキスト値を 1 つのテキスト値に連結します。


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

テキスト値のリスト (<code>texts</code>) を 1 つのテキスト値に結合した結果を返します。<code>texts</code> の中に <code>null</code> 値がある場合、それらはすべて無視されます。    最終的な結合テキスト内で使用する <code>separator</code> を指定できます (省略可能)。


## Examples

### Example #1 
テキスト値 &#34;Seattle&#34; と &#34;WA&#34; を結合します。
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
テキスト値 &#34;Seattle&#34; と &#34;WA&#34; をコンマとスペースで区切って結合します。
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
値 &#34;Seattle&#34;、&lt;code&gt;null&lt;/code&gt;、&#34;WA&#34; の値をコンマとスペースで区切って結合します (&lt;code&gt;null&lt;/code&gt; は無視されることに注意してください)。
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
