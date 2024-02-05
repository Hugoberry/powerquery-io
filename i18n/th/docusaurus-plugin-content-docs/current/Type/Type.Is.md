---
title: Type.Is
---

# Type.Is


## Description

กําหนดว่าค่าของชนิดแรกเข้ากันได้กับชนิดที่สองเสมอหรือไม่


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

กําหนดว่าค่าของ <code>type1</code> เข้ากันได้กับ <code>type2</code> เสมอหรือไม่


## Examples

### Example #1 
กําหนดว่าค่าของชนิดตัวเลขสามารถถือว่าเป็นชนิดใดๆ ได้เสมอหรือไม่
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
กําหนดว่าค่าของชนิดใดๆ สามารถถือว่าเป็นหมายเลขชนิดได้เสมอหรือไม่
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
