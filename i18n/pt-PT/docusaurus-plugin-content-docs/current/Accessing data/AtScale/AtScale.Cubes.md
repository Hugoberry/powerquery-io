---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Importar/DirectQuery dados de cubo de um AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Devolve dados de cubo do AtScale no servidor <code>servidor</code>. Um parâmetro de registo opcional, <code>opções</code>, podem ser especificados para controlar as seguintes opções:<ul>        <li><code>TypedMeasureColumns</code>: Um valor lógico a indicar se os tipos especificados no modelo multidimensional ou tabular irão ser usados nos tipos das colunas de medida adicionadas. Quando definido como falso, o tipo "número" será usado em todas as colunas de medida. O valor predefinido desta opção é falso.</li>        <li><code>CommandTimeout</code>: Uma duração (em segundos) que controla o tempo máximo de execução permitido da consulta do lado do servidor antes do seu cancelamento. O valor predefinido é dependente do controlador. </li>        <li><code>ConnectionTimeout</code>: Uma duração (em segundos) que controla o tempo máximo de espera antes de abandonar uma tentativa de estabelecer uma ligação ao servidor. O valor predefinido é dependente do controlador. </li></ul>O parâmetro de registo está especificado como [option1 = value1, option2 = value2...].


