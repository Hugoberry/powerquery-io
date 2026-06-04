---
title: Folder.Files
---

# Folder.Files


Pateikiama lentelė su failų, rastų nurodytame aplanke ir poaplankiuose, ypatybėmis ir turiniu.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Pateikiama lentelė, kurioje yra kiekvienam nurodytame aplanke ir visuose jo poaplankiuose rastų failų eilutė.

-   `path`: kelias į aplanką, iš kuriuo norite gauti failus. Pateiktas aplanko kelias turi būti leistinas absoliutusis kelias.
-   `options`: (pasirinktinai) Šis parametras šiuo metu skirtas tik vidiniam naudojimui.

Kiekvienoje pateiktos lentelės eilutėje yra failo ypatybės ir nuoroda į jo turinį.


## Examples

### Example #1
Pateikiama lentelė, kurioje yra visi C:\\test-examples\\example-folder ir visuose jo poaplankiuose rasti failai.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
