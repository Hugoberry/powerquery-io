---
title: Value.NativeQuery
---

# Value.NativeQuery


Įvertina užklausą pagal tikslinį objektą.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Įvertinamas `query` pagal `target` naudojant `parameters` nurodytus parametrus ir `options` nurodytas parinktis.

Užklausos išvestį apibrėžia `target`.

`target` pateikia `query` aprašytos operacijos kontekstą.

`query` aprašo užklausą, kurią reikia vykdyti pagal `target`. `query` išreiškiamas taip, kaip būdinga `target` (pvz., T-SQL sakiniu).

Pasirinktinėje reikšmėje `parameters` atitinkamai gali būti arba sąrašas, arba įrašas, kad būtų pateiktos parametrų reikšmės, kurių tikisi `query`.

Pasirinktiniame įraše `options` gali būti parinkčių, lemiančių `query` vykdymo pagal `target` pobūdį. Šios parinktys yra būdingos `target`.



## Category
Values
