---
title: Text.PositionOf
---

# Text.PositionOf


値の最初の位置を返します (見つからない場合は -1)。


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

`text` で見つかったテキスト値 `substring` の指定された出現位置を返します。 選択可能なパラメーター `occurrence` を使用すると、返される出現位置 (既定では最初の出現) を指定できます。 `substring`が見つからなかった場合は -1 を返します。

`comparer`は、比較を制御するために使用する `Comparer` です。比較関数を使用すると、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行えます。

命令文で以下の標準で用意された比較関数を使用できます。

-   `Comparer.Ordinal`: 完全一致の順次比較を行います
-   `Comparer.OrdinalIgnoreCase`: 完全一致の順次比較 (大文字小文字を区別しない) を行います
-   `Comparer.FromCulture`: カルチャに対応した比較を行います


## Examples

### Example #1
テキスト "Hello, World! Hello, World!" 内での "World" の最初の出現位置を取得します。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
"Hello, World!Hello, World!" 内での "World" の最後の出現位置を取得します。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
