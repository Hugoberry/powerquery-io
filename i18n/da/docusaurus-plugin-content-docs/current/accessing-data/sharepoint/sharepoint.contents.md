---
title: SharePoint.Contents
---

# SharePoint.Contents


Returnerer en tabel, der indeholder indhold fra et SharePoint-websted.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hver mappe og hvert dokument, der blev fundet på det angivne SharePoint-websted, `url`. Hver række indeholder egenskaber for mappen eller filen og et link til indholdet. `options` kan angives for at styre følgende indstillinger:

-   `ApiVersion` : Et tal (14 eller 15) eller teksten "Auto", der angiver, hvilken SharePoint API-version der skal anvendes til dette websted. Hvis den ikke er angivet, anvendes API-version 14. Når Auto er angivet, registreres serverversionen automatisk, hvis det er muligt, ellers anvendes version 14 som standard. Ikke-engelske SharePoint-websteder kræver mindst version 15.
-   `Implementation` : Valgfri. Angiver, hvilken version af SharePoint-connectoren der skal bruges. Accepterede værdier er "2.0" eller null. Hvis værdien er "2.0", bruges 2.0-implementeringen af SharePoint-connectoren. Hvis værdien er null, bruges den oprindelige implementering af SharePoint-connectoren.



## Category
Accessing data
