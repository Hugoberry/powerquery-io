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

Devolve uma lista de valores <code>datetimezone</code> com o tamanho <code>count</code>, começando em <code>start</code>. O incremento especificado, <code>step</code>, é um valor <code>duration</code> que é adicionado a cada valor.


## Examples

### Example #1 
Criar uma lista de 10 valores, começando 5 minutos antes do Dia de Ano Novo (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) incrementando por 1 minuto (#duration(0, 0, 1, 0)).
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
