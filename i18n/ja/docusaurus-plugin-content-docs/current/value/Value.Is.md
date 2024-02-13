---
title: Value.Is
---

# Value.Is


値が指定された型と互換性があるかどうかを判断します。


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Remarks

値が指定された型と互換性があるかどうかを判断します。これは、M の "is" 演算子に相当しますが、例外として、識別子型の参照 (Number.Type など) を受け入れることができます。


## Examples

### Example #1 
数値がタイプ番号と互換性があるかどうかを判断する 2 つの方法を比較します。
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
