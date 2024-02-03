---
title: Percentage.From
---

# Percentage.From


## Description

Ofereix com a resultat un valor percentual a partir del valor indicat.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Retorna un valor <code>percentage</code> a partir del valor <code>value</code> proporcionat. Si el valor <code>value</code> proporcionat és <code>null</code>, <code>Percentage.From</code> retorna un valor <code>null</code>. Si el valor <code>value</code> és <code>text</code> amb un símbol de percentatge final, es retornarà el número decimal convertit. Altrament, el valor es convertirà en un valor <code>number</code> mitjançant <code>Number.From</code>. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Obteniu el valor &lt;code&gt;percentage&lt;/code&gt; de &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
