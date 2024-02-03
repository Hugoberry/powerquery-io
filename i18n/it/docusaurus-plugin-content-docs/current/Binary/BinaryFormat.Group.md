---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Restituisce un formato binario che legge un gruppo di elementi.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

I parametri sono i seguenti:<ul><li> Il parametro <code>binaryFormat</code> specifica il formato binario del valore di chiave.</li><li> Il parametro <code>group</code> include informazioni sul gruppo di elementi noti.</li><li>Il parametro facoltativo <code>extra</code> può essere usato per specificare una funzione che restituisce un valore di formato binario per il valore che segue qualsiasi chiave imprevista. Se il parametro <code>extra</code> non è specificato, verrà generato un errore se sono presenti valori di chiave imprevisti.</li></ul>Il parametro <code>group</code> specifica un elenco di definizioni di elementi. Ogni definizione di elemento è un elenco, contenente da 3 a 5 valori, come segue:<ul><li>Valore di chiave. Valore della chiave corrispondente all'elemento. Deve essere univoco all'interno del set di elementi.</li><li>Formato dell'elemento. Formato binario corrispondente al valore dell'elemento. In tal modo ogni elemento ha un formato diverso. </li><li>Occorrenza dell'elemento. Valore <code>BinaryOccurrence.Type</code> che indica quante volte si prevede che l'elemento sia presente nel gruppo. Gli elementi obbligatori non presenti causano un errore. Gli elementi duplicati obbligatori o facoltativi vengono gestiti come valori di chiave imprevisti.</li><li>Valore di elemento predefinito (facoltativo). Se il valore di elemento predefinito è presente nell'elenco di definizione di elementi e non è Null, verrà usato al posto del valore predefinito. Il valore predefinito degli elementi ripetuti o facoltativi è Null e l'impostazione predefinita per i valori ripetuti è un elenco vuoto \{ }.</li><li>Trasformazione del valore dell'elemento (facoltativo). Se la funzione di trasformazione dell'elemento è presente nell'elenco di definizione degli elementi e non è Null verrà chiamata per trasformare il valore dell'elemento prima che venga restituito. La funzione di trasformazione è chiamata solo se l'elemento è presente nell'input e non verrà chiamata mai con il valore predefinito. </li></ul>


## Examples

### Example #1 
Di seguito si presuppone un valore chiave a byte singolo, con 4 elementi previsti nel gruppo, tutti con un byte di dati dopo la chiave.  Gli elementi sono presenti nell&#39;input come segue:&lt;ul&gt;&lt;li&gt;La chiave 1 è obbligatoria ed è presente con valore 11.&lt;/li&gt;&lt;li&gt;La chiave 2 si ripete ed è presente due volte con valore 22 restituendo un valore di \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;La chiave 3 è facoltativa, non è presente e restituisce un valore Null.&lt;/li&gt;&lt;li&gt;La chiave 4 si ripete, ma non è presente e restituisce un valore di \{ }.&lt;/li&gt;&lt;li&gt;La chiave 5 non fa parte del gruppo, ma è presente una volta con valore 55.  La funzione aggiuntiva è chiamata con il valore di chiave 5 e restituisce il formato corrispondente al valore (BinaryFormat.Byte).  Il valore 55 viene letto e rimosso.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
Nel seguente esempio viene illustrata la trasformazione del valore dell&#39;elemento e il valore predefinito dell&#39;elemento.   L&#39;elemento ripetuto con chiave 1 somma l&#39;elenco dei valori letti utilizzando List.Sum.  L&#39;elemento facoltativo con chiave 2 contiene un valore predefinito di 123 anziché Null.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
