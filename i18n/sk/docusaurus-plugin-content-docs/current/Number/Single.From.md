---
title: Single.From
---

# Single.From


## Description

Vytvorí číslo s jednoduchou presnosťou z danej hodnoty.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vráti hodnotu <code>number</code> s jednoduchou presnosťou zo zadanej hodnoty <code>value</code>. Ak je zadaná hodnota <code>value</code> <code>null</code>, príkaz <code>Single.From</code> vráti hodnotu <code>null</code>. Ak je zadaná hodnota <code>value</code> typu <code>number</code> v rozsahu jednoduchej presnosti, vráti sa <code>value</code>. V opačnom prípade sa vráti chyba. Ak je <code>value</code> akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu <code>number</code> pomocou príkazu <code>Number.FromText</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získajte hodnotu &lt;code&gt;number&lt;/code&gt; s jednoduchou presnosťou čísla &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
