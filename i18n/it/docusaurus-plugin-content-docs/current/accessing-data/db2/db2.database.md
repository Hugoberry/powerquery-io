---
title: DB2.Database
---

# DB2.Database


Restituisce una tabella di tabelle e viste SQL disponibili in un database DB2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle e viste SQL disponibili in un database DB2 nel server `server` nell'istanza di database denominata `database`. Facoltativamente, è possibile specificare la porta con il server, separando le voci con i due punti. È possibile specificare un parametro di record opzionale, `options`, per controllare le seguenti opzioni:

-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true).
-   `NavigationPropertyNameGenerator` : Funzione usata per la creazione dei nomi per le proprietà di navigazione.
-   `Query` : Query SQL nativa usata per recuperare i dati. Se la query genera più set di risultati, viene restituito solo il primo.
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `HierarchicalNavigation` : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è true).
-   `Implementation` : Specifica l'implementazione del provider di database interno da usare. I valori validi sono: "IBM" e "Microsoft".
-   `BinaryCodePage` : Numero dell'identificatore del set di caratteri CCSID (ID set di caratteri codificati) per decodificare i dati binari di DB2 FOR BIT in stringhe di caratteri. Si applica a Implementation = "Microsoft". Impostare su 0 per disabilitare la conversione (valore predefinito). Impostare su 1 per convertire in base alla codifica del database. Impostare su un altro numero CCSID per convertire nella codifica dell'applicazione.
-   `PackageCollection` : Specifica un valore stringa per la raccolta pacchetti (il valore predefinito è "NULLID") per consentire l'uso dei pacchetti condivisi necessari per l'elaborazione di istruzioni SQL. Si applica a Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Specifica se la connessione viene effettuata tramite un gateway DB2 Connect. Si applica a Implementation = "Microsoft".

Ad esempio, il parametro di record è specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\] o \[Query = "select ..."\].



## Category
Accessing data
