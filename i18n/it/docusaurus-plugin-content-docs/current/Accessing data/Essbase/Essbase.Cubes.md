---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Restituisce i cubi in un&#39;istanza di Essbase raggruppati per server Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Restituisce una tabella di cubi raggruppati per server Essbase da un'istanza di Essbase nel server della piattaforma di strumenti analitici <code>url</code>. È possibile specificare un parametro di record facoltativo <code>options</code> per controllare le opzioni seguenti:    <ul><li><code>CommandTimeout</code> : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito &#232; dieci minuti.</li></ul>



## Category
Accessing data
