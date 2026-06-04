---
title: SharePoint.Tables
---

# SharePoint.Tables


Vráti tabuľku obsahujúcu obsah zo zoznamu SharePointu.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku obsahujúcu riadok pre každú položku zoznamu nachádzajúcu sa v zadanom zozname SharePoint `url`. Každý riadok obsahuje vlastnosti príslušného zoznamu. Môže sa zadať `options` na kontrolu týchto možností:

-   `ApiVersion` : Číslo (14 alebo 15) alebo text Auto, ktorý určuje verziu rozhrania API SharePointu na použitie s touto lokalitou. Ak nie je zadané, použije sa verzia API s číslom 14. Keď zadáte možnosť Automaticky, automaticky sa zistí verzia servera (ak je to možné), v opačnom prípade sa verzia predvolene nastaví na číslo 14. Lokality SharePoint, ktoré nie sú v angličtine, vyžadujú najmenej verziu 15.
-   `Implementation` : Voliteľné. Určuje, ktorá verzia konektora služby SharePoint sa má použiť. Prijateľné hodnoty sú 2.0 alebo null. Ak je hodnota 2.0, použije sa implementácia konektora služby SharePoint vo verzii 2.0. Ak je hodnota null, použije sa pôvodná implementácia konektora služby SharePoint.
-   `ViewMode` : Voliteľné. Táto možnosť platí len pre implementáciu 2.0. Prijateľné hodnoty sú Všetky a Predvolené. Ak nie je uvedená žiadna hodnota, nastaví sa hodnota Všetky. Ak je zadaná hodnota Všetky, zobrazenie obsahuje všetky stĺpce vytvorené používateľom a stĺpce definované systémom. Keď je zadaná hodnota Predvolené, zobrazenie bude zodpovedať tomu, čo používateľ vidí pri prezeraní zoznamu online v tom zobrazení, ktoré používateľ nastavil ako predvolené vo svojich nastaveniach. Ak používateľ upraví svoje predvolené zobrazenie tak, že pridá alebo odstráni stĺpce vytvorené používateľom alebo definované systémom, alebo vytvorí nové zobrazenie a nastaví ho ako predvolené, tieto zmeny sa premietnu do konektora.
-   `DisableAppendNoteColumns` : Zabraňuje konektoru používať samostatný koncový bod pre stĺpce poznámok.



## Category
Accessing data
