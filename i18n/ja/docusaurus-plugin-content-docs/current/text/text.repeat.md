---
title: Text.Repeat
---

# Text.Repeat


指定の回数繰り返された入力テキストで構成されるテキスト値を返します。


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

`count` 回繰り返された入力テキスト `text` で構成されるテキスト値を返します。


## Examples

### Example #1
テキスト "a" を 5 回繰り返します。
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
テキスト "helloworld" を 3 回繰り返します。
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
