---
title: Value.Type
---

# Value.Type


Trả về loại của giá trị cụ thể.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Trả về loại của giá trị cụ thể.

-   `value`: Giá trị có loại được trả về.


## Examples

### Example #1
Trả về loại của số được chỉ định.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Trả về loại của ngày được chỉ định.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Trả về loại của bản ghi được chỉ định.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
