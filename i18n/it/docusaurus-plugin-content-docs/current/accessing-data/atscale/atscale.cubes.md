---
title: AtScale.Cubes
---

# AtScale.Cubes


Importa/Recupera tramite DirectQuery i dati del cubo da un&#39;istanza di AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Restituisce i dati del cubo da AtScale nel server <code>server</code>. È possibile specificare il parametro di record facoltativo <code>options</code> per controllare le opzioni seguenti:<ul>        <li><code>TypedMeasureColumns</code>: valore logico che indica se per i tipi delle colonne di misura aggiunte verranno usati i tipi specificati nel modello multidimensionale o tabulare. Se è impostato su false, verrà usato il tipo "number" per tutte le colonne di misura. Il valore predefinito per questa opzione è false.</li>        <li><code>CommandTimeout</code>: durata in secondi che controlla il tempo consentito per l'esecuzione della query lato server prima che venga annullata. Il valore predefinito dipende dal driver. </li>        <li><code>ConnectionTimeout</code>: durata in secondi che controlla il tempo di attesa prima che un tentativo di connessione al server venga interrotto. Il valore predefinito dipende dal driver. </li></ul>Il parametro di record viene specificato nel formato [opzione1 = valore1, opzione2 = valore2...].


