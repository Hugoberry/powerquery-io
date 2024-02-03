---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Vráti tabuľku obsahujúcu obsah zo zoznamu SharePointu.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku obsahujúcu riadok pre každú položku zoznamu nachádzajúcu sa v zadanom zozname SharePoint <code>url</code>. Každý riadok obsahuje vlastnosti príslušného zoznamu. Môže sa zadať <code>options</code> na kontrolu týchto možností:    <ul><li><code>ApiVersion</code> : Č&#237;slo (14 alebo 15) alebo text Auto, ktor&#253; určuje verziu rozhrania API SharePointu na použitie s touto lokalitou. Ak nie je zadan&#233;, použije sa verzia API s č&#237;slom 14. Keď zad&#225;te možnosť Automaticky, automaticky sa zist&#237; verzia servera (ak je to možn&#233;), v opačnom pr&#237;pade sa verzia predvolene nastav&#237; na č&#237;slo 14. Lokality SharePoint, ktor&#233; nie s&#250; v angličtine, vyžaduj&#250; najmenej verziu 15.</li><li><code>Implementation</code> : Voliteľn&#233;. Určuje, ktor&#225; verzia konektora služby SharePoint sa m&#225; použiť. Prijateľn&#233; hodnoty s&#250; 2.0 alebo null. Ak je hodnota 2.0, použije sa implement&#225;cia konektora služby SharePoint vo verzii 2.0. Ak je hodnota null, použije sa p&#244;vodn&#225; implement&#225;cia konektora služby SharePoint.</li><li><code>ViewMode</code> : Voliteľn&#233;. T&#225;to možnosť plat&#237; len pre implement&#225;ciu 2.0. Prijateľn&#233; hodnoty s&#250; Všetky a Predvolen&#233;. Ak nie je uveden&#225; žiadna hodnota, nastav&#237; sa hodnota Všetky. Ak je zadan&#225; hodnota Všetky, zobrazenie obsahuje všetky stĺpce vytvoren&#233; použ&#237;vateľom a stĺpce definovan&#233; syst&#233;mom. Keď je zadan&#225; hodnota Predvolen&#233;, zobrazenie bude zodpovedať tomu, čo použ&#237;vateľ vid&#237; pri prezeran&#237; zoznamu online v tom zobrazen&#237;, ktor&#233; použ&#237;vateľ nastavil ako predvolen&#233; vo svojich nastaveniach. Ak použ&#237;vateľ uprav&#237; svoje predvolen&#233; zobrazenie tak, že prid&#225; alebo odstr&#225;ni stĺpce vytvoren&#233; použ&#237;vateľom alebo definovan&#233; syst&#233;mom, alebo vytvor&#237; nov&#233; zobrazenie a nastav&#237; ho ako predvolen&#233;, tieto zmeny sa premietnu do konektora.</li><li><code>DisableAppendNoteColumns</code> : Zabraňuje konektoru použ&#237;vať samostatn&#253; koncov&#253; bod pre stĺpce pozn&#225;mok.</li></ul>    



## Category
Accessing data
