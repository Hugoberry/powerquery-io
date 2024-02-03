---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Įvertinamas <code>query</code> pagal <code>target</code> naudojant <code>parameters</code> nurodytus parametrus ir <code>options</code> nurodytas parinktis.<br />Užklausos išvestį apibrėžia <code>target</code>.<br /><code>target</code> pateikia <code>query</code> aprašytos operacijos kontekstą.<br /><code>query</code> aprašo užklausą, kurią reikia vykdyti pagal <code>target</code>. <code>query</code> išreiškiamas taip, kaip būdinga <code>target</code> (pvz., T-SQL sakiniu).<br />Pasirinktinėje reikšmėje <code>parameters</code> atitinkamai gali būti arba sąrašas, arba įrašas, kad būtų pateiktos parametrų reikšmės, kurių tikisi <code>query</code>.<br />Pasirinktiniame įraše <code>options</code> gali būti parinkčių, lemiančių <code>query</code> vykdymo pagal <code>target</code> pobūdį. Šios parinktys yra būdingos <code>target</code>.<br />



## Category
Values
