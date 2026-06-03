---
title: Text.StartsWith
---

# Text.StartsWith


テキストが指定された値で始まるかどうかを示します。


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

テキスト値 `text` がテキスト値 `substring` で始まる場合は true を返します。

-   `text`: 検索する `text` 値。
-   `substring`: `text` で検索する substring である `text` 値。
-   `comparer`: *(省略可能)* 比較の制御に使用される `Comparer`。たとえば、`Comparer.OrdinalIgnoreCase` を使用して、大文字と小文字を区別しない検索を実行できます。

`comparer` は、比較を制御するために使用される `Comparer` です。比較子を使用すると、大文字と小文字を区別しない、カルチャとロケールに対応した比較を指定できます。

数式言語では、次の組み込みの比較子を使用できます:

-   `Comparer.Ordinal`: 正確な序数比較を実行するために使用されます。
-   `Comparer.OrdinalIgnoreCase`: 大文字と小文字を区別しない、正確な除数比較を実行するために使用されます。
-   `Comparer.FromCulture`: カルチャ対応の比較を実行するために使用されます。


## Examples

### Example #1
テキスト "Hello, World" がテキスト "hello" で始まるかどうかを調べます。
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
テキスト "Hello, World" がテキスト "Hello" で始まるかどうかを調べます。
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
大文字と小文字を区別せずに、テキスト "Hello, World" がテキスト "hello" で始まるかどうかを調べます。
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
