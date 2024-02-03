---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Vrne tabelo z vsebino s SharePointovega seznama.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, ki vsebuje vrstico za vsak element seznama na navedenem SharePointovem seznamu <code>url</code>. Vsaka vrstica vsebuje lastnosti seznama. Navedete lahko <code>options</code>, s katerim lahko nadzorujete te možnosti:    <ul><li><code>ApiVersion</code> : Število (14 ali 15) ali besedilo &#187;Samodejno&#171;, ki določa različico vmesnika API za SharePoint, ki bo uporabljena za to mesto. Če tega parametra ne navedete, bo uporabljena različica 14 vmesnika API. Če navedete &#187;Samodejno&#171;, bo različica strežnika samodejno odkrita, če bo to mogoče, v nasprotnem primeru pa je privzeto izbrana različica 14. Za SharePointova mesta, ki niso v angleščini, potrebujete vsaj različico 15.</li><li><code>Implementation</code> : Neobvezno. Določa, katero različico SharePointovega priključka želite uporabiti. Sprejete vrednosti so &#187;2.0&#171; ali &#187;null&#171;. Če je vrednost &#187;2.0&#171;, je uporabljena uvedba SharePointovega povezovalnika 2.0. Če je vrednost &#187;null&#171;, je uporabljena izvirna uvedba SharePointovega povezovalnika.</li><li><code>ViewMode</code> : Neobvezno. Ta možnost je veljavna le za uvedbo 2.0. Sprejeti vrednosti sta &#187;All&#171; in &#187;Default&#171;. Če vrednost ni določena, je vrednost nastavljena na &#187;All&#171;. Če je določena možnost &#187;All&#171;, pogled vključuje vse uporabniško ustvarjene in sistemsko določene stolpce. Ko je določena možnost &#187;Default&#171;, se pogled ujema s tem, kar uporabnik vidi, ko si ogleda seznam v spletu v katerem koli pogledu, ki ga je uporabnik v nastavitvah nastavil kot &#187;Default&#171;. Če uporabnik uredi privzeti pogled tako, da doda ali odstrani uporabniško ustvarjene ali sistemsko določene stolpce ali pa ustvari nov pogled in ga nastavlja kot privzetega, se te spremembe razširijo prek povezovalnika.</li><li><code>DisableAppendNoteColumns</code> : Priključku preprečuje uporabo ločene končne točke za stolpce opombe.</li></ul>    



## Category
Accessing data
