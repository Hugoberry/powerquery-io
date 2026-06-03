---
title: Odbc.DataSource
---

# Odbc.DataSource


Restituisce una tabella di tabelle e viste SQL dall'origine dati ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle e viste SQL dall'origine dati ODBC specificata dalla stringa di connessione `connectionString`. `connectionString` può essere un testo o un record di coppie valore-proprietà. I valori di proprietà possono essere di testo o numerici. Per specificare altre proprietà, è possibile specificare un parametro di record facoltativo `options`. Il record può contenere i campi seguenti:

-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è true).
-   `HierarchicalNavigation` : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito è true).
-   `ConnectionTimeout` : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito è 15 secondi.
-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.
-   `SqlCompatibleWindowsAuth` : Espressione logica (true/false) che determina se produrre opzioni della stringa di connessione compatibili con SQL Server per Autenticazione di Windows. Il valore predefinito è true.


## Examples

### Example #1
Restituisce le tabelle e le viste SQL dalla stringa di connessione specificata.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
