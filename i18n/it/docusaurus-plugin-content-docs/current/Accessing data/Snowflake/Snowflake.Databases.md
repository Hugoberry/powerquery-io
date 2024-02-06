---
title: Snowflake.Databases
---

# Snowflake.Databases


Importa dati da un data warehouse Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella che elenca le tabelle nel <code>warehouse</code> Snowflake Computing ubicato in <code>server</code>. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:<ul><li><code>Role</code>: valore di testo da usare come nome del ruolo per la connessione.</li><li><code>CreateNavigationProperties</code>: valore logico (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true)</li><li><code>ConnectionTimeout</code>: numero di secondi di attesa delle risposte di rete da Snowflake.</li><li><code>CommandTimeout</code>: numero di secondi di attesa dell'esecuzione di una query.</li></ul>


## Examples

### Example #1 
Elenca le tabelle in un data warehouse Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



