---
title: Lines.FromText
---

# Lines.FromText


## Description

Convertește o valoare text într-o listă de valori text divizate la sfârșiturile de linie. Dacă includeLineSeparators este true, atunci caracterele sfârșit de linie sunt incluse în text.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Convertește o valoare text într-o listă de valori text divizate la sfârșiturile de linie. Dacă includeLineSeparators este true, atunci caracterele sfârșit de linie sunt incluse în text.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (implicit) nu este necesar un comportament de includere între ghilimele.</li>            <li><code>QuoteStyle.Csv:</code> includerea între ghilimele se efectuează ca în formatul CSV. Se utilizează un caracter ghilimea dublă pentru a demarca astfel de regiuni și se mai utilizează o pereche de ghilimele duble pentru a indica prezența unui caracter ghilimea unică într-o astfel de regiune. </li>          </ul>        </div>    



## Category
Lines
