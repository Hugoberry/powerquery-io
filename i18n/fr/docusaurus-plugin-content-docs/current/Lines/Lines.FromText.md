---
title: Lines.FromText
---

# Lines.FromText


Convertit une valeur de texte en une liste de valeurs de texte fractionnées au niveau des sauts de lignes. Si includeLineSeparators a la valeur true, les caractères de saut de ligne sont inclus dans le texte.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Convertit une valeur de texte en une liste de valeurs de texte fractionnées au niveau des sauts de lignes. Si includeLineSeparators a la valeur true, les caractères de saut de ligne sont inclus dans le texte.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (par défaut) Aucune règle d'utilisation de guillemets n'est nécessaire.</li>            <li><code>QuoteStyle.Csv:</code> L'utilisation de guillemets suit les mêmes règles que pour le format CSV. Un guillemet double est utilisé pour séparer ces régions, et une paire de guillemets doubles est utilisée pour indiquer la présence d'un guillemet double dans une de ces régions. </li>          </ul>        </div>    



## Category
Lines
