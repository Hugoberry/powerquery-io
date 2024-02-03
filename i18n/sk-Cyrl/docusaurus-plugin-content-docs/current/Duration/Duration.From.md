---
title: Duration.From
---

# Duration.From


## Description

Vytvorí trvanie z danej hodnoty.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Vráti hodnotu <code>duration</code> zo zadanej hodnoty <code>value</code>. Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>Duration.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>duration</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>duration</code>:      <ul>        <li><code>text</code>: Hodnota <code>duration</code> z textových formátov uplynutého času (d.h:m:s). Podrobnosti nájdete v časti <code>Duration.FromText</code>.</li>        <li><code>number</code>: Ekvivalent <code>duration</code> k počtu celých a zlomkových dní vyjadrený pomocou funkcie <code>value</code>.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;2.525&lt;/code&gt; na hodnotu &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
