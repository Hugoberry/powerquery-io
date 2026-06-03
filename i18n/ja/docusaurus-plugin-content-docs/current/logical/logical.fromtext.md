---
title: Logical.FromText
---

# Logical.FromText


テキスト値 "true" および "false" から論理値を作成します。


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

テキスト値 `text` ("true" または "false") から論理値を作成します。`text` に別の文字列が含まれている場合は、エラーが発生します。テキスト値 `text` では、大文字と小文字が区別されます。


## Examples

### Example #1
テキスト文字列 "true" から論理値を作成します。
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
テキスト文字列 "a" から論理値を作成します。
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
