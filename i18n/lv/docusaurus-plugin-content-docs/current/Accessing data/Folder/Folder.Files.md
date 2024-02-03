---
title: Folder.Files
---

# Folder.Files


## Description

Tiek atgriezta tabula, kurā ir ietverti norādītajā mapē un tās apakšmapēs atrasto failu rekvizīti un saturs.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietverta viena rinda katram failam, kas atrasts mapē <code>path</code> un visās tās apakšmapēs. Katrā rindā ir ietverti faila rekvizīti un saite uz to saturu. Parametrs <code>options</code> pašlaik ir paredzēts tikai iekšējai lietošanai.



## Category
Accessing data
