---
title: Vertica.Database
---

# Vertica.Database


## Description

Importa i dati da Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella di schemi disponibile nel server denominato in base al parametro <code>server</code> nel database denominato in base al parametro <code>database</code>.È possibile fornire un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:<ul>    <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito dipende dal driver.</li>    <li><code>CommandTimeout </code>: valore che controlla la durata di esecuzione della query sul lato server prima che venga annullata. Il valore predefinito dipende dal driver.</li></ul>


## Examples

### Example #1 
Elenca le tabelle in Vertica
```powerquery

```



