---
title: Logical.From
---

# Logical.From


## Description

Crea una logica dal valore specificato.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Restituisce un valore <code>logical</code> dall'elemento <code>value</code> specificato. Se l'elemento specificato <code>value</code> è <code>null</code>, <code>Logical.From</code> restituisce <code>null</code>.  Se l'elemento specificato <code>value</code> è <code>logical</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>logical</code>:      <ul>        <li><code>text</code>: valore <code>logical</code> dal valore di testo, <code>"true"</code> o <code>"false"</code>. Per informazioni, vedere <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code> se <code>value</code> è uguale a <code>0</code>, in caso contrario <code>true</code>.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Converte &lt;code&gt;2&lt;/code&gt; in un valore &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
