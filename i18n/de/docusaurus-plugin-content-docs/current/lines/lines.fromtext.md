---
title: Lines.FromText
---

# Lines.FromText


Konvertiert einen Textwert in eine Liste mit Textwerten, die an Zeilenumbrüchen geteilt werden. Wenn &#34;includeLineSeparators&#34; den Wert &#34;true&#34; besitzt, sind die Zeilenumbruchzeichen Teil des Texts.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konvertiert einen Textwert in eine Liste mit Textwerten, die an Zeilenumbrüchen geteilt werden. Wenn "includeLineSeparators" den Wert "true" besitzt, sind die Zeilenumbruchzeichen Teil des Texts.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (Standardwert) Es sind keine Anführungszeichen erforderlich.</li>            <li><code>QuoteStyle.Csv:</code> Die Anführungszeichen entsprechen der CSV-Datei. Ein doppeltes Anführungszeichen wird verwendet, um solche Bereiche abzugrenzen, und ein Paar aus doppelten Anführungszeichen wird zum Angeben eines einzelnen doppelten Anführungszeichens in einem solchen Bereich verwendet. </li>          </ul>        </div>    



## Category
Lines
