---
title: Lines.FromText
---

# Lines.FromText


Converte un valore di testo in un elenco di valori di testo suddivisi in corrispondenza delle interruzioni di riga. Se includeLineSeparators è true, i caratteri dell&#39;interruzione di riga sono inclusi nel testo.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converte un valore di testo in un elenco di valori di testo suddivisi in corrispondenza delle interruzioni di riga. Se includeLineSeparators è true, i caratteri dell'interruzione di riga sono inclusi nel testo.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (valore predefinito) le virgolette non sono necessarie.</li>            <li><code>QuoteStyle.Csv:</code> le virgolette sono usate in base al formato CSV. Viene usato un carattere di virgoletta doppia per delimitare tali aree e viene usata una coppia di caratteri di virgoletta doppia per indicare un singolo carattere di virgoletta doppia all'interno di tale area. </li>          </ul>        </div>    



## Category
Lines
