---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Gibt ein Binärformat zurück, das das nächste Binärformat auf der Grundlage eines bereits gelesenen Werts auswählt.


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

Gibt ein Binärformat zurück, das das nächste Binärformat auf der Grundlage eines bereits gelesenen Werts auswählt. Der Wert im Binärformat, der von dieser Funktion erzeugt wird, besitzt mehrere Phasen:

-   Das durch den Parameter '`binaryFormat`' angegebene Binärformat wird verwendet, um einen Wert zu lesen.
-   Der Wert wird an die durch den Parameter '`chooseFunction`' angegebene Auswahlfunktion übergeben.
-   Die Auswahlfunktion überprüft den Wert und gibt ein zweites Binärformat zurück.
-   Das zweite Binärformat wird verwendet, um einen zweiten Wert zu lesen.
-   Wenn die Zusammenfassungsfunktion angegeben ist, werden der erste und zweite Wert an die Zusammenfassungsfunktion übergeben und der resultierende Wert zurückgegeben.
-   Wenn die Zusammenfassungsfunktion nicht angegeben ist, wird der zweite Wert zurückgegeben.
-   Der zweite Wert wird zurückgegeben.

Der optionale Parameter '`type`' gibt die Art des Binärformats an, das von der Auswahlfunktion zurückgegeben wird. Sie können entweder `type any`, `type list` oder `type binary` angeben. Ohne Angabe des Parameters '`type`' wird `type any` verwendet. Bei Verwendung von `type list` oder `type binary` kann vom System u. U. anstelle eines gepufferten Werts ein `binary`\- oder `list`\-Streamingwert zurückgegeben werden, wodurch sich ggf. der Arbeitsspeicherbedarf beim Lesen des Formats verringert.


## Examples

### Example #1
Liest eine Liste mit Bytes, bei der die Anzahl von Elementen durch das erste Byte bestimmt wird.
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
Liest eine Liste mit Bytes, bei der die Anzahl von Elementen durch das erste Byte bestimmt wird, und behält das erste gelesene Byte bei.
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
Liest eine Liste mit Bytes, bei der die Anzahl von Elementen durch das erste Byte bestimmt wird, unter Verwendung einer Streamingliste.
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
