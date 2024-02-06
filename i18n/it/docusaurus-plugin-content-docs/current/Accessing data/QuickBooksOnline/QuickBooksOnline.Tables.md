---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


Importa i dati da QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

        Restituisce una tabella che elenca le tabelle disponibili in QuickBooks Online. È possibile specificare un parametro di record facoltativo <code>options</code> per controllare le opzioni seguenti:          <ul>            <li><code>ConnectionTimeout</code>: valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato.</li>            <li><code>CommandTimeout</code>: valore che controlla la durata di esecuzione della query sul lato server prima che venga annullata.</li>          </ul>        Il parametro di record è specificato nel formato [opzione1 = valore1, opzione2 = valore2...].    


