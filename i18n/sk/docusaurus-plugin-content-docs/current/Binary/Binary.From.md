---
title: Binary.From
---

# Binary.From


## Description

Vytvorí binárny údaj z danej hodnoty


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vráti hodnotu <code>binary</code> zo zadanej hodnoty <code>value</code>. Ak je zadaná hodnota <code>value</code> <code>null</code>, <code>Binary.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>binary</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>binary</code>:      <ul>        <li><code>text</code>: Hodnota <code>binary</code> z textového vyjadrenia. Podrobnosti nájdete v časti <code>Binary.FromText</code>.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Získajte hodnotu &lt;code&gt;binary&lt;/code&gt; čísla &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
