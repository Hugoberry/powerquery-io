---
title: Logical.From
---

# Logical.From


## Description

Vytvoří logickou hodnotu z předané hodnoty.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Vrátí hodnotu <code>logical</code> z předané hodnoty <code>value</code>. Pokud je předaná hodnota <code>value</code> <code>null</code>, funkce <code>Logical.From</code> vrátí hodnotu <code>null</code>.  Pokud je předaná hodnota <code>value</code> typu <code>logical</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>logical</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>logical</code> z textové hodnoty, buď <code>"true"</code>, nebo <code>"false"</code>. Další informace naleznete v popisu funkce <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code>, pokud se hodnota <code>value</code> rovná <code>0</code>, jinak <code>true</code>.</li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;2&lt;/code&gt; na hodnotu &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
