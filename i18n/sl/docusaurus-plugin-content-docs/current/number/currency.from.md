---
title: Currency.From
---

# Currency.From


Dano vrednost pretvori v vrednost valute.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Iz dane vrednosti`value` vrne vrednost `currency`. Če je navedena vrednost `value` `null`, `Currency.From` vrne vrednost `null`. Če je navedena vrednost `value` vrste `number` v obsegu valute, bo prikazan ulomek vrednosti `value`, zaokrožen na 4 decimalna mesta. Če je navedena vrednost `value` katere koli druge vrste, bo najprej pretvorjena v `number` s pomočjo `Number.FromText`. Veljaven obseg za valuto je od `-922,337,203,685,477.5808` do `922,337,203,685,477.5807`. Glejte `Number.Round` za načine zaokroževanja, ki so na voljo. Privzeti način zaokroževanja je `RoundingMode.ToEven`. Navedete lahko tudi dodatni parameter `culture` (na primer"sl-SI").


## Examples

### Example #1
Pridobite vrednost `currency` za `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Pridobite vrednost `currency` števila `"1.23455"` z načinom zaokroževanja `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
