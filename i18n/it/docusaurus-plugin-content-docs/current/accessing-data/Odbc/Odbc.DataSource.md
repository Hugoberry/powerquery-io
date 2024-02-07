---
title: Odbc.DataSource
---

# Odbc.DataSource


Restituisce una tabella di tabelle e viste SQL dall&#39;origine dati ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di tabelle e viste SQL dall'origine dati ODBC specificata dalla stringa di connessione <code>connectionString</code>. <code>connectionString</code> può essere un testo o un record di coppie valore-proprietà. I valori di proprietà possono essere di testo o numerici. Per specificare altre proprietà, è possibile specificare un parametro di record facoltativo <code>options</code>. Il record può contenere i campi seguenti:    <ul><li><code>CreateNavigationProperties</code> : Espressione logica (true/false) che consente di scegliere se generare propriet&#224; di navigazione per i valori restituiti (il valore predefinito &#232; true).</li><li><code>HierarchicalNavigation</code> : Espressione logica (true/false) che consente di scegliere se visualizzare le tabelle raggruppate in base al nome del relativo schema (il valore predefinito &#232; true).</li><li><code>ConnectionTimeout</code> : Valore che controlla il tempo di attesa di un tentativo di connessione al server prima che venga abbandonato. Il valore predefinito &#232; 15 secondi.</li><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li><li><code>SqlCompatibleWindowsAuth</code> : Espressione logica (true/false) che determina se produrre opzioni della stringa di connessione compatibili con SQL Server per Autenticazione di Windows. Il valore predefinito &#232; true.</li></ul>


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
