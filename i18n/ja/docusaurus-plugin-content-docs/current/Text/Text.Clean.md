---
title: Text.Clean
---

# Text.Clean


制御文字をすべて削除したテキスト値を返します。


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

<code>text</code> の制御文字をすべて削除した 1 つテキスト値を返します。


## Examples

### Example #1 
テキスト値から改行などの制御文字を削除します。
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
