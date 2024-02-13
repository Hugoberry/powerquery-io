---
title: List.Product
---

# List.Product


Trả về tích của các số trong danh sách.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Trả về tích của các số không rỗng trong danh sách <code>numbersList</code>. Trả về giá trị rỗng nếu không có giá trị nào trong danh sách là giá trị không rỗng.


## Examples

### Example #1 
Tìm tích của các số trong danh sách &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
