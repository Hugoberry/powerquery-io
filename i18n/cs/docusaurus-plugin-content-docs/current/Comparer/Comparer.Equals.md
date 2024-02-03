---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Vrátí logickou hodnotu založenou na kontrole rovnosti dvou daných hodnot.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Vrátí <code>logickou</code> hodnotu založenou na kontrole rovnosti dvou zadaných hodnot <code>x</code> a <code>y</code>, using the provided <code>comparer</code>.      <div>        <code>comparer</code> je <code>Porovnávač</code>, který se používá k řízení porovnání.        Porovnávač je funkce, která přijímá dva argumenty a vrací -1, 0 nebo 1 na základě toho, jestli je první hodnota menší než, rovna,  nebo větší než druhá.        Porovnávač lze použít k porovnání bez rozlišování malých a velkých písmen nebo jazykové verze a národního prostředí.      </div>      <div>        V jazyce vzorců jsou k dispozici následující integrované porovnávače:      </div>      <ul>        <li><code>Comparer.Ordinal</code>:  Používá se k přesnému porovnání pořadí</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Používá se k porovnání bez rozlišování velkých a malých písmen s přesným pořadím</li>        <li> <code>Comparer.FromCulture</code>: Používá se k porovnání s jazykovou verzí</li>      </ul>


## Examples

### Example #1 
Porovnáním hodnot „1“ a „A“ s použitím národního prostředí „en-us“ určí, jestli jsou hodnoty stejné.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
