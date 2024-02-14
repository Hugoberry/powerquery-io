---
title: Text.Remove
---

# Text.Remove


入力テキスト値から、指定された文字または一連の文字をすべて削除します。


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

<code>removeChars</code> からすべての文字を削除したうえで、テキスト値 <code>text</code> のコピーを返します。


## Examples

### Example #1 
テキスト値から文字 , と ; を削除します。
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
