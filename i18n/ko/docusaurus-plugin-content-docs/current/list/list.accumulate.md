---
title: List.Accumulate
---

# List.Accumulate


목록의 항목에서 요약 값을 누적합니다.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

누적기를 사용하여 지정된 목록의 항목에서 요약 값을 누적합니다.

-   `list`: 반복할 목록입니다.
-   `seed`: 초기 누적 값입니다.
-   `accumulator`: 현재 상태와 현재 항목을 가져오고 새 상태를 반환하는 함수입니다.


## Examples

### Example #1
목록의 항목에서 요약 값을 누적합니다.
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
목록의 각 단어를 사이에 공백으로 연결하되, 시작 부분에는 공백을 포함하지 않습니다.
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
시작 날짜부터 프로세스 완료 시간 목록과 프로세스 실행 시간 목록을 작성합니다.
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
