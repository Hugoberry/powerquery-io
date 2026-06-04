---
title: List.Accumulate
---

# List.Accumulate


Тізімдегі элементтерден жиынтық мәнді жинайды.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Белгіленген тізімдегі элементтерден жинақтағышты қолданып жиынтық мәнді есептейді.

-   `list`: Итерациялау керек тізім.
-   `seed`: Бастапқы жинақталған мән.
-   `accumulator`: Ағымдағы күй мен ағымдағы элементті қабылдап, жаңа күйді қайтаратын функция.


## Examples

### Example #1
Тізімдегі элементтерден жиынтық мәнді жинақтайды.
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
Тізімдегі әр сөзді арасына бос орын қойып біріктіріңіз, бірақ басында бос орын болмауы керек.
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
Бастапқы күн мен процестің жұмыс уақыттары тізімінен процесс аяқталу уақыттарының тізімін жасаңыз.
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
