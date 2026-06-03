---
title: Json.FromValue
---

# Json.FromValue


Producerar en JSON-representation av ett givet värde.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Producerar en JSON-representation av ett givet värde `value` med en textkodning specificerad av `encoding`. Om `encoding` utesluts används UTF8. Värden representeras enligt följande:

-   Null, text och logiska värden representeras som motsvarande JSON-typer
-   Siffror representeras som siffror i JSON, med undantag för att `#infinity`, `-#infinity` och `#nan` konverteras till null
-   Listor representeras som JSON-matriser
-   Poster representeras som JSON-objekt
-   Tabeller representeras som en matris av objekt
-   Datum, tider, datetimes, datetimezones och varaktigheter representeras som ISO-8601-text
-   Binära värden representeras som Base-64-kodad text
-   Typer och funktioner resulterar i fel


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
