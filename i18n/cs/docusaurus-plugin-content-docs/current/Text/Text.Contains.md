---
title: Text.Contains
---

# Text.Contains


## Description

Vrátí, zda text obsahuje dílčí řetězec.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Zjistí, jestli <code>text</code> obsahuje hodnotu <code>substring</code>. Vrátí hodnotu True, pokud je tato hodnota nalezena. Tato funkce nepodporuje zástupné znaky ani regulární výrazy.      <br />      <br />      Nepovinný argument <code>comparer</code> lze použít k určení porovnání bez rozlišování malých a velkých písmen nebo porovnání s podporou jazykové verze a národního prostředí.      V jazyce vzorců jsou k dispozici následující integrované porovnávače:       <ul>        <li><code>Comparer.Ordinal</code>: Používá se k provádění řadového porovnání s rozlišováním malých a velkých písmen.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Používá se k provádění řadového porovnání bez rozlišování malých a velkých písmen.</li>        <li> <code>Comparer.FromCulture</code>: Používá se k provádění porovnání s rozlišením jazykové verze.</li>      </ul>


## Examples

### Example #1 
Zjistí, zda text „Hello, World“ obsahuje text „Hello“.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda text „Hello, World“ obsahuje text „hello“.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Zjistěte, jestli text „Hello World“ obsahuje „hello“, pomocí porovnávače, který nerozlišuje velká a malá písmena.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
