---
title: Text.Split
---

# Text.Split


## Description

Rozdělí text na seznam textových hodnot na základě určeného oddělovače.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Vrátí seznam textových hodnot, který je výsledkem rozdělení textové hodnoty <code>text</code> na základě zadaného oddělovače <code>separator</code>.


## Examples

### Example #1 
Vytvoří seznam z textové hodnoty Name|Address|PhoneNumber obsahující oddělovač |.
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
