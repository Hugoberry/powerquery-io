---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Gera uma lista de valores datetimezone a partir de um valor inicial, uma contagem e um valor de duração incremental.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Retorna uma lista de valores <code>datetimezone</code> de tamanho <code>count</code>, iniciando em <code>start</code>. O incremento especificado, <code>step</code>, é um valor <code>duration</code> adicionado a cada valor.


## Examples

### Example #1 
Crie uma lista de dez valores que comece em 5 minutos antes do dia do ano novo (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) e cujos valores sejam incrementados em um minuto (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
