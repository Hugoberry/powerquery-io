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

Devolve uma tabela de cubos agrupados pelo servidor Essbase a partir de uma instância de Essbase no servidor APS <code>url</code>. Um parâmetro de registo opcional, <code>options</code>, poderá ser especificado para controlar as seguintes opções:    <ul><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li></ul>



## Category
Accessing data
