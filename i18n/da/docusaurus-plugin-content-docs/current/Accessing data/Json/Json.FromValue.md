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

Opretter en JSON- repræsentation af en given værdi <code>value</code> med en tekstkodning angivet med <code>encoding</code>. Hvis <code>encoding</code> er udeladt, benyttes UTF8 i stedet. Værdier er repræsenteret som følger:<br /> <ul>        <li>Null-værdier, tekstværdier og logiske værdier repræsenteres som de tilsvarende JSON-typer</li>        <li>Tal repræsenteres som tal i JSON, med undtagelse af <code>#infinity</code>, <code>-#infinity</code> og <code>#nan</code>, der konverteres til null</li>        <li>Lister repræsenteres som JSON-matrixer</li>        <li>Poster repræsenteres som JSON-objekter</li>        <li>Tabeller repræsenteres som en matrix med objekter</li>        <li>Datoer, tidspunkter, dato/klokkeslæt, dato/tidszoner og varigheder repræsenteres som ISO-8601-tekst</li>        <li>Binære værdier repræsenteres som base-64-kodet tekst</li>        <li>Typer og funktioner producerer en fejl</li> </ul>    


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
