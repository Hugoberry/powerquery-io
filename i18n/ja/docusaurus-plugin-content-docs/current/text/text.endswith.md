---
title: Text.EndsWith
---

# Text.EndsWith


テキストが指定された値で終わるかどうかを示します。


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

与えられたテキスト (`text`) が指定された値 "`substring`" で終わるかどうかを示します。表示では大文字と小文字が区別されます。

`comparer` は、比較を制御するために使用する `Comparer` です。比較関数を使用すると、大文字小文字を区別しない比較、およびカルチャとロケールに対応した比較を行えます。

命令文の中で以下の標準で用意された比較関数を使用できます:

-   `Comparer.Ordinal`: 完全一致の順次比較を行います
-   `Comparer.OrdinalIgnoreCase`: 完全一致の順次比較 (大文字小文字を区別しない) を行います
-   `Comparer.FromCulture`: カルチャに対応した比較を行います


## Examples

### Example #1
"Hello, World" が "world" で終わるかどうかを調べます。
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
"Hello, World" が "World" で終わるかどうかを調べます。
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
