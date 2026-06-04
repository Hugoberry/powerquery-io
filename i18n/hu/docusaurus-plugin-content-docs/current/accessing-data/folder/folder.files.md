---
title: Folder.Files
---

# Folder.Files


Egy olyan táblát ad vissza, amely a megadott mappában és annak almappáiban levő fájlok tulajdonságait és tartalmát tartalmazza.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Egy olyan táblát ad vissza, amely egy sort tartalmaz a megadott mappában és annak almappáiban található minden egyes fájlhoz.

-   `path`: Annak a mappának az elérési útja, ahonnan be szeretné kérni a fájlokat. A megadott mappaelérési útnak érvényes abszolút elérési útnak kell lennie.
-   `options`: (Nem kötelező) Ez a paraméter jelenleg csak belső használatra szolgál.

A visszaadott tábla minden egyes sora tartalmazza a fájl tulajdonságait és a tartalmára mutató hivatkozást.


## Examples

### Example #1
Egy táblázatot ad vissza, amely tartalmazza a C:\\test-examples\\example-folder mappában és annak összes almappájában található fájlokat.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
