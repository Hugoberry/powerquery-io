---
title: Salesforce.Data
---

# Salesforce.Data


Restituisce gli oggetti dall'account Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Restituisce gli oggetti dell'account Salesforce specificato nelle credenziali. L'account verrà connesso tramite l'ambiente di `loginUrl` specificato. Se l'ambiente non è specificato, l'account si connetterà all'ambiente di produzione (https://login.salesforce.com). È possibile fornire un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è false).
-   `ApiVersion` : Versione dell'API Salesforce da usare per questa query. Se questo valore non è specificato, verrà usata la versione 29.0 dell'API.
-   `Timeout` : Valore di durata che controlla il tempo di attesa per la richiesta al server prima che venga abbandonata. Il valore predefinito è specifico dell'origine.



## Category
Accessing data
