---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Retourneert een binaire indeling die een groep items leest.


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

De parameters zijn als volgt:<ul><li>De parameter <code>binaryFormat</code> specificeert de binaire indeling van de sleutelwaarde.</li><li>De parameter <code>group</code> verschaft informatie over de groep met bekende items.</li><li>De optionele parameter <code>extra</code> kan worden gebruikt om een functie op te geven die een waarde van een binaire indeling retourneert voor de waarde die volgt op een sleutel die niet werd verwacht. Als de parameter <code>extra</code> niet is opgegeven, treedt er een fout op als er onverwachte sleutelwaarden zijn.</li></ul>Met de parameter <code>group</code> wordt een lijst met itemdefinities opgegeven. Elke itemdefinitie is een lijst die 3-5 van de volgende waarden bevat:<ul><li>Sleutelwaarde. De waarde van de sleutel die overeenkomt met het item. Deze moet uniek zijn binnen de set met items.</li><li>Itemindeling. De binaire indeling die overeenkomt met de waarde van het item. Op deze manier kan elk item een andere indeling hebben. </li><li>Iteminstantie. De waarde <code>BinaryOccurrence.Type</code> geeft aan hoe vaak het item volgens verwachting in de groep verschijnt.  Vereiste items die niet aanwezig zijn, veroorzaken een fout. Vereiste of optionele dubbele items worden afgehandeld als onverwachte sleutelwaarden.</li><li>Standaardwaarde van het item (optioneel). Als de standaardwaarde van het item in de lijst met itemdefinities verschijnt en niet null is, wordt dit gebruikt in plaats van de standaard. De standaard voor herhalende of optionele items is null en de standaard voor herhalende waarden is een lege lijst \{ }.</li><li>Transformatie itemwaarde (optioneel).  Als de functie voor transformatie van de itemwaarde aanwezig is in de lijst met itemdefinities en niet null is, dan wordt deze functie aangeroepen om de itemwaarde te transformeren voordat de waarde wordt geretourneerd. De transformatiefunctie wordt alleen aangeroepen als het item verschijnt in de invoer (het wordt nooit aangeroepen met de standaardwaarde). </li></ul>


## Examples

### Example #1 
Het volgende gaat uit van een sleutelwaarde die een enkele byte is en die 4 verwachte items in de groep heeft die allemaal een byte met gegevens hebben die volgt na de sleutel.  De items verschijnen als volgt in de invoer:&lt;ul&gt;&lt;li&gt;Sleutel 1 is verplicht en verschijnt met waarde 11.&lt;/li&gt;&lt;li&gt;Sleutel 2 wordt herhaald en verschijnt twee keer met waarde 22 en heeft een waarde \{ 22, 22 } als resultaat.&lt;/li&gt;&lt;li&gt;Sleutel 3 is optioneel, en verschijnt niet, en heeft de waarde null als resultaat.&lt;/li&gt;&lt;li&gt;Sleutel 4 wordt herhaald maar verschijnt niet, en heeft de waarde\{ } als resultaat.&lt;/li&gt;&lt;li&gt;Sleutel 5 maakt geen deel uit van de groep maar verschijnt eenmalig met de waarde 55.  De extra functie wordt aangeroepen met de sleutelwaarde 5 en retourneert de indeling die overeenkomt met die waarde (BinaryFormat.Byte).  De waarde 55 wordt gelezen en genegeerd.&lt;/li&gt;&lt;/ul&gt;
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
Het volgende voorbeeld illustreert de transformatie van de itemwaarde en de standaardwaarde van het item.   Het herhalende item met sleutel 1 telt de lijst met waarden op die zijn gelezen met behulp van List.Sum.  Het optionele item met sleutel 2 geeft een standaardwaarde van 123 in plaats van null.
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
