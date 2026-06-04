---
title: Percentage.From
---

# Percentage.From


Vrne odstotkovno vrednost navedene vrednosti.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Iz navedene vrednosti `value` vrne vrednost `percentage`. Če je navedena vrednost `value` `null`, `Percentage.From` vrne `null`. Če je navedena vrednost `value` `text` z znakom za simbol na koncu, bo vrnjeno pretvorjeno decimalno število. V nasprotnem primeru si oglejte `Number.From` za pretvorbo vrednosti v število `number`. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Pridobite vrednost `percentage` za `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
