---
title: Text.Lower
---

# Text.Lower


すべての文字を小文字に変換します。


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

`text` 内のすべての文字を小文字に変換した結果を返します。省略可能な `culture` を指定することもできます (例: "en-US")。


## Examples

### Example #1
"AbCd" の小文字のバージョンを取得します。
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
