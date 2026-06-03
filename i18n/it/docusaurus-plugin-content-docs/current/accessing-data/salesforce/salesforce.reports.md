---
title: Salesforce.Reports
---

# Salesforce.Reports


Restituisce i report dall'account Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Restituisce i report dell'account Salesforce specificato nelle credenziali. L'account verrà connesso tramite l'ambiente di `loginUrl` specificato. Se l'ambiente non è specificato, l'account si connetterà all'ambiente di produzione (https://login.salesforce.com). È possibile fornire un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `ApiVersion` : Versione dell'API Salesforce da usare per questa query. Se questo valore non è specificato, verrà usata la versione 29.0 dell'API.
-   `Timeout` : Valore di durata che controlla il tempo di attesa per la richiesta al server prima che venga abbandonata. Il valore predefinito è specifico dell'origine.



## Category
Accessing data
