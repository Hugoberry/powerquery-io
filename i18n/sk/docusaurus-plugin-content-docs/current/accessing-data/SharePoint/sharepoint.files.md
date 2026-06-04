---
title: SharePoint.Files
---

# SharePoint.Files


Vráti tabuľku obsahujúcu dokumenty z lokality SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku obsahujúcu riadok pre každý dokument nachádzajúci sa na zadanej lokalite SharePoint `url` a podpriečinky. Každý riadok obsahuje vlastnosti príslušného priečinka alebo súboru a prepojenie na jeho obsah. Môže sa zadať `options` na kontrolu týchto možností:

-   `ApiVersion` : Číslo (14 alebo 15) alebo text Auto, ktorý určuje verziu rozhrania API SharePointu na použitie s touto lokalitou. Ak nie je zadané, použije sa verzia API s číslom 14. Keď zadáte možnosť Automaticky, automaticky sa zistí verzia servera (ak je to možné), v opačnom prípade sa verzia predvolene nastaví na číslo 14. Lokality SharePoint, ktoré nie sú v angličtine, vyžadujú najmenej verziu 15.



## Category
Accessing data
