---
title: Percentage.From
---

# Percentage.From


Retourne une valeur de pourcentage de la valeur donnée.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retourne une valeur <code>percentage</code> de la valeur <code>value</code> donnée. Si la valeur <code>value</code> donnée est <code>null</code>, <code>Percentage.From</code> retourne <code>null</code>.  Si la valeur <code>value</code> donnée est <code>text</code> avec un symbole de pourcentage à la fin, le nombre décimal converti est retourné. Sinon, la valeur sera convertie en <code>number</code> en utilisant <code>Number.From</code>. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtenez la valeur &lt;code&gt;percentage&lt;/code&gt; de &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
