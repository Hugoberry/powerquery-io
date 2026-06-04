---
title: Pdf.Tables
---

# Pdf.Tables


Retorna les taules que s'han trobat en un fitxer PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Retorna les taules trobades a `pdf`. Es pot proporcionar un paràmetre de registre opcional, `options`, per especificar propietats addicionals. El registre pot contenir els camps següents:

-   `Implementation` : Versió de l'algoritme que s'utilitzarà en identificar taules. Les versions antigues només estan disponibles per a la compatibilitat amb versions anteriors, per tal d'evitar que les consultes antigues deixin de funcionar a causa de les actualitzacions dels algoritmes. La versió més recent sempre ha de proporcionar els millors resultats. Els valors vàlids són "1.3", "1.2", "1.1" o nul.
-   `StartPage` : Especifica la primera pàgina de l'interval de pàgines que s'ha d'examinar. El valor per defecte és "1".
-   `EndPage` : Especifica l'última pàgina de l'interval de pàgines que s'ha d'examinar. L'opció per defecte és l'última pàgina del document.
-   `MultiPageTables` : Controla si les taules similars de les pàgines consecutives es combinaran automàticament en una sola taula. El valor per defecte és "true".
-   `EnforceBorderLines` : Controla si les línies de vora s'apliquen sempre com a límits de cel·la (quan el valor és "true") o només s'utilitzen com un dels suggeriments per determinar els límits de la cel·la (quan el valor és "false"). El valor per defecte és "false".


## Examples

### Example #1
Retorna les taules incloses al fitxer sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Accés a les dades
