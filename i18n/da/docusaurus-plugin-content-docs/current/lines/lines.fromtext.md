---
title: Lines.FromText
---

# Lines.FromText


Konverterer en tekstværdi til en liste over tekstværdier, der opdeles med linjeskift. Hvis includeLineSeparators er true, er linjeskifttegnet inkluderet i teksten.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konverterer en tekstværdi til en liste over tekstværdier opdelt på linjeskift. Hvis includeLineSeparators er true, så er linjeskift inkluderet i teksten.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (standard ) Ingen anførselsstil er påkrævet.</li>            <li><code>QuoteStyle.Csv:</code> Anførsel er pr Csv. En dobbelt anførselstegn bruges til at afgrænse disse områder, og et par dobbelte anførselsstegn bruges til at angive en enkelt dobbelt anførselstegn inden for en sådan region. </li>          </ul>        </div>    



## Category
Lines
