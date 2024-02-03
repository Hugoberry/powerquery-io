---
title: Type.Is
---

# Type.Is


## Description

Xác định giá trị của loại đầu tiên luôn tương thích với loại thứ hai.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Xác định xem giá trị của <code>type1</code> có luôn tương thích với <code>type2</code> hay không.


## Examples

### Example #1 
Xác định giá trị của số loại cũng có thể được coi là loại bất kỳ.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Xác định giá trị của loại bất kỳ cũng có thể được coi là số loại.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
