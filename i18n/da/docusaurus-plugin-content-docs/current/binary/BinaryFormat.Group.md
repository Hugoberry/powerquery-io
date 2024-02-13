---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Returnerer et binært format, der læser en gruppe elementer.


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

Parametrene er som følger:<ul><li>Parameteren <code>binaryFormat</code> angiver det binære format for nøgleværdien.</li><li>Parameteren <code>group</code> giver oplysninger om gruppen af kendte elementer.</li><li>Den valgfrie parameter <code>extra</code> kan bruges til at angive en funktion, der returnerer en binær formatværdi for værdien, efterfulgt af enhver nøgle, der var uventet.  Hvis parameteren <code>extra</code> ikke angives, vises der en fejl, hvis der er uventede nøgleværdier.</li></ul>Parameteren <code>group</code> angiver en liste over elementdefinitioner.  Hver elementdefinition er en liste, der indeholder 3-5 værdier, som følger:<ul><li>Nøgleværdi.  Værdien af den nøgle, der svarer til elementet.  Den skal være entydig inden for elementsættet.</li><li>Elementformat.  Det binære format, der svarer til værdien af elementet.  På den måde kan hvert element have sit eget format. </li><li>Elementforekomst.  <code>BinaryOccurence. Type</code>Forekomstværdien for hvor ofte elementet forventes at blive vist i gruppen.   Påkrævede elementer, der ikke findes, udløser en fejl.  Påkrævede eller valgfrie dubletværdier håndteres som uventede nøgleværdier.</li><li>Standardværdi for element (valgfrit).  Hvis standardelementværdien optræder på listen over elementdefinitioner, og den ikke er null, bliver den brugt i stedet for standarden.  Standarden for gentagne eller valgfrie elementer er null, og standarden for gentagne værdier er en tom liste \{ }.</li><li>Transformation af elementværdi (valgfrit).   Hvis funktionen til transformation af elementværdien optræder på listen over elementdefinitioner, og den ikke er null, bliver den kaldt for at transformere elementværdien, inden den returneres.  Transformationsfunktionen kaldes kun, hvis elementet optræder i inputtet (den bliver aldrig kaldt med standardværdien). </li></ul>


## Examples

### Example #1 
I det følgende forudsættes en nøgleværdi, der er en enkelt byte med 4 forventede elementer i gruppen, som alle har en byte med data efter nøglen.  Elementet optræder i inputtet, som følger:&lt;ul&gt;&lt;li&gt;Nøgle 1 er påkrævet og vises med værdien 11.&lt;/li&gt;&lt;li&gt;Nøgle 2 gentages og vises to gange med værdien 22 og resulterer i værdien \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Nøgle 3 er valgfri og vises ikke og resulterer i værdien null.&lt;/li&gt;&lt;li&gt;Nøgle 4 gentages, men vises ikke og resulterer i værdien \{ }.&lt;/li&gt;&lt;li&gt;Nøgle 5 er ikke en del af gruppen, men vises én gang med værdien 55.  Den ekstra funktion kaldes med nøgleværdien 5 og returnerer formatet svarende til denne værdi (BinaryFormat.Byte).  Værdien 55 læses og fjernes.&lt;/li&gt;&lt;/ul&gt;
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
Følgende eksempel illustrerer transformationen af elementværdien og standardelementværdien.   Det gentagne element med nøgle 1 opsummerer listen over værdier, der er læst med List.Sum.  Det valgfrie element med nøgle 2 har standardværdien 123 i stedet for null.
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
