---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Elemcsoportot olvasó bináris formátumot ad vissza.


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

A paraméterek a következők:

-   A(z) `binaryFormat` paraméter határozza meg a kulcsérték bináris formátumát.
-   A(z) `group` paraméter szolgáltat adatokat az ismert elemek csoportjáról.
-   A választható `extra` paraméterrel adható meg olyan függvény, amely bináris formátumú értéket ad vissza a nem várt kulcsok értékéhez. Ha a(z) `extra` paraméter nincs megadva, akkor hiba jelentkezik a nem várt kulcsértékek esetében.

A(z) `group` paraméter elemdefiníciók listáját határozza meg. Az elemdefiníciók 3–5 értéket tartalmazó listák. Ezek a következők:

-   Kulcsérték. Az elemnek megfelelő kulcs értéke. Egyedinek kell lennie az elemkészletben.
-   Elemformátum. Az elem értékének megfelelő bináris formátum. Ez lehetővé teszi, hogy minden elemnek más formátuma legyen.
-   Elem előfordulása. A `BinaryOccurrence.Type` érték azt adja meg, hogy az elemnek hányszor kell előfordulnia a csoportban. A kötelező elemek hiánya hibát okoz. A rendszer nem várt kulcsértékként kezeli az ismétlődő kötelező vagy válaszható elemeket.
-   Elem alapértelmezett értéke (választható). Ha alapértelmezett elemérték szerepel az elemdefiníciók listáján, és nem null, akkor a rendszer ezt használja az alapérték helyett. Az ismétlődő és a választható elemek alapértéke null, és az ismétlődő értékek alapérték az üres lista \{ \}.
-   Elem értékének átalakítása (választható). Ha az elemértéket átalakító függvény szerepel az elemdefiníciók listáján, és nem null, akkor a rendszer ezt a függvény hívja meg az elemérték átalakításához az érték visszaadása előtt. Az átalakító függvény meghívása csak akkor történik meg, ha az elem szerepel a bemenetben (az alapértelmezett értékkel nem hívható meg).


## Examples

### Example #1
Az alábbiakban olyan kulcsértéket feltételezünk, amely egybájtos, 4 elem tartozik hozzá a csoportban, és mind a 4 elemben egy bájtnyi adat szerepel a kulcs után. Az elemek a következőképpen szerepelnek a bemenetben:

-   Az 1. kulcs kötelező, és a 11 értékkel jelenik meg.
-   A 2. kulcs ismétlődik, kétszer jelenik meg a 22 értékkel, és a \{ 22, 22 \} értéket adja eredményül.
-   A 3. kulcs választható, nem jelenik meg, és null értéket ad eredményül.
-   A 4. kulcs ismétlődik, de nem jelenik meg, és a \{ \} értéket adja eredményül.
-   Az 5. kulcs nem része a csoportnak, de megjelenik egyszer az 55 értékkel. Az extra függvény meghívása az 5. kulcsértékkel történik, és a visszaadott eredmény az adott értéknek megfelelő formátum lesz (BinaryFormat.Byte). A rendszer kiolvassa az 55 értéket, és figyelmen kívül hagyja azt.
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
A következő példa az elemérték átalakítását és az alapértelmezett elemértéket mutatja be. Az 1. kulcshoz tartozó ismétlődő elem a List.Sum függvény használatával összesíti a kiolvasott értékek listáját. A 2. kulcshoz tartozó választható elem alapértéke 123 a null érték helyett.
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
