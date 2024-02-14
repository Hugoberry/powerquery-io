---
title: Lines.FromText
---

# Lines.FromText


Konverterar ett textvärde till en lista med textvärden separerade med radbrytningar. Om includeLineSeparators är true tas radbrytningstecknen med i texten.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konverterar ett textvärde till en lista med textvärden separerade med radbrytningar. Om includeLineSeparators är sann, innebär det att radbrytningstecknen ingår i texten.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (standard) Inga citattecken behövs.</li>            <li><code>QuoteStyle.Csv:</code> Citattecken används enligt csv. Dubbla citattecken används för att avgränsa sådana regioner, och ett par dubbla citattecken används för att indikera ett enskilt dubbelt citattecken i en sådan region. </li>          </ul>        </div>    



## Category
Lines
