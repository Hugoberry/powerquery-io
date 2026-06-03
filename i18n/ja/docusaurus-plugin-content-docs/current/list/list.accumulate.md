---
title: List.Accumulate
---

# List.Accumulate


リスト内のアイテムから要約値を収集します。


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

指定されたリスト内の項目から、アキュムレーターを使って要約値を累積します。

-   `list`: 繰り返すリスト。
-   `seed`: 初期累積値。
-   `accumulator`: 現在の状態と現在の項目を受け取り、新しい状態を返す関数。


## Examples

### Example #1
リスト内の項目から要約値を累積します。
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
リスト内の各単語をスペースで連結しますが、先頭にスペースは含めません。
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
開始日とプロセスの実行時間のリストから、プロセス完了時刻のリストを作成します。
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
