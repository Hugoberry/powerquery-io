---
title: List.Accumulate
---

# List.Accumulate


Akkumulerer en opsamlingsværdi fra elementer på listen.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Akkumulerer en opsummeringsværdi fra elementerne på den angivne liste ved hjælp af akkumuleringsfunktionen.

-   `list`: Den liste, der skal gentagelsesliste.
-   `seed`: En akkumuleret startværdi.
-   `accumulator`: En funktion, der tager den aktuelle tilstand og det aktuelle element og returnerer den nye tilstand.


## Examples

### Example #1
Akkumulerer opsummeringsværdien fra elementerne på listen.
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
Sammenkæd hvert ord på listen med et mellemrum imellem, men inkluder ikke et mellemrum i starten.
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
Opret en liste over procesfuldførelsestider ud fra en startdato og en liste over proceskørselstider.
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
