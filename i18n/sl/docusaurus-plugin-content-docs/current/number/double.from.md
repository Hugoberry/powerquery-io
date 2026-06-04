---
title: Double.From
---

# Double.From


Iz navedene vrednosti ustvari vrednost s plavajočo vejico in dvojno natančnostjo.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Iz navedene vrednosti `value` vrne vrednost s plavajočo vejico in dvojno natančnostjo `number`. Če je navedena vrednost `value` vrste `null`, `Double.From` vrne `null`. Če je navedena vrednost `value` vrste `number` v obsegu vrednosti s plavajočo vejico in dvojno natančnostjo, je vrnjena vrednost `value`, v nasprotnem primeru pa napaka. Če je navedena vrednost `value` katere koli druge vrste, glejte `Number.FromText` in jo pretvorite v vrednost `number`. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Poiščite vrednost s plavajočo vejico in dvojno natančnostjo `number` za `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
