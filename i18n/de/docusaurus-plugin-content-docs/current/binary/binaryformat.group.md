---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Gibt ein Binärformat zurück, das eine Gruppe von Elementen liest.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Die Parameter lauten wie folgt:<ul><li>Der Parameter <code>binaryFormat</code> gibt das Binärformat des Schlüsselwerts an.</li><li>Der Parameter <code>group</code> bietet Informationen zur Gruppe der bekannten Elemente.</li><li>Der optionale Parameter <code>extra</code> kann verwendet werden, um eine Funktion anzugeben, die einen Binärformatwert für den Wert nach einem unerwarteten Schlüssel zurückgibt. Wenn der Parameter <code>extra</code> nicht angegeben wird, tritt bei unerwarteten Schlüsselwerten ein Fehler auf.</li></ul>Der Parameter <code>group</code> gibt eine Liste mit Elementdefinitionen an. Jede Elementdefinition ist eine Liste mit 3 bis 5 Werten:<ul><li>Schlüsselwert: Der Wert des Schlüssels, der dem Element entspricht. Dieser muss in der Gruppe von Elementen eindeutig sein.</li><li>Elementformat. Das Binärformat, das dem Wert des Elements entspricht. Dies ermöglicht, dass jedes Element ein anderes Format aufweist. </li><li>Elementvorkommen. Der <code>BinaryOccurrence.Type</code>-Wert, der angibt, wie oft das Element erwartungsgemäß in der Gruppe angezeigt wird. Erforderliche Elemente, die nicht vorhanden sind, verursachen einen Fehler. Erforderliche oder optionale Duplikatelemente werden wie nicht behandelte Schlüsselwerte behandelt.</li><li>Standardelementwert (optional). Wenn der Standardelementwert in der Elementdefinitionsliste angezeigt wird und nicht NULL ist, wird dieser Wert anstelle des Standardwerts angezeigt. Der Standardwert für wiederkehrende oder optionale Elemente ist NULL. Der Standardwert für wiederkehrende Werte ist eine leere Liste \{ }.</li><li>Elementwerttransformation (optional). Wenn die Funktion für die Elementwerttransformation in der Elementdefinitionsliste vorhanden und nicht NULL ist, wird sie aufgerufen, um den Elementwert zu transformieren, bevor er zurückgegeben wird. Die Transformationsfunktion wird nur aufgerufen, wenn das Element in der Eingabe vorhanden ist. (Es wird nie mit dem Standardwert aufgerufen.) </li></ul>


## Examples

### Example #1 
Nachstehend wird von Folgendem ausgegangen: Schlüsselwert mit einem Byte und 4 erwarteten Elementen in der Gruppe, die nach dem Schlüssel ein Byte Daten aufweisen.  Die Elemente werden in der Eingabe wie folgt angezeigt:&lt;ul&gt;&lt;li&gt;Schlüssel 1 ist erforderlich und wird nicht mit Wert 11 angezeigt.&lt;/li&gt;&lt;li&gt;Schlüssel 2 wird wiederholt, zweimal mit Wert 22 angezeigt und führt zu einem Wert von \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Schlüssel 3 ist optional, wird nicht angezeigt und führt zum Wert NULL.&lt;/li&gt;&lt;li&gt;Schlüssel 4 wird wiederholt, jedoch nicht angezeigt und führt zu einem Wert von \{ }.&lt;/li&gt;&lt;li&gt;Schlüssel 5 ist nicht Teil der Gruppe, wird jedoch einmal mit Wert 55 angezeigt.  Die zusätzliche Funktion wird mit dem Schlüsselwert 5 aufgerufen und gibt das Format zurück, das diesem Wert entspricht (BinaryFormat.Byte).  Der Wert 55 wird gelesen und verworfen.&lt;/li&gt;&lt;/ul&gt;
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
Das folgende Beispiel veranschaulicht die Elementwerttransformation und den Standardelementwert.   Das wiederkehrende Element mit Schlüssel 1 summiert die Liste der gelesenen Werte mit List.Sum.  Das optionale Element mit Schlüssel 2 weist einen Standardwert von 123 statt NULL auf.
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
