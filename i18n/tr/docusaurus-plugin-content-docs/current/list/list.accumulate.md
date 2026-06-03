---
title: List.Accumulate
---

# List.Accumulate


Bir toplam değerini listedeki öğelerden hesaplar.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Belirtilen listedeki öğelerden toplayıcıyı kullanarak bir özet değer biriktirir.

-   `list`: Yinelenecek liste.
-   `seed`: Başlangıçta biriken değer.
-   `accumulator`: Geçerli durumu ve geçerli öğeyi alan ve yeni durumu döndüren bir işlev.


## Examples

### Example #1
Listedeki öğelerin özet değerini toplar.
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
Listedeki her kelimeyi aralarında boşluk bırakarak birleştirin, ancak başlangıçta boşluk bırakmayın.
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
Başlangıç tarihinden itibaren süreç tamamlanma sürelerinin bir listesini ve süreç çalışma sürelerinin bir listesini oluşturun.
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
