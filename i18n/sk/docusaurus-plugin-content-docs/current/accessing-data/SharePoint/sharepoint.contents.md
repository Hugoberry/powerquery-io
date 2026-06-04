---
title: SharePoint.Contents
---

# SharePoint.Contents


Vráti tabuľku obsahujúcu obsah z lokality SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku obsahujúcu riadok pre každý priečinok a dokument nachádzajúci sa na zadanej lokalite SharePoint `url`. Každý riadok obsahuje vlastnosti príslušného priečinka alebo súboru a prepojenie na jeho obsah. Môže sa zadať `options` na kontrolu týchto možností:

-   `ApiVersion` : Číslo (14 alebo 15) alebo text Auto, ktorý určuje verziu rozhrania API SharePointu na použitie s touto lokalitou. Ak nie je zadané, použije sa verzia API s číslom 14. Keď zadáte možnosť Automaticky, automaticky sa zistí verzia servera (ak je to možné), v opačnom prípade sa verzia predvolene nastaví na číslo 14. Lokality SharePoint, ktoré nie sú v angličtine, vyžadujú najmenej verziu 15.
-   `Implementation` : Voliteľné. Určuje, ktorá verzia konektora služby SharePoint sa má použiť. Prijateľné hodnoty sú 2.0 alebo null. Ak je hodnota 2.0, použije sa implementácia konektora služby SharePoint vo verzii 2.0. Ak je hodnota null, použije sa pôvodná implementácia konektora služby SharePoint.



## Category
Accessing data
