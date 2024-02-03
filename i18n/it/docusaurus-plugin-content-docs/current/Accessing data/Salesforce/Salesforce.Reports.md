---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Restituisce i report dall&#39;account Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Restituisce i report dell'account Salesforce specificato nelle credenziali. L'account verrà connesso tramite l'ambiente di <code>loginUrl</code> specificato. Se l'ambiente non è specificato, l'account si connetterà all'ambiente di produzione (https://login.salesforce.com). È possibile fornire un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>ApiVersion</code> : Versione dell&#39;API Salesforce da usare per questa query. Se questo valore non &#232; specificato, verr&#224; usata la versione 29.0 dell&#39;API.</li><li><code>Timeout</code> : Valore di durata che controlla il tempo di attesa per la richiesta al server prima che venga abbandonata. Il valore predefinito &#232; specifico dell&#39;origine.</li></ul>    



## Category
Accessing data
