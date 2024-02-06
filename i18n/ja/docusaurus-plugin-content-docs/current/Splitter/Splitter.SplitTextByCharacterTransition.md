---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


ある種類の文字を別の種類に移行する処理に応じてテキストをテキストの一覧に分割する関数を返します。\{0} と \{1} のパラメーターは文字の一覧とすることもできますし、文字を取り、true/false を返す関数とすることもできます。


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

ある種類の文字を別の種類に移行する処理に応じてテキストをテキストの一覧に分割する関数を返します。<code>before</code> と <code>after</code> のパラメーターは文字の一覧とすることもできますし、文字を取り、true/false を返す関数とすることもできます。


## Examples

### Example #1 
数字の後に大文字または小文字が存在する度に、入力を分割します。
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
