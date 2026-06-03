---
title: Json.FromValue
---

# Json.FromValue


Producerer en JSON-repræsentation af en bestemt værdi


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Opretter en JSON- repræsentation af en given værdi `value` med en tekstkodning angivet med `encoding`. Hvis `encoding` er udeladt, benyttes UTF8 i stedet. Værdier er repræsenteret som følger:

-   Null-værdier, tekstværdier og logiske værdier repræsenteres som de tilsvarende JSON-typer
-   Tal repræsenteres som tal i JSON, med undtagelse af `#infinity`, `-#infinity` og `#nan`, der konverteres til null
-   Lister repræsenteres som JSON-matrixer
-   Poster repræsenteres som JSON-objekter
-   Tabeller repræsenteres som en matrix med objekter
-   Datoer, tidspunkter, dato/klokkeslæt, dato/tidszoner og varigheder repræsenteres som ISO-8601-tekst
-   Binære værdier repræsenteres som base-64-kodet tekst
-   Typer og funktioner producerer en fejl


## Examples

### Example #1
Konvertér en kompleks værdi til JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
