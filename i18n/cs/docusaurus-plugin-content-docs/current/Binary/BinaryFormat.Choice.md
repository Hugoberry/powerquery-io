---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Vrátí binární formát, který vybírá další binární formát na základě již čtené hodnoty.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Vrátí binární formát, který vybírá další binární formát na základě již čtené hodnoty. Hodnota v binárním formátu vytvořená touto funkcí pracuje v několika fázích:<ul><li>Binární formát určený parametrem <code>binaryFormat</code> se používá při čtení hodnoty.</li><li>Hodnota je předána funkci výběru, kterou určil parametr <code>chooseFunction</code> .</li><li>Funkce výběru zkontroluje hodnotu a vrátí druhý binární formát.</li><li>Druhý binární formát přečte druhou hodnotu.</li><li>Je-li zadána kombinační funkce, první i druhá hodnota je předána této funkci, což vrátí výslednou hodnotu.</li><li>Není-li zadána kombinační funkce, vrátí se jen druhá hodnota.</li><li>Vrátí se druhá hodnota.</li></ul>Volitelný parametr <code>type</code> určuje typ binárního formátu, který je vrácen zvolenou funkcí. Lze zadat hodnotu <code>type any</code>, <code>type list</code>, nebo <code>type binary</code>. Není-li zadán parametr <code>type</code>, použije se hodnota <code>type any</code>. Pokud se použije hodnota <code>type list</code> nebo hodnota <code>type binary</code>, systém může případně vrátit hodnotu datového proudu <code>binary</code> nebo <code>list</code> místo hodnoty z vyrovnávací paměti, což sníží množství paměti nutné k přečtení formátu.


## Examples

### Example #1 
Čte seznam bajtů, kde je počet elementů určen prvním bajtem.
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
Čte seznam bajtů, kde je počet elementů určen prvním bajtem, a zachová první čtený bajt.
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
S využitím datového proudu čte seznam bajtů, ve kterém je počet elementů určen prvním bajtem.
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
