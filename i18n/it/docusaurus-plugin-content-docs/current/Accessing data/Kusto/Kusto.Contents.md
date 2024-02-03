---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Importa i dati da Esplora dati di Azure (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Importa i dati dall'istanza di Esplora dati di Azure (Kusto)


## Examples

### Example #1 
Restituisce una tabella di informazioni Storm Events
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabella contenente Storm Events del database "Samples" nel cluster "help"
```



