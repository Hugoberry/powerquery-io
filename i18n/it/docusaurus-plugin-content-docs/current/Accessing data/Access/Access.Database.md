---
title: Access.Database
---

# Access.Database


## Description

Restituisce una rappresentazione strutturale di un database di Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Restituisce una rappresentazione strutturale di un database di Access, <code>database</code>. È possibile specificare un parametro di record facoltativo, <code>options</code>, per controllare le opzioni seguenti:    <ul><li><code>CreateNavigationProperties</code> : Espressione logica (true/false) che consente di scegliere se generare propriet&#224; di navigazione per i valori restituiti (il valore predefinito &#232; false).</li><li><code>NavigationPropertyNameGenerator</code> : Funzione usata per la creazione dei nomi per le propriet&#224; di navigazione.</li></ul>    Ad esempio, il parametro di record è specificato nel formato [opzione1 = valore1, opzione2 = valore2...].



## Category
Accessing data
