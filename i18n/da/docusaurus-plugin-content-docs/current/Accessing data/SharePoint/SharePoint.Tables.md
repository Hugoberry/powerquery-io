---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Returnerer en tabel, der indeholder indhold fra en SharePoint-liste


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel, der indeholder en række for hvert listeelement, der blev fundet på den angivne SharePoint-liste, <code>url</code>. Hver række indeholder egenskaber for listen. <code>options</code> kan angives for at styre følgende indstillinger:    <ul><li><code>ApiVersion</code> : Et tal (14 eller 15) eller teksten &quot;Auto&quot;, der angiver, hvilken SharePoint API-version der skal anvendes til dette websted. Hvis den ikke er angivet, anvendes API-version 14. N&#229;r Auto er angivet, registreres serverversionen automatisk, hvis det er muligt, ellers anvendes version 14 som standard. Ikke-engelske SharePoint-websteder kr&#230;ver mindst version 15.</li><li><code>Implementation</code> : Valgfri. Angiver, hvilken version af SharePoint-connectoren der skal bruges. Accepterede v&#230;rdier er &quot;2.0&quot; eller null. Hvis v&#230;rdien er &quot;2.0&quot;, bruges 2.0-implementeringen af SharePoint-connectoren. Hvis v&#230;rdien er null, bruges den oprindelige implementering af SharePoint-connectoren.</li><li><code>ViewMode</code> : Valgfri. Denne indstilling er kun gyldig for implementering 2.0. Accepterede v&#230;rdier er &quot;Alle&quot; og &quot;Standard&quot;. Hvis der ikke er angivet en v&#230;rdi, angives v&#230;rdien til &quot;Alle&quot;. N&#229;r &quot;Alle&quot; er angivet, indeholder visningen alle brugerdefinerede og systemdefinerede kolonner. N&#229;r &quot;Standard&quot; er angivet, svarer visningen til det, brugeren ser, n&#229;r vedkommende kigger p&#229; listen online i den visning, som brugeren har angivet som standard i sine indstillinger. Hvis brugeren redigerer standardvisningen for at tilf&#248;je eller fjerne enten brugerdefinerede eller systemdefinerede kolonner eller ved at oprette en ny visning og angive den som standard, overf&#248;res disse &#230;ndringer via connectoren.</li><li><code>DisableAppendNoteColumns</code> : Forhindrer forbindelsen i at bruge et separat slutpunkt til notekolonner.</li></ul>    



## Category
Accessing data
