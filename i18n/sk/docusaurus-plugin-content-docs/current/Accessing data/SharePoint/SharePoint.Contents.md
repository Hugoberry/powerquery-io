---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Vráti tabuľku obsahujúcu obsah z lokality SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku obsahujúcu riadok pre každý priečinok a dokument nachádzajúci sa na zadanej lokalite SharePoint <code>url</code>. Každý riadok obsahuje vlastnosti príslušného priečinka alebo súboru a prepojenie na jeho obsah. Môže sa zadať <code>options</code> na kontrolu týchto možností:    <ul><li><code>ApiVersion</code> : Č&#237;slo (14 alebo 15) alebo text Auto, ktor&#253; určuje verziu rozhrania API SharePointu na použitie s touto lokalitou. Ak nie je zadan&#233;, použije sa verzia API s č&#237;slom 14. Keď zad&#225;te možnosť Automaticky, automaticky sa zist&#237; verzia servera (ak je to možn&#233;), v opačnom pr&#237;pade sa verzia predvolene nastav&#237; na č&#237;slo 14. Lokality SharePoint, ktor&#233; nie s&#250; v angličtine, vyžaduj&#250; najmenej verziu 15.</li></ul>    



## Category
Accessing data
