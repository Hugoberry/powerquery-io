---
title: Int16.From
---

# Int16.From


Iz navedene vrednosti ustvari 16-bitno celo število.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Iz navedene vrednosti `value` vrne 16-bitno celoštevilsko vrednost `number`. Če je navedena vrednost `value` vrste `null`, `Int16.From` vrne `null`. Če je navedena vrednost `value` vrste `number` v obsegu 16-bitnega celega števila in brez ulomka, je vrnjena vrednost `value`. Če ima ulomek, je število zaokroženo z določenim načinom zaokroževanja. Privzeti način zaokroževanja je `RoundingMode.ToEven`. Če je navedena vrednost `value` katere koli druge vrste, glejte `Number.FromText` in jo pretvorite v vrednost `number`. Glejte `Number.Round` za načine zaokroževanja, ki so na voljo. Navedete lahko tudi izbirni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Poiščite 16-bitno celoštevilsko vrednost `number` za `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Poiščite 16-bitno celoštevilsko vrednost `number` za `"4.5"` z načinom zaokroževanja `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
