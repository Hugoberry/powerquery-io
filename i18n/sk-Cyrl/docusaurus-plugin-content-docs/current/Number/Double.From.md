---
title: Double.From
---

# Double.From


## Description

Vytvorí číslo s dvojitou presnosťou z danej hodnoty.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vráti hodnotu <code>number</code> s dvojitou presnosťou zo zadanej hodnoty <code>value</code>. Ak je zadaná hodnota <code>value</code> <code>null</code>, príkaz <code>Double.From</code> vráti hodnotu <code>null</code>. Ak je zadaná hodnota <code>value</code> typu <code>number</code> v rozsahu dvojitej presnosti, vráti sa <code>value</code>. V opačnom prípade sa vráti chyba. Ak je <code>value</code> akéhokoľvek iného typu, najskôr sa skonvertuje na hodnotu <code>number</code> pomocou príkazu <code>Number.FromText</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získajte hodnotu &lt;code&gt;number&lt;/code&gt; s dvojitou presnosťou čísla &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
