---
title: SapHana.Database
---

# SapHana.Database


Restituisce i pacchetti in un database SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di pacchetti multidimensionali dal database SAP HANA `server`. È possibile specificare un parametro di record facoltativo, `options`, per controllare le opzioni seguenti:

-   `Query` : Query SQL nativa usata per recuperare i dati. Se la query genera più set di risultati, viene restituito solo il primo.
-   `Distribution` : Oggetto SapHanaDistribution che imposta il valore della proprietà "Distribution" nella stringa di connessione. Il routing delle istruzioni è il metodo usato per la valutazione del nodo server corretto di un sistema distribuito prima dell'esecuzione dell'istruzione. Il valore predefinito è SapHanaDistribution.All.
-   `Implementation` : Consente di specificare l'implementazione del connettore SAP HANA da usare.
-   `EnableColumnBinding` : Associa le variabili alle colonne di un set di risultati SAP HANA durante il recupero dei dati. Può potenzialmente migliorare le prestazioni a causa di un utilizzo leggermente più elevato della memoria. Il valore predefinito è False.
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito è 15 secondi.
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.



## Category
Accessing data
