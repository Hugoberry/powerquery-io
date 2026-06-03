---
title: Vertica.Database
---

# Vertica.Database


Importa i dati da Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di schemi disponibile nel server denominato in base al parametro `server` nel database denominato in base al parametro `database`. È possibile fornire un parametro di record facoltativo, `options`, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:

-   `ConnectionTimeout`: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.
-   `CommandTimeout` : valore che controlla la durata di esecuzione della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.


## Examples

### Example #1
Elenca le tabelle in Vertica
```powerquery

```



