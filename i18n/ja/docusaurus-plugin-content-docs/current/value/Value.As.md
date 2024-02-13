---
title: Value.As
---

# Value.As


指定された型と互換性がある場合に値を返します。


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Remarks

指定された型と互換性がある場合は値を返します。これは、M の "is" 演算子に相当しますが、例外として、識別子型の参照 (Number.Type など) を受け入れることができます。


## Examples

### Example #1 
数値を数値にキャストします。
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
テキスト値を数値にキャストしようとしています。
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
