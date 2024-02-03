---
title: Binary.From
---

# Binary.From


## Description

Vytvoří binární hodnotu z předané hodnoty.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vrátí hodnotu <code>binary</code> z předané hodnoty <code>value</code>. Pokud je předaná hodnota <code>value</code> <code>null</code>, funkce <code>Binary.From</code> vrátí hodnotu <code>null</code>.  Pokud je předaná hodnota <code>value</code> typu <code>binary</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>binary</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>binary</code> z textové reprezentace. Další informace naleznete v popisu funkce <code>Binary.FromText</code>.</li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Získat hodnotu &lt;code&gt;binary&lt;/code&gt; hodnoty &lt;code&gt;&#34;1011&#34;&lt;/code&gt;
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
