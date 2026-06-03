---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Restituisce il risultato dell'esecuzione di una query nativa su un'origine dati ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Restituisce il risultato dell'esecuzione di `query` con la stringa di connessione `connectionString` usando il provider ADO.NET `providerName`. `connectionString` può essere un testo o un record di coppie valore-proprietà. I valori di proprietà possono essere di testo o numerici. Per specificare altre proprietà, è possibile specificare un parametro di record facoltativo `options`. Il record può contenere i campi seguenti:

-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.
-   `SqlCompatibleWindowsAuth` : Espressione logica (true/false) che determina se produrre opzioni della stringa di connessione compatibili con SQL Server per Autenticazione di Windows. Il valore predefinito è true.



## Category
Accessing data
