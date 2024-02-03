---
title: Text.Split
---

# Text.Split


## Description

Розділяє текст на список текстових значень на основі вказаного роздільника.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Повертає список текстових значень після розділення текстового значення <code>text</code> на основі вказаного роздільника, <code>separator</code>.


## Examples

### Example #1 
Створити список з розділеного символом &#34;|&#34; текстового значення &#34;Ім&#39;я|Адреса|Номер телефону&#34;.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
