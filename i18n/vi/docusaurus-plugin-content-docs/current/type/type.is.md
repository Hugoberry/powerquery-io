---
title: Type.Is
---

# Type.Is


Xác định giá trị của loại đầu tiên luôn tương thích với loại thứ hai.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Xác định xem giá trị của `type1` có luôn tương thích với giá trị `type2`. Giá `type2` phải là giá trị loại gốc (hoặc gốc có thể có giá trị null). Nếu không, hành vi của hàm này chưa được xác định và không nên dựa vào.


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
