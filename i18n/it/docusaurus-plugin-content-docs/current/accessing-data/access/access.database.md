---
title: Access.Database
---

# Access.Database


Restituisce una rappresentazione strutturale di un database di Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Restituisce una rappresentazione strutturale di un database di Access, `database`. È possibile specificare un parametro di record facoltativo, `options`, per controllare le seguenti opzioni:

-   `CreateNavigationProperties` : Espressione logica (true/false) che consente di scegliere se generare proprietà di navigazione per i valori restituiti (il valore predefinito è false).
-   `NavigationPropertyNameGenerator` : Funzione usata per la creazione dei nomi per le proprietà di navigazione.

Ad esempio, il parametro di record è specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\].



## Category
Accessing data
