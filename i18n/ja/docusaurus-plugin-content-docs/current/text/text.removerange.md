---
title: Text.RemoveRange
---

# Text.RemoveRange


指定されたオフセットから始まる文字の数を削除します


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

位置 <code>offset</code> からすべての文字を削除したうえで、テキスト値 <code>text</code> のコピーを返します。    省略可能なパラメーター <code>count</code> を使用すると、削除する文字の数を指定できます。<code>count</code> の既定値は 1 です。位置の値は 0 から始まります。


## Examples

### Example #1 
テキスト値 &#34;ABEFC&#34; の位置 2 から 1 文字を削除します。
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
テキスト値 &#34;ABEFC&#34; の位置 2 から 2 文字を削除します。
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
