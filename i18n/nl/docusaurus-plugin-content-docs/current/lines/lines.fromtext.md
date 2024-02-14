---
title: Lines.FromText
---

# Lines.FromText


Zet een tekstwaarde om naar een lijst met tekstwaarden die met regeleinden zijn opgesplitst. Als includeLineSeparators &#39;true&#39; is, worden de regeleindetekens opgenomen in de tekst.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converteert een tekstwaarde naar een lijst met tekstwaarden die worden gesplitst bij regeleinden. Als includeLineSeparators waar is, worden de regeleindetekens opgenomen in de tekst.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (standaard) er is geen citaatgedrag vereist.</li>            <li><code>QuoteStyle.Csv:</code> citaat overeenkomstig de CSV. Er wordt een dubbel aanhalingsteken gebruikt om dergelijke gebieden af te bakenen en een set dubbele aanhalingstekens wordt gebruik om één dubbel aanhalingsteken binnen een dergelijk gebied aan te duiden. </li>          </ul>        </div>    



## Category
Lines
