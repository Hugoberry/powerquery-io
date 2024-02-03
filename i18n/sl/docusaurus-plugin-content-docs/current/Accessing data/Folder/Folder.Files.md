---
title: Folder.Files
---

# Folder.Files


## Description

Vrne tabelo, ki vsebuje lastnosti in vsebino datotek, najdenih v določeni mapi in podmapah.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, ki vsebuje vrstico za vsako datoteko, najdeno v mapi <code>path</code> in vseh njenih podmapah. Vsaka vrstica vsebuje lastnosti datoteke in povezavo do njene vsebine. Parameter <code>options</code> je trenutno namenjen samo za notranjo uporabo.



## Category
Accessing data
