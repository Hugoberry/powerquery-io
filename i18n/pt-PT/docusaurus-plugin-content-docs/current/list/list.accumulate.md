---
title: List.Accumulate
---

# List.Accumulate


Acumula um valor de resumo dos itens existentes na lista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Acumula um valor de resumo dos itens na lista especificada utilizando o acumulador.

-   `list`: a lista para iterar.
-   `seed`: um valor acumulado inicial.
-   `accumulator`: uma função que recebe o estado atual e o item atual e devolve o novo estado.


## Examples

### Example #1
Acumula o valor de resumo dos itens existentes na lista.
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
Concatena cada palavra na lista com um espaço entre elas, mas não incluas um espaço no início.
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
Cria uma lista dos tempos de conclusão do processo a partir de uma data de início e de uma lista de tempos de execução do processo.
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
