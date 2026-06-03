---
title: List.Accumulate
---

# List.Accumulate


सूची के आइटमों से एक सारांश मान एकत्रित करता है.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

संचायक का उपयोग करके निर्दिष्ट सूची में आइटम्स से सारांश मान संचित करता है.

-   `list`: पुनरावृत्ति के लिए सूची.
-   `seed`: प्रारंभिक संचित मान.
-   `accumulator`: एक फ़ंक्शन जो वर्तमान स्थिति और वर्तमान आइटम लेता है और नई स्थिति लौटाता है.


## Examples

### Example #1
सूची में मौजूद आइटम्स से सारांश मान एकत्रित करता है.
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
सूची में प्रत्येक शब्द को एक स्पेस के साथ जोड़ें, लेकिन शुरुआत में कोई स्पेस शामिल न करें.
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
आरंभ दिनांक से प्रक्रिया पूर्ण होने के समय की सूची बनाएँ और प्रक्रिया रन करने के समय की सूची बनाएँ.
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
