---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


Altera a granularidade dimensional do contexto de filtro do cubo fechando os atributos mapeados para as colunas especificadas.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

Altera a granularidade dimensional do contexto de filtro do `cube` fechando os atributos mapeados para as colunas especificadas `columnNames`. As colunas também são removidas da vista em tabela do cubo.



## Category
Cube
