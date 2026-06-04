---
title: Single.From
---

# Single.From


Iz navedene vrednosti ustvari vrednost s plavajočo vejico in enojno natančnostjo.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Iz navedene vrednosti `value` vrne eno vrednost `number`. Če je navedena vrednost `value` vrste `null`, `Single.From` vrne `null`. Če je navedena vrednost `value` vrste `number` v obsegu enojne vrednosti, je vrnjena vrednost `value`, v nasprotnem primeru je vrnjena napaka. Če je navedena vrednost `value` katere koli druge vrste, glejte `Number.FromText` in jo pretvorite v vrednost `number`. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Poiščite enojno vrednost `number` za `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
