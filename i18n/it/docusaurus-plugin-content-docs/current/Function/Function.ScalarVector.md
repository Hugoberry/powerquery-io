---
title: Function.ScalarVector
---

# Function.ScalarVector


Crea una funzione scalare in aggiunta a una funzione vettoriale, inviando un batch più chiamate.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Restituisce una funzione scalare di tipo <code>scalarFunctionType</code> che richiama <code>vectorFunction</code> con una singola riga di argomenti e restituisce il relativo output singolo. Quando inoltre la funzione scalare viene applicata ripetutamente per ogni riga di una tabella di input, come in Table.AddColumn, la funzione <code>vectorFunction</code> verrà applicata una sola volta per tutti gli input.<br />A <code>vectorFunction</code> verrà passata una tabella le cui colonne corrispondono al nome e alla posizione dei parametri di <code>scalarFunctionType</code>. Ogni riga di questa tabella contiene gli argomenti per una chiamata alla funzione scalare, in cui le colonne corrispondono ai parametri di <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> deve restituire un elenco della stessa lunghezza della tabella di input, il cui elemento in ogni posizione deve essere uguale al risultato della valutazione della funzione scalare nella riga di input della stessa posizione.<br />È previsto lo streaming della tabella di input, di conseguenza <code>vectorFunction</code> dovrebbe eseguire lo streaming dell'output non appena riceve l'input e usare quindi un solo blocco di input alla volta. In particolare, <code>vectorFunction</code> non deve enumerare la relativa tabella di input più di una volta.<br />



## Category
Function
