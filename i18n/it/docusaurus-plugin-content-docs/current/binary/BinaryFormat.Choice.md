---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Restituisce un formato binario che sceglie il formato binario successivo in base a un valore che è già stato letto.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Restituisce un formato binario che sceglie il formato binario successivo in base a un valore che è già stato letto.  Il valore del formato binario prodotto dalla funzione opera in fasi:<ul><li>Il formato binario specificato dal parametro <code>binaryFormat</code> viene utilizzato per leggere un valore.</li><li>Il valore viene passato alla funzione di scelta specificata dal parametro <code>chooseFunction</code>.</li><li>La funzione di scelta controlla il valore e restituisce un secondo formato binario.</li><li>Il secondo formato binario viene utilizzato per leggere un secondo valore.</li><li>Se la funzione di combinazione viene specificata, il primo e il secondo valore vengono passati alla funzione di combinazione e viene restituito il valore risultante.</li><li>Se la funzione di combinazione non viene specificata, viene restituito il secondo valore.</li><li>Il secondo valore viene restituito.</li></ul>Il parametro facoltativo <code>type</code> specifica il tipo di formato binario che verrà restituito dalla funzione di scelta.  È possibile specificare <code>type any</code>, <code>type list</code> o <code>type binary</code>.  Se il parametro <code>type</code> non è specificato, viene utilizzato <code>type any</code>.   Se si utilizza <code>type list</code> o <code>type binary</code>, il sistema può essere in grado di restituire un valore <code>binary</code> o <code>list</code> di flusso anziché uno memorizzato nel buffer, riducendo in tal modo la quantità di memoria necessaria per leggere il formato.


## Examples

### Example #1 
Leggere un elenco di byte in cui il numero di elementi è determinato dal primo byte.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Leggere un elenco di byte in cui il numero di elementi è determinato dal primo byte e conservare il primo byte letto.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Leggere un elenco di byte in cui il numero di elementi è determinato dal primo byte utilizzando un elenco di flusso.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
