---
title: Essbase.Cubes
---

# Essbase.Cubes


Restituisce i cubi in un'istanza di Essbase raggruppati per server Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella di cubi raggruppati per server Essbase da un'istanza di Essbase nel server della piattaforma di strumenti analitici `url`. È possibile specificare un parametro di record facoltativo `options` per controllare le opzioni seguenti:

-   `CommandTimeout` : Valore che controlla la durata di esecuzione consentita della query sul lato server prima che venga annullata. Il valore predefinito è dieci minuti.



## Category
Accessing data
