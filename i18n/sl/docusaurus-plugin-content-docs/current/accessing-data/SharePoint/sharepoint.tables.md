---
title: SharePoint.Tables
---

# SharePoint.Tables


Vrne tabelo z vsebino s SharePointovega seznama.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsak element seznama na navedenem SharePointovem seznamu `url`. Vsaka vrstica vsebuje lastnosti seznama. Navedete lahko `options`, s katerim lahko nadzorujete te možnosti:

-   `ApiVersion` : Število (14 ali 15) ali besedilo"Samodejno", ki določa različico vmesnika API za SharePoint, ki bo uporabljena za to mesto. Če tega parametra ne navedete, bo uporabljena različica 14 vmesnika API. Če navedete"Samodejno", bo različica strežnika samodejno odkrita, če bo to mogoče, v nasprotnem primeru pa je privzeto izbrana različica 14. Za SharePointova mesta, ki niso v angleščini, potrebujete vsaj različico 15.
-   `Implementation` : Neobvezno. Določa, katero različico SharePointovega priključka želite uporabiti. Sprejete vrednosti so"2.0"ali"null". Če je vrednost"2.0", je uporabljena uvedba SharePointovega povezovalnika 2.0. Če je vrednost"null", je uporabljena izvirna uvedba SharePointovega povezovalnika.
-   `ViewMode` : Neobvezno. Ta možnost je veljavna le za uvedbo 2.0. Sprejeti vrednosti sta"All"in"Default". Če vrednost ni določena, je vrednost nastavljena na"All". Če je določena možnost"All", pogled vključuje vse uporabniško ustvarjene in sistemsko določene stolpce. Ko je določena možnost"Default", se pogled ujema s tem, kar uporabnik vidi, ko si ogleda seznam v spletu v katerem koli pogledu, ki ga je uporabnik v nastavitvah nastavil kot"Default". Če uporabnik uredi privzeti pogled tako, da doda ali odstrani uporabniško ustvarjene ali sistemsko določene stolpce ali pa ustvari nov pogled in ga nastavlja kot privzetega, se te spremembe razširijo prek povezovalnika.
-   `DisableAppendNoteColumns` : Priključku preprečuje uporabo ločene končne točke za stolpce opombe.



## Category
Accessing data
