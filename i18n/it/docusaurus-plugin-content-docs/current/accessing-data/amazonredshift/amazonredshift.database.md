---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importa i dati da un database Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella che elenca le tabelle nel server `cluster Amazon Redshift` nel database `database`. È possibile specificare un parametro del record facoltativo, `opzioni`, per controllare le opzioni seguenti:

-   `Nome provider`: valore di testo da utilizzare come nome provider per la connessione. Viene usato quando si usa l'autenticazione Microsoft.
-   `Dimensione batch`: il numero di righe recuperate in una singola chiamata al server.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



