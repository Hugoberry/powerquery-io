---
title: SharePoint.Tables
---

# SharePoint.Tables


Returnerer en tabel, der indeholder indhold fra en SharePoint-liste


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der indeholder en række for hvert listeelement, der blev fundet på den angivne SharePoint-liste, `url`. Hver række indeholder egenskaber for listen. `options` kan angives for at styre følgende indstillinger:

-   `ApiVersion` : Et tal (14 eller 15) eller teksten "Auto", der angiver, hvilken SharePoint API-version der skal anvendes til dette websted. Hvis den ikke er angivet, anvendes API-version 14. Når Auto er angivet, registreres serverversionen automatisk, hvis det er muligt, ellers anvendes version 14 som standard. Ikke-engelske SharePoint-websteder kræver mindst version 15.
-   `Implementation` : Valgfri. Angiver, hvilken version af SharePoint-connectoren der skal bruges. Accepterede værdier er "2.0" eller null. Hvis værdien er "2.0", bruges 2.0-implementeringen af SharePoint-connectoren. Hvis værdien er null, bruges den oprindelige implementering af SharePoint-connectoren.
-   `ViewMode` : Valgfri. Denne indstilling er kun gyldig for implementering 2.0. Accepterede værdier er "Alle" og "Standard". Hvis der ikke er angivet en værdi, angives værdien til "Alle". Når "Alle" er angivet, indeholder visningen alle brugerdefinerede og systemdefinerede kolonner. Når "Standard" er angivet, svarer visningen til det, brugeren ser, når vedkommende kigger på listen online i den visning, som brugeren har angivet som standard i sine indstillinger. Hvis brugeren redigerer standardvisningen for at tilføje eller fjerne enten brugerdefinerede eller systemdefinerede kolonner eller ved at oprette en ny visning og angive den som standard, overføres disse ændringer via connectoren.
-   `DisableAppendNoteColumns` : Forhindrer forbindelsen i at bruge et separat slutpunkt til notekolonner.



## Category
Accessing data
