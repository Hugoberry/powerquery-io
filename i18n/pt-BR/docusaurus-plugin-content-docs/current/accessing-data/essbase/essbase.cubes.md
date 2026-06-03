---
title: Essbase.Cubes
---

# Essbase.Cubes


Retorna os cubos em uma instância do Essbase agrupados por servidor Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de cubos agrupados por servidor Essbase de uma instância do Essbase no servidor do APS `url`. Um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções

-   `CommandTimeout` : Uma duração que controla por quanto tempo a consulta do servidor tem permissão para ser executada até que seja cancelada. O valor padrão é dez minutos.



## Category
Accessing data
