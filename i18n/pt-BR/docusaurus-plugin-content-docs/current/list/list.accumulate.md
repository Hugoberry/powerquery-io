---
title: List.Accumulate
---

# List.Accumulate


Acumula um valor de resumo a partir dos itens da lista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Acumula um valor de resumo dos itens na lista especificada usando o acumulador.

-   `list`: A lista a ser iterada.
-   `seed`: Um valor inicial acumulado.
-   `accumulator`: Uma função que recebe o estado atual e o item atual e retorna o novo estado.


## Examples

### Example #1
Acumula o valor de resumo dos itens na lista.
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
Concatenar cada palavra da lista com um espaço entre elas, mas não incluir espaço no início.
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
Criar uma lista de horários de conclusão de processos a partir de uma data de início e uma lista de tempos de execução de processos.
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
