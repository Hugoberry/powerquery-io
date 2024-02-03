---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Retourneert een navigeerbare tabel die de tabellen bevat die in het opgegeven account van een Azure-opslagkluis zijn te vinden.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Hiermee wordt een navigeerbare tabel geretourneerd die een rij bevat voor elke tabel die wordt gevonden op de account-URL, <code>account</code>, uit een Azure-opslagkluis. Elke rij bevat een koppeling naar de Azure-tabel. Er kan een optionele recordparameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>Timeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een aanvraag voor de server wordt afgebroken. De standaardwaarde is afhankelijk van de bron.</li></ul>



## Category
Accessing data
