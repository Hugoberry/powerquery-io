---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Restituisce il risultato dell&#39;esecuzione di una query nativa su un&#39;origine dati ADO.NET.


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

Restituisce il risultato dell'esecuzione di <code>query</code> con la stringa di connessione <code>connectionString</code> usando il provider ADO.NET <code>providerName</code>. <code>connectionString</code> può essere un testo o un record di coppie valore-proprietà. I valori di proprietà possono essere di testo o numerici. Per specificare altre proprietà, è possibile specificare un parametro di record facoltativo <code>options</code>. Il record può contenere i campi seguenti:    <ul><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li><li><code>SqlCompatibleWindowsAuth</code> : Espressione logica (true/false) che determina se produrre opzioni della stringa di connessione compatibili con SQL Server per Autenticazione di Windows. Il valore predefinito &#232; true.</li></ul>



## Category
Accessing data
