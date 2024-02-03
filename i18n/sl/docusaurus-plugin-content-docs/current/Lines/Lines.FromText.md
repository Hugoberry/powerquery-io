---
title: Lines.FromText
---

# Lines.FromText


## Description

Pretvori besedilno vrednost v seznam besedilnih vrednosti, ločenih pri prelomih vrstic. Če je vrednost &#34;includeLineSeparators&#34; enaka &#34;true&#34;, so znaki za prelom vrstic vključeni v besedilo.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Pretvori besedilno vrednost v seznam besedilnih vrednosti, ločenih pri prelomih vrstic. Če je vrednost "includeLineSeparators" enaka "true", so znaki za prelom vrstic vključeni v besedilo.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (privzeto) dodati ni treba nobenih narekovajev.</li>            <li><code>QuoteStyle.Csv:</code> narekovaji so dodani v skladu z obliko zapisa CSV. Dvojni narekovaj je uporabljen za razmejitev takih območij, s parom dvojnih narekovajev pa je označen en dvojni narekovaj v takem območju. </li>          </ul>        </div>    



## Category
Lines
