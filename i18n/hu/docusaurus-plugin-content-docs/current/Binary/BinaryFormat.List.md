---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Elemek sorrendjét olvasó bináris formátumot ad vissza, list típusú elemként.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Elemek sorrendjét olvasó bináris formátumot ad vissza, és <code>list</code> elemet ad vissza. A(z) <code>binaryFormat</code> paraméter határozza meg az egyes értékek bináris formátumát. Az olvasandó elemek száma háromféleképpen határozható meg: <ul><li>Ha a(z) <code>countOrCondition</code> nincs megadva, akkor a bináris formátumot kell olvasni, amíg már nincs több elem.</li><li>Ha a(z) <code>countOrCondition</code> egy szám, akkor a bináris formátummal a számnak megfelelő mennyiségű elem olvasható.</li><li>Ha a(z) <code>countOrCondition</code> egy függvény, akkor az adott függvény hívható meg minden olvasott elemnél. A függvény igaz értéket ad vissza az elemek olvasásának folytatásához, illetve hamis értéket az olvasás befejezéséhez. Az utolsó elem szerepelni fog a listán.</li><li>Ha a(z) <code>countOrCondition</code>egy bináris formátum, akkor a rendszer azt feltételezi, hogy az elemek darabszáma megelőzi a listát, és megadott formátumot használja a darabszám kiolvasásához.</li></ul>


## Examples

### Example #1 
Az adatok végéig olvassa az adatokat.
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
Két bájtot olvas.
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
Addig olvassa a bájtokat, amíg a bájtérték nagyobb, mint 2 vagy 2-vel egyenlő.
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
