---
title: Duration.FromText
---

# Duration.FromText


Trả về một giá trị khoảng thời gian từ dạng thời gian đã trôi qua ở dạng thức văn bản (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Trả về một giá trị khoảng thời gian từ văn bản được chỉ định, `text`. Hàm này có thể phân tích cú pháp các định dạng sau:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Bao gồm tất cả các phạm vi)

-   ddd: Số ngày.
-   hh: Số giờ, từ 0 đến 23.
-   mm: Số phút, từ 0 đến 59.
-   ss: Số giây, từ 0 đến 59.
-   ff: Phần của giây, từ 0 đến 9999999.


## Examples

### Example #1
Chuyển đổi `"2.05:55:20"` thành giá trị `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
