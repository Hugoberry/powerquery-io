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

Hiermee wordt een tabel geretourneerd die een rij bevat voor elk lijstitem dat in de opgegeven SharePoint-lijst, <code>url</code>, wordt gevonden. Elke rij bevat eigenschappen van de lijst. U kunt <code>options</code> opgeven om de volgende opties te bepalen:    <ul><li><code>ApiVersion</code> : Een getal (14 of 15) of de tekst Auto waarmee de versie wordt aangegeven van de SharePoint-API die voor deze site moet worden gebruikt. Als er geen waarde wordt opgegeven, wordt API-versie 14 gebruikt. Wanneer Auto is opgegeven, wordt indien mogelijk de serverversie automatisch gelezen, anders is de standaardversie 14. Voor niet-Engelse SharePoint-sites is minstens versie 15 vereist.</li><li><code>Implementation</code> : Optioneel. Hiermee geeft u op welke versie van de SharePoint-connector moet worden gebruikt. Geaccepteerde waarden zijn &#39;2.0&#39; of &#39;null&#39;. Als de waarde &#39;2.0&#39; is, wordt de 2.0-implementatie van de SharePoint-connector gebruikt. Als de waarde &#39;null&#39; is, wordt de oorspronkelijke implementatie van de SharePoint-connector gebruikt.</li><li><code>ViewMode</code> : Optioneel. Deze optie is alleen geldig voor implementatie 2.0. Geaccepteerde waarden zijn &#39;all&#39; en &#39;default&#39;. Als er geen waarde is opgegeven, wordt de waarde ingesteld op &#39;all&#39;. Wanneer &#39;all&#39; is opgegeven, bevat de weergave alle door de gebruiker gemaakte en door het systeem gedefinieerde kolommen. Wanneer &#39;standaard&#39; is opgegeven, komt de weergave overeen met wat de gebruiker ziet wanneer de lijst online wordt bekeken in de weergave die de gebruiker in de instellingen als &#39;standaard&#39; heeft ingesteld. Als de gebruiker de standaardweergave bewerkt om door de gebruiker gemaakte of door het systeem gedefinieerde kolommen toe te voegen of te verwijderen, of door een nieuwe weergave te maken en deze als standaard in te stellen, worden deze wijzigingen doorgegeven via de connector.</li><li><code>DisableAppendNoteColumns</code> : Hiermee voorkomt u dat de connector een afzonderlijk eindpunt gebruikt voor notitiekolommen.</li></ul>    



## Category
Accessing data
