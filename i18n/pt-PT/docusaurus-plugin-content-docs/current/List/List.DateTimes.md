---
title: List.DateTimes
---

# List.DateTimes


## Description

Gera uma lista de valores datetime a partir de um valor inicial, uma contagem e um valor de duração incremental.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Devolve uma lista de valores <code>datetime</code> com o tamanho <code>count</code>, começando em <code>start</code>. O incremento especificado, <code>step</code>, é um valor <code>duration</code> que é adicionado a cada valor.


## Examples

### Example #1 
Criar uma lista de 10 valores, começando 5 minutos antes do Dia de Ano Novo (#datetime(2011, 12, 31, 23, 55, 0)) incrementando por 1 minuto (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
