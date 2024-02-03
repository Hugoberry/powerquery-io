---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Vrátí funkci porovnávače bez rozlišení malých a velkých písmen, která pro porovnání hodnot používá pravidla řadových číslovek.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Vrátí porovnávací funkci bez rozlišování malých a velkých písmen, která pomocí řadových pravidel porovnává zadané hodnoty  <code>x</code> a <code>y</code>.<br />        <br />        Porovnávací funkce přijímá dva argumenty a vrací -1, 0 nebo 1 podle toho, jestli je první hodnota menší než, rovna,  nebo větší než druhá.    


## Examples

### Example #1 
Pomocí pravidel řadových číslovek bez rozlišení malých a velkých písmen můžete porovnat řetězec Abc s řetězcem abc. Při použití příkazu &lt;code&gt;Comparer.Ordinal&lt;/code&gt; je Abc menší než abc. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
