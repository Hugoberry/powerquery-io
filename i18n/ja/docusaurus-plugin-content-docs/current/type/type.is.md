---
title: Type.Is
---

# Type.Is


最初の型の値が 2 番目の型と常に互換性があるかどうかを判断します。


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

`type1` の値が常に `type2` と互換性があるかどうかを決定します。パラメーター `type2` は、プリミティブ型 (または NULL 許容プリミティブ型) 型の値である必要があります。それ以外の場合、この関数の動作は定義されていないため、依存できません。


## Examples

### Example #1
number 型の値を常に any 型として扱うことができるかどうかを判断します。
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
any 型の値を常に number 型として扱うことができるかどうかを判断します。
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
