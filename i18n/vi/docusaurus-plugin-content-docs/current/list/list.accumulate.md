---
title: List.Accumulate
---

# List.Accumulate


Tích lũy một giá trị tóm tắt từ các mục trong danh sách.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Tích lũy giá trị tóm tắt từ các mục trong danh sách được chỉ định bằng bộ tích lũy.

-   `list`: Danh sách để lặp lại.
-   `seed`: Giá trị tích lũy ban đầu.
-   `accumulator`: Một hàm nhận trạng thái hiện tại và mục hiện tại, rồi trả về trạng thái mới.


## Examples

### Example #1
Tích lũy giá trị tóm tắt này từ các mục trong danh sách.
```powerquery
let
    Source = List.Accumulate(
        {1, 2, 3, 4, 5},
        0,
        (runningSum, nextNumber) => runningSum + nextNumber
    )
in
    Source
```

Result: 
```powerquery
15
```


### Example #2
Ghép nối từng từ trong danh sách có dấu cách ở giữa nhưng không thêm dấu cách ở đầu.
```powerquery
let
    Source = List.Accumulate(
        {"The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."},
        null,
        (fullTextSoFar, nextPart) =>
            Text.Combine({fullTextSoFar, nextPart}, " ")
    )
in
    Source
```

Result: 
```powerquery
"The quick brown fox jumps over the lazy dog."
```


### Example #3
Lập danh sách thời gian hoàn thành quy trình từ ngày bắt đầu và danh sách thời gian chạy quy trình.
```powerquery
let
    #"Process Duration" =
    {
        #duration(0,1,0,0),
        #duration(0,2,0,0),
        #duration(0,3,0,0)
    },
    #"Start Time" = #datetime(2025, 9, 8, 19, 0, 0),
    #"Process Timeline" = List.Accumulate(
        #"Process Duration",
        {#"Start Time"},
        (accumulatedTimes, nextDuration) =>
            accumulatedTimes & {List.Last(accumulatedTimes) + nextDuration}
    )
in
    #"Process Timeline"
```

Result: 
```powerquery
{
    #datetime(2025, 9, 8, 19, 0, 0),
    #datetime(2025, 9, 8, 20, 0, 0),
    #datetime(2025, 9, 8, 22, 0, 0),
    #datetime(2025, 9, 9, 1, 0, 0)
}
```




## Category
List.Transformation functions
