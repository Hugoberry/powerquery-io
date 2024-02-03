---
title: List.Distinct
---

# List.Distinct


## Description

Trả về một danh sách giá trị đã được loại bỏ giá trị trùng lặp.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Trả về một danh sách chứa tất cả các giá trị trong danh sách <code>list</code> đã bị loại bỏ giá trị trùng lặp. Nếu danh sách trống thì kết quả là một danh sách trống.


## Examples

### Example #1 
Loại bỏ các giá trị trùng lặp khỏi danh sách \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
