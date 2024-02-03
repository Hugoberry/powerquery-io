---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importa i dati da un database Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella che elenca le tabelle nel server <code>cluster Amazon Redshift</code> nel database <code></code>.  È possibile specificare un parametro di record facoltativo, <code>opzioni</code>, per controllare le opzioni seguenti:<ul><li><code>Nome provider</code>: valore di testo da utilizzare come nome provider per la connessione. Viene usato quando si usa Microsoft Authentication.</li><li><code>Dimensione batch</code>: il numero di righe recuperate in una singola chiamata al server.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



