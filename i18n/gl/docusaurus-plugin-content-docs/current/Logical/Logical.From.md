---
title: Logical.From
---

# Logical.From


## Description

Crea unha lóxica a partir do valor indicado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Devolve un valor <code>logical</code> a partir do <code>value</code> indicado. Se o valor <code>value</code> é <code>null</code>, <code>Logical.From</code> devolve <code>null</code>. Se o valor <code>value</code> é <code>logical</code>, devólvese <code>value</code>. Pódense converter a un valor <code>logical</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: un valor <code>logical</code> a partir do valor de texto, xa sexa <code>"true"</code> ou <code>"false"</code>. Consulte <code>Logical.FromText</code> para obter máis información.</li>        <li><code>number</code>: <code>false</code> se <code>value</code> é igual que <code>0</code>, se non, <code>true</code>.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Converter &lt;code&gt;2&lt;/code&gt; nun valor &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
