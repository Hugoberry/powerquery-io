---
title: Text.From
---

# Text.From


## Description

Cria um valor de texto a partir do valor especificado.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Devolve a representação em texto de <code>value</code>. <code>value</code> pode ser um valor <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ou <code>binary</code>.    Se o valor especificado for null, <code>Text.From</code> devolve null. Pode também ser fornecida uma <code>culture</code> opcional (por exemplo, "en-US").


## Examples

### Example #1 
Criar um valor de texto a partir do número 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
