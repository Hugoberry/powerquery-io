---
title: SharePoint.Files
---

# SharePoint.Files


Returnerer en tabel, der indeholder dokumenter fra et SharePoint-websted.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hvert dokument, der blev fundet på det angivne SharePoint-websted, `url`, og undermapper. Hver række indeholder egenskaber for mappen eller filen og et link til indholdet. `options` kan angives for at styre følgende indstillinger:

-   `ApiVersion` : Et tal (14 eller 15) eller teksten "Auto", der angiver, hvilken SharePoint API-version der skal anvendes til dette websted. Hvis den ikke er angivet, anvendes API-version 14. Når Auto er angivet, registreres serverversionen automatisk, hvis det er muligt, ellers anvendes version 14 som standard. Ikke-engelske SharePoint-websteder kræver mindst version 15.



## Category
Accessing data
