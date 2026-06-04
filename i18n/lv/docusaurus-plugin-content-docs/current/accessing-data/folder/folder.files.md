---
title: Folder.Files
---

# Folder.Files


Tiek atgriezta tabula, kurā ir ietverti norādītajā mapē un tās apakšmapēs atrasto failu rekvizīti un saturs.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietverta viena rinda katram norādītajā mapē un visās tās apakšmapēs atrastam failam.

-   `path`: ceļš uz mapi, no kuras vēlaties izgūt failus. Norādītajam mapes ceļam ir jābūt derīgam absolūtajam ceļam.
-   `options`: (Neobligāti) šis parametrs pašlaik ir paredzēts tikai iekšējai lietošanai.

Katrā atgrieztās tabulas rindā ir ietverti faila rekvizīti un saite uz tā saturu.


## Examples

### Example #1
Tiek atgriezta tabula, kurā ir ietverti visi C:\\test-examples\\example-folder un visās tās apakšmapēs atrastie faili.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
