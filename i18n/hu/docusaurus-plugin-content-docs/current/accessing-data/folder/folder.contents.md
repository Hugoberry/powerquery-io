---
title: Folder.Contents
---

# Folder.Contents


Egy olyan táblát ad vissza, amely a megadott mappában levő fájlok és mappák tulajdonságait és tartalmát tartalmazza.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Egy olyan táblát ad vissza, amely a(z) `path` mappában található minden egyes mappához és fájlhoz tartalmaz egy sort. Minden sor tartalmazza a mappa vagy fájl tulajdonságait, valamint a tartalmára mutató hivatkozást. A(z) `options` paraméter jelenleg csak belső használatra szolgál.



## Category
Accessing data
