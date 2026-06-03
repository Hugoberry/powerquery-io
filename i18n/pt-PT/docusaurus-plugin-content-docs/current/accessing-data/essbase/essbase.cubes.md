---
title: Essbase.Cubes
---

# Essbase.Cubes


Devolve os cubos numa instância de Essbase agrupada pelo servidor Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de cubos agrupados pelo servidor Essbase a partir de uma instância de Essbase no servidor APS `url`. Um parâmetro de registo opcional, `options`, poderá ser especificado para controlar as seguintes opções:

-   `CommandTimeout` : Uma duração que controla o tempo em que a consulta do lado do servidor está autorizada a ser executada antes de ser cancelada. O valor predefinido é dez minutos.



## Category
Accessing data
