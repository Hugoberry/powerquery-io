---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Restituisce i database di Analysis Services in un host specifico.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Restituisce i database in un'istanza di Analysis Services, `server`. È possibile fornire un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `TypedMeasureColumns` : Valore logico che indica se i tipi specificati nel modello multidimensionale o tabulare verranno usati per i tipi delle colonne di misura aggiunte. Se impostato su false, verrà usato il tipo "number" per tutte le colonne di misura. Il valore predefinito per questa opzione è false.
-   `Culture` : Nome delle impostazioni cultura che specifica le impostazioni per i dati. Corrisponde alla proprietà della stringa di connessione relativa all'identificatore delle impostazioni locali (LCID).
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `SubQueries` : Numero (0, 1 o 2) che imposta il valore della proprietà "SubQueries" nella stringa di connessione. Controlla il comportamento dei membri calcolati nelle sub-SELECT e nei sottocubi. Il valore predefinito è 2.
-   `Implementation`



## Category
Accessing data
