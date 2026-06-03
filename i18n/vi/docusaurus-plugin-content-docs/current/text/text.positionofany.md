---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Trả về vị trí đầu tiên trong giá trị văn bản của ký tự bất kỳ được liệt kê (-1 nếu không tìm thấy).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Trả về vị trí đầu tiên của ký tự bất kỳ trong danh sách `characters` tìm được trong `text`. Có thể sử dụng tham số tùy chọn `occurrence` để chỉ định trả về vị trí xuất hiện nào.


## Examples

### Example #1
Tìm vị trí đầu tiên của "W" hoặc "H" trong văn bản "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Tìm vị trí của "W" hoặc "H" trong văn bản "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
