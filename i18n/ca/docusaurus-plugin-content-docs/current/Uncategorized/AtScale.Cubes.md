---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Permet importar dades d&#39;un cub del DirectQuery des d&#39;una instància de l&#39;AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Retorna dades de cub de l'AtScale al servidor <code>server</code>. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar aquestes opcions:<ul>        <li><code>TypedMeasureColumns</code>: valor lògic que indica si els tipus especificats al model multidimensional o tabular s'utilitzaran per als tipus de les columnes de mesura afegides. Quan s'estableixi en "false", el tipus "number" s'utilitzarà per a totes les columnes de mesura. El valor per defecte per a aquesta opció és "false".</li>        <li><code>CommandTimeout</code>: durada (en segons) que permet controlar durant quanta estona es permet que la consulta del servidor s'executi abans de cancel·lar-la. El valor per defecte depèn del controlador. </li>        <li><code>ConnectionTimeout</code>: durada (en segons) que permet controlar durant quanta estona s'ha d'esperar abans de cancel·lar un intent de connexió amb el servidor. El valor per defecte depèn del controlador. </li></ul>El paràmetre de registre s'especifica així: [opció1 = valor1, opció2 = valor2...].


