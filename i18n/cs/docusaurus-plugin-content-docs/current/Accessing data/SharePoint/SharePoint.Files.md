---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Vrátí tabulku obsahující dokumenty z webu SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku obsahující řádek pro každý dokument nalezený na zadaném sharepointovém webu <code>url</code> a v jeho podsložkách. Každý řádek obsahuje vlastnosti složky nebo souboru a odkaz na jejich obsah. Zadáním <code>options</code> se dají řídit následující možnosti:    <ul><li><code>ApiVersion</code> : Č&#237;slo (14 nebo 15) nebo text „Auto“, kter&#253; určuje verzi rozhran&#237; API SharePointu, kter&#225; se m&#225; pro tento web použ&#237;vat. Když se tato možnost nezad&#225;, použije se rozhran&#237; API ve verzi 14. Při zad&#225;n&#237; možnosti Auto se automaticky zjist&#237; verze serveru, a když to nen&#237; možn&#233;, nastav&#237; se v&#253;choz&#237; verze 14. Weby SharePointu jin&#233; než anglick&#233; vyžaduj&#237; aspoň verzi 15.</li></ul>    



## Category
Accessing data
