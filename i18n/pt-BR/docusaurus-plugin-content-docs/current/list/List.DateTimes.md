---
title: List.DateTimes
---

# List.DateTimes


Gera uma lista de valores datetime a partir de um valor inicial, uma contagem e um valor de duração incremental.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Retorna uma lista de valores <code>datetime</code> de tamanho <code>count</code>, iniciando em <code>start</code>. O incremento especificado, <code>step</code>, é um valor <code>duration</code> adicionado a cada valor.


## Examples

### Example #1 
Crie uma lista de dez valores que comece em cinco minutos antes do dia do ano novo (#datetime(2011, 12, 31, 23, 55, 0)) e cujos valores sejam incrementados em um minuto (#duration(0, 0, 1, 0)).
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
