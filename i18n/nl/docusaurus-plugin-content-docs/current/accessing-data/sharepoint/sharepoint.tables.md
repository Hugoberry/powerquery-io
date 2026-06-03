---
title: SharePoint.Tables
---

# SharePoint.Tables


Retourneert een tabel die inhoud uit een SharePoint-lijst bevat.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd die een rij bevat voor elk lijstitem dat in de opgegeven SharePoint-lijst, `url`, wordt gevonden. Elke rij bevat eigenschappen van de lijst. U kunt `options` opgeven om de volgende opties te bepalen:

-   `ApiVersion` : Een getal (14 of 15) of de tekst Auto waarmee de versie wordt aangegeven van de SharePoint-API die voor deze site moet worden gebruikt. Als er geen waarde wordt opgegeven, wordt API-versie 14 gebruikt. Wanneer Auto is opgegeven, wordt indien mogelijk de serverversie automatisch gelezen, anders is de standaardversie 14. Voor niet-Engelse SharePoint-sites is minstens versie 15 vereist.
-   `Implementation` : Optioneel. Hiermee geeft u op welke versie van de SharePoint-connector moet worden gebruikt. Geaccepteerde waarden zijn '2.0' of 'null'. Als de waarde '2.0' is, wordt de 2.0-implementatie van de SharePoint-connector gebruikt. Als de waarde 'null' is, wordt de oorspronkelijke implementatie van de SharePoint-connector gebruikt.
-   `ViewMode` : Optioneel. Deze optie is alleen geldig voor implementatie 2.0. Geaccepteerde waarden zijn 'all' en 'default'. Als er geen waarde is opgegeven, wordt de waarde ingesteld op 'all'. Wanneer 'all' is opgegeven, bevat de weergave alle door de gebruiker gemaakte en door het systeem gedefinieerde kolommen. Wanneer 'standaard' is opgegeven, komt de weergave overeen met wat de gebruiker ziet wanneer de lijst online wordt bekeken in de weergave die de gebruiker in de instellingen als 'standaard' heeft ingesteld. Als de gebruiker de standaardweergave bewerkt om door de gebruiker gemaakte of door het systeem gedefinieerde kolommen toe te voegen of te verwijderen, of door een nieuwe weergave te maken en deze als standaard in te stellen, worden deze wijzigingen doorgegeven via de connector.
-   `DisableAppendNoteColumns` : Hiermee voorkomt u dat de connector een afzonderlijk eindpunt gebruikt voor notitiekolommen.



## Category
Accessing data
