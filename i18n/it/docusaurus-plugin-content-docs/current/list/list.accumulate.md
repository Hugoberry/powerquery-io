---
title: List.Accumulate
---

# List.Accumulate


Accumula un valore di riepilogo dagli elementi dell'elenco.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Accumula un valore di riepilogo dagli elementi dell'elenco specificato usando l'accumulatore.

-   `list`: elenco da iterare.
-   `seed`: valore accumulato iniziale.
-   `accumulator`: funzione che accetta lo stato corrente e l'elemento corrente e restituisce il nuovo stato.


## Examples

### Example #1
Accumula il valore di riepilogo dagli elementi dell'elenco.
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
Concatena ogni parola nell'elenco separandole con uno spazio, senza includere uno spazio all'inizio.
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
Crea un elenco di orari di completamento dei processi a partire da una data di inizio e in un elenco di tempi di esecuzione dei processi.
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
