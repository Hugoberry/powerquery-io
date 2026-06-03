---
title: Text.Combine
---

# Text.Combine


Ghép chuỗi danh sách giá trị văn bản thành một giá trị văn bản.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Trả về kết quả kết hợp danh sách giá trị văn bản, `texts`, thành một giá trị văn bản duy nhất. Mọi giá trị `null` xuất hiện trong `texts` đều bị bỏ qua. `separator` tùy chọn được sử dụng trong văn bản kết hợp cuối cùng có thể được chỉ định.


## Examples

### Example #1
Kết hợp các giá trị văn bản "Seattle" và "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Kết hợp các giá trị văn bản "Seattle" và "WA" được phân tách bằng một dấu phẩy và một dấu cách.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Kết hợp các giá trị "Seattle", `null` và "WA", được phân tách bằng một dấu phẩy và một dấu cách. (Lưu ý rằng `null` bị bỏ qua.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Kết hợp tên, tên đệm (nếu có) và họ thành tên đầy đủ của cá nhân.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
