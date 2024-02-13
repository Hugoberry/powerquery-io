---
title: Text.From
---

# Text.From


Cria um valor de texto a partir do valor especificado.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Retorna a representação de texto de <code>value</code>. <code>value</code> pode ser um valor <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ou <code>binary</code>.    Se o valor especificado for null, <code>Text.From</code> retornará null. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Crie um valor de texto a partir do número 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
