---
title: AtScale.Cubes
---

# AtScale.Cubes


Importa/Recupera tramite DirectQuery i dati del cubo da un'istanza di AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Restituisce i dati del cubo da AtScale nel server `server`. È possibile specificare il parametro di record facoltativo `options` per controllare le opzioni seguenti:

-   `TypedMeasureColumns`: valore logico che indica se per i tipi delle colonne di misura aggiunte verranno usati i tipi specificati nel modello multidimensionale o tabulare. Se è impostato su false, verrà usato il tipo "number" per tutte le colonne di misura. Il valore predefinito per questa opzione è false.
-   `CommandTimeout`: durata in secondi che controlla il tempo consentito per l'esecuzione della query lato server prima che venga annullata. Il valore predefinito dipende dal driver.
-   `ConnectionTimeout`: durata in secondi che controlla il tempo di attesa prima che un tentativo di connessione al server venga interrotto. Il valore predefinito dipende dal driver.

Il parametro di record viene specificato nel formato \[opzione1 = valore1, opzione2 = valore2...\].


## Examples

### Example #1
Elenca i dati del cubo presenti in un cubo AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



