---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Retorna os cubos em uma instância do Essbase agrupados por servidor Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela de cubos agrupados por servidor Essbase de uma instância do Essbase no servidor do APS <code>url</code>. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções    <ul><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li></ul>



## Category
Accessing data
