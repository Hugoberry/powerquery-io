---
title: List.Dates
---

# List.Dates


Gera uma lista de valores date a partir de um valor inicial, uma contagem e um valor de duração incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Devolve uma lista de valores <code>date</code> com o tamanho <code>count</code>, começando em <code>start</code>. O incremento especificado, <code>step</code>, é um valor <code>duration</code> que é adicionado a cada valor.


## Examples

### Example #1 
Criar uma lista de 5 valores, começando na Véspera de Ano Novo (#date(2011, 12, 31)) incrementando por 1 dia (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
