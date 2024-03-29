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

Returnerer en tabel, der indeholder en række for hver mappe og hvert dokument, der blev fundet på det angivne SharePoint-websted, <code>url</code>. Hver række indeholder egenskaber for mappen eller filen og et link til indholdet. <code>options</code> kan angives for at styre følgende indstillinger:    <ul><li><code>ApiVersion</code> : Et tal (14 eller 15) eller teksten &quot;Auto&quot;, der angiver, hvilken SharePoint API-version der skal anvendes til dette websted. Hvis den ikke er angivet, anvendes API-version 14. N&#229;r Auto er angivet, registreres serverversionen automatisk, hvis det er muligt, ellers anvendes version 14 som standard. Ikke-engelske SharePoint-websteder kr&#230;ver mindst version 15.</li></ul>    



## Category
Accessing data
