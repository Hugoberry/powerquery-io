---
title: Folder.Contents
---

# Folder.Contents


Vrne tabelo, ki vsebuje lastnosti in vsebino datotek in map, najdenih v določeni mapi.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsako mapo in datoteko, najdeno v poti mape, `path`. Vsaka vrstica vsebuje lastnosti mape ali datoteke in povezavo do vsebine. Parameter `options` je trenutno namenjen samo notranji uporabi.



## Category
Accessing data
