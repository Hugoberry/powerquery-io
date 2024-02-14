---
title: Text.Format
---

# Text.Format


Trả về văn bản được định dạng từ chuỗi định dạng và các đối số.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

Trả về văn bản đã định dạng được tạo bằng cách áp dụng <code>arguments</code> từ danh sách hoặc bản ghi cho chuỗi định dạng <code>formatString</code>. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Định dạng danh sách các số.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Định dạng các loại dữ liệu khác nhau từ bản ghi theo văn hóa Anh-Mỹ.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
