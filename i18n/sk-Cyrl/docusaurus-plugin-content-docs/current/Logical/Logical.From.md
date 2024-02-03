---
title: Logical.From
---

# Logical.From


## Description

Vytvorí logickú hodnotu z danej hodnoty.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Vráti hodnotu <code>logical</code> zo zadanej hodnoty <code>value</code>. Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>Logical.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>logical</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>logical</code>:      <ul>        <li><code>text</code>: Hodnota <code>logical</code> z textovej hodnoty, buď <code>"true"</code>, alebo <code>"false"</code>. Podrobnosti nájdete v časti <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code>, ak sa <code>value</code> rovná hodnote <code>0</code>, v opačnom prípade <code>true</code>.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;2&lt;/code&gt; na hodnotu &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
