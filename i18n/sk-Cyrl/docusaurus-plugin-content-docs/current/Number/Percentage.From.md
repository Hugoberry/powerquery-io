---
title: Percentage.From
---

# Percentage.From


## Description

Vráti percentuálnu hodnotu z danej hodnoty.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vráti hodnotu <code>percentage</code> zo zadanej hodnoty <code>value</code>. Ak je zadaná hodnota <code>value</code> <code>null</code>, <code>Percentage.From</code> vráti hodnotu <code>null</code>. Ak je zadaná hodnota <code>value</code> <code>text</code> zakončená symbolom percenta, vráti sa konvertované desatinné číslo. V opačnom prípade sa hodnota konvertuje na hodnotu <code>number</code> pomocou príkazu <code>Number.From</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získajte hodnotu &lt;code&gt;percentage&lt;/code&gt; z čísla &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
