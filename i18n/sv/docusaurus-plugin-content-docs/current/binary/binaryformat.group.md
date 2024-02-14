---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Returnerar ett binärformat som läser en grupp med objekt.


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

Parametrarna är som följer:<ul><li>Parametern <code>binaryFormat</code> anger binärformatet för nyckelvärdet.</li><li>Parametern <code>group</code> ger information om gruppen med kända objekt.</li><li>Den valfria parametern <code>extra</code> kan användas för att ange en funktion som returnerar ett värde i binärformat för oväntade nyckelvärden.  Om parametern <code>extra</code> inte anges returneras ett fel om det finns oväntade nyckelvärden.</li></ul>Parametern <code>group</code> anger en lista med objektdefinitioner.  Varje objektdefinition är en lista som innehåller mellan 3 och 5 värden enligt följande:<ul><li>Nyckelvärde.  Värdet på den nyckel som hör till objektet.  Detta måste vara ett unikt värde i uppsättningen med objekt.</li><li>Objektformat.  Binärformatet för objektets värde.  Detta gör att objekten kan ha olika format. </li><li>Objektförekomst.  <code>BinaryOccurrence.Type</code>-värdet som anger hur många gånger objektet förväntas förekomma i gruppen.   Obligatoriska objekt som saknas genererar ett fel.  Obligatoriska eller valfria dubblettobjekt hanteras som oväntade nyckelvärden.</li><li>Standardobjektvärde (valfritt).  Om standardobjektvärdet visas i objektdefinitionslistan och det inte är null, används det i stället för standardvärdet.  Standardvärdet för upprepade eller valfria objekt är null, och standardvärdet för upprepade värden är en tom lista \{ }.</li><li>Objektvärdetransformering (valfritt).   Om funktionen för objektvärdetransformering finns med i objektdefinitionslistan och den inte är null, anropas funktionen för att transformera objektvärdet innan det returneras.  Transform-funktionen anropas bara om objektet förekommer i dina indata (den anropas aldrig med standardvärdet). </li></ul>


## Examples

### Example #1 
Följande förutsätter ett nyckelvärde som är en enskild byte, med 4 förväntade objekt i gruppen som samtliga har en byte data som följer efter nyckeln. Objekten visas i indata på följande sätt:&lt;ul&gt;&lt;li&gt;Nyckel 1 är obligatorisk och visas med värdet 11.&lt;/li&gt;&lt;li&gt;Nyckel 2 upprepas och visas två gånger med värdet 22 och resulterar i värdet \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Nyckel 3 är valfri, visas inte och resulterar i ett null-värde.&lt;/li&gt;&lt;li&gt;Nyckel 4 upprepas men visas inte och resulterar i värdet \{ }.&lt;/li&gt;&lt;li&gt;Nyckel 5 är inte en del av gruppen, men visas en gång med värdet 55. Extra-funktionen anropas med nyckelvärdet 5 och returnerar formatet för det värdet (BinaryFormat.Byte). Värdet 55 läses och ignoreras.&lt;/li&gt;&lt;/ul&gt;
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
Följande exempel illustrerar objektvärdetransformeringen och standardobjektvärdet. Det upprepade objektet med nyckel 1 summerar listan med värden som läses med List.Sum. Det valfria objektet med nyckel 2 har standardvärdet 123 i stället för null.
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
