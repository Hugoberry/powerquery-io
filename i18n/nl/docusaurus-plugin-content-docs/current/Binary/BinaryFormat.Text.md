---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Retourneert een binaire indeling die een tekstwaarde leest.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Retourneert een binaire indeling die een tekstwaarde leest.  <code>length</code> geeft het aantal bytes aan dat moet worden gedecodeerd of de binaire indeling van de lengte die voorafgaat aan de tekst.  De optionele waarde <code>encoding</code> specificeert de codering van de tekst.  Als de waarde <code>encoding</code> niet is opgegeven, wordt de codering bepaald op basis van de byte-volgordemarkeringen voor Unicode.  Als er geen byte-volgordemarkeringen aanwezig zijn, wordt <code>TextEncoding.Utf8</code> gebruikt.


## Examples

### Example #1 
Twee bytes als ASCII-tekst decoderen.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2 
ASCII-tekst decoderen waarbij de lengte van de tekst in bytes vóór de tekst verschijnt als een byte.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
