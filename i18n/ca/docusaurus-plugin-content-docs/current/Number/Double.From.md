---
title: Double.From
---

# Double.From


## Description

Crea un valor de tipus Double a partir del valor determinat.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna un valor <code>number</code> de tipus Double a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Double.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>number</code> dins de l'interval de tipus Double, es retorna el valor <code>value</code>; en cas contrari, es retorna un error. Si el valor <code>value</code> és de qualsevol altre tipus, primer es convertirà al valor <code>number</code> mitjançant <code>Number.FromText</code>. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obté el valor &lt;code&gt;number&lt;/code&gt; de tipus Double de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
