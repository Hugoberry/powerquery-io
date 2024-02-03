---
title: Json.FromValue
---

# Json.FromValue


## Description

Producerar en JSON-representation av ett givet värde.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Producerar en JSON-representation av ett givet värde <code>value</code> med en textkodning specificerad av <code>encoding</code>. Om <code>encoding</code> utesluts används UTF8. Värden representeras enligt följande:<br /> <ul>        <li>Null, text och logiska värden representeras som motsvarande JSON-typer</li>        <li>Siffror representeras som siffror i JSON, med undantag för att <code>#infinity</code>, <code>-#infinity</code> och <code>#nan</code> konverteras till null</li>        <li>Listor representeras som JSON-matriser</li>        <li>Poster representeras som JSON-objekt</li>        <li>Tabeller representeras som en matris av objekt</li>        <li>Datum, tider, datetimes, datetimezones och varaktigheter representeras som ISO-8601-text</li>        <li>Binära värden representeras som Base-64-kodad text</li>        <li>Typer och funktioner resulterar i fel</li> </ul>    


## Examples

### Example #1 
Konverterar ett komplext värde till JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
