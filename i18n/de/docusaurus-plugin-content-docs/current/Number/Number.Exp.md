---
title: Number.Exp
---

# Number.Exp


## Description

Potenziert &#34;e&#34; mit dem angegebenen Wert.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Details

Gibt das Ergebnis der Potenzierung von "e" mit <code>number</code> (Exponentialfunktion) zurück.      <ul>        <li><code>number</code>: Ein <code>number</code>-Wert, für den die Exponentialfunktion berechnet werden soll. Wenn <code>number</code> NULL ist, gibt <code>Number.Exp</code> NULL zurück. </li>      </ul>


## Examples

### Example #1 
Setzt &#34;e&#34; in die dritte Potenz.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
