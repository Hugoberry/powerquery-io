---
title: BinaryFormat.List
---

# BinaryFormat.List


Restituisce un formato binario che legge una sequenza di elementi e restituisce un elenco.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Restituisce un formato binario che legge una sequenza di elementi e restituisce un elemento <code>list</code>.  Il parametro <code>binaryFormat</code> specifica il formato binario di ogni elemento.  Sono disponibili tre modalità per determinare il numero di elementi letti: <ul><li>Se <code>countOrCondition</code> non viene specificato, il formato binario leggerà fino all'esaurimento degli elementi.</li><li>Se <code>countOrCondition</code> è un numero, il formato binario leggerà il numero di elementi specificato.</li><li>Se <code>countOrCondition</code> è una funzione, la funzione verrà richiamata per ogni elemento letto.  La funzione restituisce true per continuare e false per arrestare la lettura degli elementi.  L'elemento finale è incluso nell'elenco.</li><li>Se <code>countOrCondition</code> è un formato binario, si presume che il conteggio degli elementi preceda l'elenco e il formato specificato viene utilizzato per leggere il conteggio.</li></ul>


## Examples

### Example #1 
Leggere i byte fino alla fine dei dati.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Leggere due byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Leggere i byte finché il valore di byte non è maggiore o uguale a due.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
