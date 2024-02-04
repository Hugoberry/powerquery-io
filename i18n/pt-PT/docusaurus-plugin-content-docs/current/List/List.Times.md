---
title: List.Times
---

# List.Times


## Description

Gera uma lista de valores time a partir de um valor inicial, uma contagem e um valor de duração incremental.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Devolve uma lista de valores <code>time</code> com o tamanho <code>count</code>, começando em <code>start</code>. O incremento especificado, <code>step</code>, é um valor <code>duration</code> que é adicionado a cada valor.


## Examples

### Example #1 
Criar uma lista de 4 valores, começando ao meio dia (#time(12, 0, 0)) incrementando por uma hora (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
