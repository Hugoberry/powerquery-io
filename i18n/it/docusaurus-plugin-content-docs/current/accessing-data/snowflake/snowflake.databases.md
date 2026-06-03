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

Restituisce una tabella che elenca le tabelle nel `warehouse` Snowflake Computing ubicato in `server`. È possibile specificare un parametro di record facoltativo, `options`, per controllare le opzioni seguenti:

-   `Role`: valore di testo da usare come nome del ruolo per la connessione.
-   `CreateNavigationProperties`: valore logico (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true)
-   `ConnectionTimeout`: numero di secondi di attesa delle risposte di rete da Snowflake.
-   `CommandTimeout`: numero di secondi di attesa dell'esecuzione di una query.


## Examples

### Example #1
Elenca le tabelle in un data warehouse Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



