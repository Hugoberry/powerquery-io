---
title: SharePoint.Contents
---

# SharePoint.Contents


Retourneert een tabel die inhoud van een SharePoint-site bevat.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd die een rij bevat voor elke map en elk document dat in de opgegeven SharePoint-lijst, `url`, wordt gevonden. Elke rij bevat eigenschappen van de map of het bestand en een koppeling naar de bijbehorende inhoud. U kunt `options` opgeven om de volgende opties te bepalen:

-   `ApiVersion` : Een getal (14 of 15) of de tekst Auto waarmee de versie wordt aangegeven van de SharePoint-API die voor deze site moet worden gebruikt. Als er geen waarde wordt opgegeven, wordt API-versie 14 gebruikt. Wanneer Auto is opgegeven, wordt indien mogelijk de serverversie automatisch gelezen, anders is de standaardversie 14. Voor niet-Engelse SharePoint-sites is minstens versie 15 vereist.
-   `Implementation` : Optioneel. Hiermee geeft u op welke versie van de SharePoint-connector moet worden gebruikt. Geaccepteerde waarden zijn '2.0' of 'null'. Als de waarde '2.0' is, wordt de 2.0-implementatie van de SharePoint-connector gebruikt. Als de waarde 'null' is, wordt de oorspronkelijke implementatie van de SharePoint-connector gebruikt.



## Category
Accessing data
