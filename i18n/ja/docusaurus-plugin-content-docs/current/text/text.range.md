---
title: Text.Range
---

# Text.Range


オフセットで見つかったサブストリングを返します。


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

テキスト `text` のオフセット `offset` で見つかる部分文字列を返します。 オプションのパラメーター `count` を使用すると、返す文字数を指定できます。文字数が足りない場合はエラーが発生します。


## Examples

### Example #1
インデックス 6 で始まるテキスト "Hello World" のサブストリングを調べます。
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
インデックス 6 で始まり、全部で 5 文字になるテキスト "Hello World" のサブストリングを調べます。
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
