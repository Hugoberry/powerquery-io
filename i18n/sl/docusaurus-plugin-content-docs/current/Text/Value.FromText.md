---
title: Value.FromText
---

# Value.FromText


## Description

Ustvari močno tipizirano vrednost iz predstavitve v obliki besedila.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekodira vrednost iz predstavitve vrednosti <code>text</code> v obliki besedila in jo obravnava kot vrednost z ustrezno vrsto.    <code>Value.FromText</code> vzame besedilno vrednost in vrne število, logično vrednost, ničelno vrednost, datum/uro, trajanje ali besedilno vrednost. Prazna besedilna vrednost je obravnavana kot vrednost ničelna vrednost.    Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").



## Category
Text.Conversions from and to text
