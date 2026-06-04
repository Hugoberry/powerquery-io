---
title: AtScale.Cubes
---

# AtScale.Cubes


Permet importar dades d'un cub del DirectQuery des d'una instància de l'AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Retorna dades de cub de l'AtScale al servidor `server`. Es pot especificar un paràmetre de registre opcional, `options`, per controlar aquestes opcions:

-   `TypedMeasureColumns`: valor lògic que indica si els tipus especificats al model multidimensional o tabular s'utilitzaran per als tipus de les columnes de mesura afegides. Quan s'estableixi en "false", el tipus "number" s'utilitzarà per a totes les columnes de mesura. El valor per defecte per a aquesta opció és "false".
-   `CommandTimeout`: durada (en segons) que permet controlar durant quanta estona es permet que la consulta del servidor s'executi abans de cancel·lar-la. El valor per defecte depèn del controlador.
-   `ConnectionTimeout`: durada (en segons) que permet controlar durant quanta estona s'ha d'esperar abans de cancel·lar un intent de connexió amb el servidor. El valor per defecte depèn del controlador.

El paràmetre de registre s'especifica així: \[opció1 = valor1, opció2 = valor2...\].


## Examples

### Example #1
Permet enumerar les dades d'un cub de l'AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



