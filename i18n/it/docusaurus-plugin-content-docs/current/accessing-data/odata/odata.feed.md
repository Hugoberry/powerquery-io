---
title: OData.Feed
---

# OData.Feed


Restituisce una tabella di feed OData offerti da un servizio OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Restituisce una tabella di feed OData offerti da un servizio OData da un URI `serviceUri`, intestazioni `headers`. È possibile specificare un valore booleano che specifica se utilizzare connessioni simultanee o un parametro di record facoltativo, `options`, per controllare le opzioni seguenti:

-   `Query`: consente di aggiungere parametri di query all'URL a livello di codice senza doversi preoccupare di escape.
-   `Headers`: se si specifica questo valore come record, verranno specificate intestazioni aggiuntive per una richiesta HTTP.
-   `ExcludedFromCacheKey`: se si specifica questo valore come elenco, le chiavi di intestazione HTTP non verranno escluse dal calcolo per la memorizzazione nella cache dei dati.
-   `ApiKeyName`: se il sito di destinazione include la nozione di una chiave API, questo parametro può essere usato per specificare il nome (non il valore) del parametro della chiave che deve essere usato nell'URL. Il valore della chiave effettivo è specificato nella credenziale.
-   `Timeout`: se si specifica questo valore come durata, il timeout di una richiesta HTTP verrà modificato. Il valore predefinito è 600 secondi.
-   `EnableBatch`: valore logico (true/false) che imposta se consentire la generazione di una richiesta di $batch OData se MaxUriLength viene superato (il valore predefinito è false).
-   `MaxUriLength`: numero che indica la lunghezza massima di un URI consentito inviato a un servizio OData. Se è stato superato ed EnableBatch è true, la richiesta verrà effettuata a un endpoint $batch di OData. In caso contrario avrà esito negativo (il valore predefinito è 2048).
-   `Concurrent`: valore logico (true/false) che consente l'esecuzione di richieste contemporanee al servizio, se impostato su true. Se impostato su false, le richieste verranno effettuate in sequenza. Se non è specificato, il valore verrà determinato dall'annotazione AsynchronousRequestsSupported del servizio. Se il servizio non specifica se AsynchronousRequestsSupported è supportato, le richieste verranno effettuate in modo sequenziale.
-   `ODataVersion`: numero (3 o 4) che specifica la versione del protocollo OData da utilizzare per il servizio OData. Se non è specificato, verranno richieste tutte le versioni supportate. La versione del servizio verrà determinata dall'intestazione OData-Version restituita dal servizio.
-   `FunctionOverloads`: un valore logico (true/false) che, se impostato su true, consente di elencare gli overload di importazione delle funzioni nello strumento di spostamento come voci separate. Se impostato su false, gli overload di importazione delle funzioni verranno elencati come una funzione di unione nello strumento di spostamento. Valore predefinito per V3: false. Valore predefinito per V4: true.
-   `MoreColumns`: espressione logica (true/false) che, se impostata su true, aggiunge una colonna "More Columns" a ogni feed di entità contenente tipi aperti e tipi polimorfici. Contiene i campi non dichiarati nel tipo di base. Se impostata su false, il campo non è presente. L'impostazione predefinita è false.
-   `IncludeAnnotations`: elenco delimitato da virgole di criteri o nomi di termini qualificati dello spazio dei nomi da includere con "\*" come carattere jolly. Per impostazione predefinita nessuna delle annotazioni è inclusa.
-   `IncludeMetadataAnnotations`: elenco delimitato da virgole di nomi di termine qualificati o modelli di spazio dei nomi da includere nelle richieste di documenti di metadati, con "\*" come carattere jolly. Per impostazione predefinita, include le stesse annotazioni di IncludeAnnotations.
-   `OmitValues`: consente al servizio OData di evitare di scrivere determinati valori nelle risposte. Se confermato dal servizio, tali valori verranno dedotti dai campi omessi.. Le opzioni includono:
    -   `ODataOmitValues.Nulls`: consente al servizio OData di omettere i valori null.
-   `Implementation`: specifica l'implementazione del connettore OData da usare. I valori validi sono "2.0" o null.


## Examples

### Example #1
Collegarsi al servizio TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
