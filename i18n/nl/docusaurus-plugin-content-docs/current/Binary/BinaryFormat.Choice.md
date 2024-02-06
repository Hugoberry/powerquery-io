---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Retourneert een binaire indeling die de volgende binaire indeling kiest op basis van een waarde die al is gelezen.


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

Retourneert een binaire indeling die de volgende binaire indeling kiest op basis van een waarde die al is gelezen.  De waarde van een binaire indeling die door deze functie wordt geproduceerd, werkt in stadia:<ul><li>De binaire indeling die is opgegeven met de parameter <code>binaryFormat</code> wordt gebruikt om een waarde te lezen.</li><li>De waarde wordt doorgegeven aan de keuzefunctie die is opgegeven met de parameter <code>chooseFunction</code>.</li><li>De keuzefunctie inspecteert de waarde en retourneert een secundaire binaire indeling.</li><li>De secundaire binaire indeling wordt gebruikt om een tweede waarde te lezen.</li><li>Als de combineerfunctie is opgegeven, worden de eerste en tweede waarden doorgegeven aan de combineerfunctie en wordt de resulterende waarde geretourneerd.</li><li>Als de combineerfunctie niet is opgegeven, wordt de tweede waarde geretourneerd.</li><li>De tweede waarde wordt geretourneerd.</li></ul>De optionele parameter <code>type</code> geeft het type binaire indeling aan dat wordt geretourneerd door de keuzefunctie.  <code>type any</code>, <code>type list</code> of <code>type binary</code> kan worden opgegeven.  Als de parameter <code>type</code> niet is opgegeven, wordt <code>type any</code> gebruikt.   Als <code>type list</code> of <code>type binary</code> wordt gebruikt, kan het systeem een gestreamde <code>binary</code> waarde of <code>list</code>waarde retourneren in plaats van een gebufferde waarde waardoor de beschikbare hoeveelheid geheugen voor het lezen van de indeling kan worden verminderd.


## Examples

### Example #1 
Een lijst met bytes lezen waarvan het aantal elementen wordt bepaald door de eerste byte.
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
Een lijst met bytes lezen waarvan het aantal elementen wordt bepaald door de eerste byte, en de leesbewerking van de eerste byte bewaren.
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
Een lijst met bytes lezen waarvan het aantal elementen wordt bepaald door de eerste byte met behulp van een gestreamde lijst.
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
