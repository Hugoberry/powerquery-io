---
title: Single.From
---

# Single.From


## Description

Crea un valor de tipus Single a partir del valor determinat.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna un valor <code>number</code> de tipus SIngle a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Single.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>number</code> dins de l'interval de tipus Single, es retorna el valor <code>value</code>; en cas contrari, es retorna un error. Si el valor <code>value</code> és de qualsevol altre tipus, primer es convertirà al valor <code>number</code> mitjançant <code>Number.FromText</code>. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté el valor &lt;code&gt;number&lt;/code&gt; de tipus Single de &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
