---
title: Type.Is
---

# Type.Is


## Description

決定第一個類型的值是否與第二個類型始終相容。


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

決定 <code>type1</code> 的值是否與 <code>type2</code> 始終相容。


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
