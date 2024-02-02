---
title: Text.From
---

# Text.From


## Description

Crée une valeur de texte à partir de la valeur spécifiée.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Retourne la représentation de texte de <code>value</code>. La valeur <code>value</code> peut être une valeur <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ou <code>binary</code>.    Si la valeur spécifiée est null, <code>Text.From</code> retourne null. Un <code>culture</code> facultatif peut aussi être fourni (par exemple, "fr-fr").


## Examples

### Example #1 
Créez une valeur de texte à partir du nombre 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
