---
title: Type.Is
---

# Type.Is


決定第一個類型的值是否與第二個類型始終相容。


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

決定 `type1` 的值是否一律與 `type2` 相容。參數 `type2` 應為基本 (或可為 null 的基本) 類型值。否則，此函數的行為未定義，不應影響此功能。


## Examples

### Example #1
判斷類型數值的值是否也會永遠也被視為類型 Any。
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
判斷類型 Any 的值是否也會永遠也被視為類型數值。
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
