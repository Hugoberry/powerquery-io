---
title: Folder.Files
---

# Folder.Files


Vrne tabelo, ki vsebuje lastnosti in vsebino datotek, najdenih v določeni mapi in podmapah.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsako datoteko, najdeno v navedeni mapi in vseh njenih podmapah.

-   `path`: pot do mape, iz katere želite pridobiti datoteke. Navedena pot mape mora biti veljavna absolutna pot.
-   `options`: (neobvezen) Ta parameter je trenutno namenjen le notranji uporabi.

Vsaka vrstica vrnjene tabele vsebuje lastnosti datoteke in povezavo do njene vsebine.


## Examples

### Example #1
Pridobite tabelo, ki vsebuje vse datoteke, najdene v mapi C:\\test-examples\\example-folder in vseh njenih podmapah.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
