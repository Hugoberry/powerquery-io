---
title: Int64.From
---

# Int64.From


Iz dane vrednosti ustvari 64-bitno celo število.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Iz navedene vrednosti `value` vrne 64-bitno celoštevilsko vrednost `number`. Če je navedena vrednost `value` vrste `null`, `Int64.From` vrne `null`. Če je navedena vrednost `value` vrste `number` v obsegu 64-bitnega celega števila in brez ulomka, je vrnjena vrednost `value`. Če ima ulomek, je število zaokroženo z določenim načinom zaokroževanja. Privzeti način zaokroževanja je `RoundingMode.ToEven`. Če je navedena vrednost `value` katere koli druge vrste, glejte `Number.FromText` in jo pretvorite v vrednost `number`. Glejte `Number.Round` za načine zaokroževanja, ki so na voljo. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Poiščite 64-bit celo število z vrednostjo `number` za `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Pridobite 64-bitno celoštevilsko vrednost `število` `"4.5"` z načinom zaokroževanja `RoundingMode.AwayFromZero`.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
