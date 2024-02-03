---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Datos de cubo de importación ou DirectQuery de AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Devolve datos de cubo de AtScale no servidor <code>server</code>. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:<ul>        <li><code>TypedMeasureColumns</code>: un valor lóxico que indica se os tipos especificados no modelo multidimensional ou tabular se usarán para os tipos das columnas de medidas engadidas. Cando se configura como false, usarase o tipo "number" para todas as columnas de medidas. O valor predefinido para esta opción é false.</li>        <li><code>CommandTimeout</code>: unha duración (en segundos) que controla canto tempo se permite executar a consulta do lado do servidor ata que se cancele. O valor predefinido depende do controlador. </li>        <li><code>ConnectionTimeout</code>: unha duración (en segundos) que controla canto tempo esperar antes de abandonar unha tentativa para realizar unha conexión co servidor. O valor predeterminado depende do controlador. </li></ul>O parámetro de rexistro expecifícase como [opción1 = valor1, opción2 = valor2...].


